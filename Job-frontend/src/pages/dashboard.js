import React, { useContext } from "react";
import logo from "../media/logo.jpg";
import { CgProfile } from "react-icons/cg";
import { UserContext } from "../context/userContext";
import { Row, Col, Button, Navbar, Image, Stack } from "react-bootstrap";
import DashSide from "../components/DashSide";
import { IoIosAddCircle } from "react-icons/io";
import DashNav from "../components/DashNav";
import AddMemberForm from "../components/addMemberForm";

const Dashboard = () => {
  return (
    <>
      <Row>
        <DashNav />
      </Row>
      <Row>
        <Row className="mb-3">
          <Col
            md={3}
            className="bg-success rounded"
            style={{ height: "100vh" }}
          >
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
          <Col md={9}>
            <AddMemberForm />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Dashboard;
