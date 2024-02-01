import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    image: null,
  }); //initializing the form data with empty strings.

  //handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value })); //Updating the form data based on user inputs.
  };

  //handle file changes
  const onFileSelected = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, image: file }));
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (
      (!formData.fullname ||
        !formData.username ||
        !formData.email ||
        !formData.phone ||
        !formData.password,
      !formData.image)
    ) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullname", formData.fullname);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("image", formData.image);
      const response = await axios.post(
        "http://localhost:3001/api/v1/signup",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate(`/`);
    } catch (error) {
      console.error(error);
      alert("Error registering user");
    }
  };

  return (
    <Container className="d-flex justify-content-center  align-items-center vh-100">
      <Row className="bg-info fw-semibold rounded py-3">
        <Col>
          <Form>
            <Form.Group className="d-flex">
              <Form.Group className="p-2">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="fullname"
                  placeholder="Enter your full name..."
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="p-2">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  onChange={handleInputChange}
                  placeholder="Enter your username..."
                  required
                />
              </Form.Group>
            </Form.Group>
            <Form.Group className="d-flex">
              <Form.Group className="p-2">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  placeholder="Enter your email..."
                  required
                />
              </Form.Group>
              <Form.Group className="p-2">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  onChange={handleInputChange}
                  placeholder="Enter your phone..."
                  required
                />
              </Form.Group>
            </Form.Group>
            <Form.Group>
              <Form.Group className="p-2">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  placeholder="Enter your password..."
                  required
                />
              </Form.Group>
            </Form.Group>
            <Form.Group className="p-2">
              <Form.Label>Your Profile:</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={onFileSelected}
                accept=".jpg,.png,.jpeg"
                required
              />
            </Form.Group>
            <Form.Group className="p-2">
              <Form.Control
                type="submit"
                value="Sign Up"
                onClick={handleSubmit}
                className="btn btn-success w-100"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
