import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Dropdown, Form, Row, Col } from "react-bootstrap";

const AddJobForm = () => {
  const [validated, setValidate] = useState(false);
  const [Category, setCategory] = useState([]);
  const [City, setCity] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [imageData, setImageData] = useState("");
  const [formData, setFormData] = useState({
    job_title: "",
    company: "",
    open_date: "",
    close_date: "",
    description: "",
    qualification: "",
    application_instruction: "",
    job_type: "",
    location: "",
    category: "",
    job_level: "",
    image: null,
  }); //initializing the form data with empty strings.

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/v1/add/category"
        );
        console.log(res);
        setCategory(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    const getCities = async () => {
      try {
        const cityRes = await axios.get(
          "http://localhost:3001/api/v1/add/city"
        );
        setCity(cityRes.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
    getCities();
  }, []);

  //handle the click event
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //handle files changes
  const handleFiles = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, image: file }));
  };

  //handle the submit  event of the form.
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    const dataToSend = new FormData();
    dataToSend.append("job_title", formData.job_title);
    dataToSend.append("company", formData.company);
    dataToSend.append("open_date", formData.open_date);
    dataToSend.append("close_date", formData.close_date);
    dataToSend.append("description", formData.description);
    dataToSend.append("qualification", formData.qualification);
    dataToSend.append(
      "application_instruction",
      formData.application_instruction
    );
    dataToSend.append("job_type", formData.job_type);
    dataToSend.append("location", selectedCity);
    dataToSend.append("category", selectedCategory);
    dataToSend.append("job_level", formData.job_level);
    dataToSend.append("image", formData.image);
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:3001/api/v1/create/job",
        dataToSend
      );
      console.log(response);
    } catch (error) {}
    console.log(dataToSend);
  };
  return (
    <Container
      id="add-member"
      className="d-flex justify-content-center  align-items-center fw-semibold rounded py-3"
    >
      <Form validated={validated}>
        <Row className="pb-3">
          <Col>
            <Form.Group className="pe-5">
              <Form.Label>Job Title:</Form.Label>
              <Form.Control
                type="text"
                name="job_title"
                placeholder="Enter full name"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            {" "}
            <Form.Group>
              <Form.Label>Company:</Form.Label>
              <Form.Control
                type="text"
                name="company"
                placeholder="Enter title"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="pb-3">
          <Col>
            <Form.Group className="pe-5">
              <Form.Label>Open Date:</Form.Label>
              <Form.Control
                type="date"
                name="open_date"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Close Date:</Form.Label>
              <Form.Control
                type="date"
                name="close_date"
                placeholder="Enter phone"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="pb-3">
          <Col>
            <Form.Group className="pb-3 pe-5">
              <Form.Label>Select Category:</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {selectedCategory || "Choose a category"}
                </Dropdown.Toggle>
                <Dropdown.Menu className="py-2 text-start">
                  {Array.isArray(Category) &&
                    Category.map((data, index) => (
                      <Dropdown.Item
                        key={index}
                        value={data.category}
                        name="category"
                        onClick={() => setSelectedCategory(data.category)}
                      >
                        {data.category}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="pb-3">
              <Form.Label>Select City:</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {selectedCity || "Choose a City"}
                </Dropdown.Toggle>
                <Dropdown.Menu className="py-2 text-start">
                  {City.map((data, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => setSelectedCity(data.city)}
                    >
                      {data.city}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="pb-3">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Give  a brief description ..."
            name="description"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Label>Qualification:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Give  a brief description ..."
            name="qualification"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Label>Application Instruction:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Give  a brief description ..."
            name="application_instruction"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Label className="pe-2">Job Type:</Form.Label>
          <Form.Check
            inline
            label="Part Time"
            value="part-time"
            type="radio"
            name="job_type"
            onChange={handleChange}
            required
          />
          <Form.Check
            inline
            label="Full Time"
            value="full-time"
            type="radio"
            name="job_type"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Label className="pe-2">Job Level:</Form.Label>
          <Form.Check
            inline
            label="Intern"
            value="intern"
            type="radio"
            name="job_level"
            onChange={handleChange}
            required
          />
          <Form.Check
            inline
            label="Junior"
            value="junior"
            type="radio"
            name="job_level"
            onChange={handleChange}
            required
          />
          <Form.Check
            inline
            label="Senior"
            value="senior"
            type="radio"
            name="job_level"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image:</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleFiles}
            required
          />
        </Form.Group>
        <Form.Group className="pt-4">
          <Form.Control
            type="submit"
            value="Add New Job"
            className="btn btn-success w-100"
            onClick={handleSubmit}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AddJobForm;
