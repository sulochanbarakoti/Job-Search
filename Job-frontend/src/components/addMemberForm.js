import React, { useState } from "react";
import { Container, Dropdown, Form } from "react-bootstrap";

const AddMemberForm = () => {
  const [Category, setCategory] = useState("");
  return (
    <Container className="d-flex justify-content-center  align-items-center fw-semibold rounded py-3">
      <Form>
        <Form.Group className="d-flex pb-3">
          <Form.Group className="pe-5">
            <Form.Label>Full Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
          </Form.Group>
        </Form.Group>
        <Form.Group className="d-flex pb-3">
          <Form.Group className="pe-5">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone:</Form.Label>
            <Form.Control type="number" placeholder="Enter phone" />
          </Form.Group>
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Label>Select Category:</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {Category || "Category"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="py-2 text-start">
              <Dropdown.Item onClick={() => setCategory("Plumber")}>
                Plumber
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("Graphic Designer")}>
                Graphic Designer
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("Photographer")}>
                Photographer
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Give  a brief description ..."
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Profile:</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="pt-4">
          <Form.Control
            type="submit"
            value="Add New Member"
            className="btn btn-success w-100"
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AddMemberForm;
