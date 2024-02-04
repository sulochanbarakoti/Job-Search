import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Dropdown, Form, Row, Col } from "react-bootstrap";

const AddJobForm = () => {
  const [Category, setCategory] = useState([]);
  const [City, setCity] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [formData, setFormData] = useState({
    job_title: "",
    company: "",
    open_date: "",
    close_date: "",
    description: "",
    qualification: "",
    application_instruction: "",
    permanent: null,
    full_time: "",
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
    e.preventDefault();
    const dataToSend = formData;
    dataToSend.category = Category;
    // if (
    //   (!formData.fullname ||
    //     !formData.title ||
    //     !formData.email ||
    //     !formData.phone ||
    //     !formData.category,
    //   !formData.image)
    // ) {
    //   alert("Please fill in all fields.");
    //   return;
    // }
    try {
      const response = await axios("", dataToSend);
    } catch (error) {}
    console.log(dataToSend);
  };
  return (
    <Container
      id="add-member"
      className="d-flex justify-content-center  align-items-center fw-semibold rounded py-3"
    >
      <Form>
        <Row className="pb-3">
          <Col>
            <Form.Group className="pe-5">
              <Form.Label>Job Title:</Form.Label>
              <Form.Control
                type="text"
                name="job_title"
                placeholder="Enter full name"
                onChange={handleChange}
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
                  {Category.map((data, index) => (
                    <Dropdown.Item
                      key={index}
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
                  {selectedCity || "Choose a category"}
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
          />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Label>Qualification:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Give  a brief description ..."
            name="description"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Label>Application Instruction:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Give  a brief description ..."
            name="application_instruction"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Label className="pe-2">Job Type:</Form.Label>
          <Form.Check
            inline
            label="Part Time"
            value="part-time"
            type="radio"
            name="group1"
          />
          <Form.Check
            inline
            label="Full Time"
            value="full-time"
            type="radio"
            name="group1"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Profile:</Form.Label>
          <Form.Control type="file" name="image" onChange={handleFiles} />
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
