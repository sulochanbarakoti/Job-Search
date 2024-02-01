import React from "react";
import { Row, Col, Button, Stack } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";

const DashSide = () => {
  return (
    <>
      <Row className="mb-3">
        <Col md={3} className="bg-success rounded" style={{ height: "100vh" }}>
          <Row className="p-3 fs-4 fw-bold text-white">
            <Stack gap={3}>
              <Button variant="success border">Dashboard</Button>
              <Button variant="success border">
                <IoIosAddCircle
                  size={20}
                  style={{ marginBottom: 5, marginRight: 5 }}
                />
                Add Member
              </Button>
              <Button variant="success border">Message</Button>
              <Button variant="success border">Settings</Button>
            </Stack>
          </Row>
        </Col>
        <Col md={9}></Col>
      </Row>
    </>
  );
};

export default DashSide;
