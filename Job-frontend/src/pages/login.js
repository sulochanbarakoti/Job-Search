import React, { useState } from "react";
import { Col, Container, Form, Row, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Login = () => {
  const [hiddenAlert, setHiddenAlert] = useState(true);
  const [userDetail, setUserDetail] = useState({ username: "", password: "" });

  //handle on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prevValue) => ({ ...prevValue, [name]: value }));
  };

  // handlesubmit function
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/login",
        userDetail
      );
      const authToken = response.headers["x-auth-token"];
      console.log(authToken);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="p-3 bg-info rounded  fw-bold">
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Username: </Form.Label>
              <Form.Control
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <div className=" text-danger rounded  p-2 " hidden={hiddenAlert}>
                Username & Password Please!!
              </div>
              <Button
                variant="success"
                className="col-12"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
