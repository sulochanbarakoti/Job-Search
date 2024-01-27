import React, { useState } from "react";
import { Col, Container, Form, Row, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [hiddenAlert, setHiddenAlert] = useState(true);
  const [userDetail, setUserDetail] = useState({ username: "", password: "" });

  // handlesubmit function
  const handleSubmit = () => {
    if (userDetail.username === "" || userDetail.password === "") {
      setHiddenAlert(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="p-3 bg-info rounded  fw-bold">
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Username: </Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="passport" placeholder="Enter password" />
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
