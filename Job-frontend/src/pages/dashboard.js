import React, { useState } from "react";
// import logo from "../media/logo.jpg";
// import { CgProfile } from "react-icons/cg";
// import { UserContext } from "../context/userContext";
import { Row, Col, Button, Stack } from "react-bootstrap";
// import DashSide from "../components/DashSide";
import { IoIosAddCircle } from "react-icons/io";
import DashNav from "../components/DashNav";
import AddJobForm from "../components/AddJobForm";
import DashboardDefault from "../components/dashboardDefault";
import AddCategory from "../components/AddCategory";
import AddCity from "../components/AddCity";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("DashboardDefault");
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
                <Button
                  variant="success border"
                  onClick={() => setActiveComponent("DashboardDefault")}
                >
                  Dashboard
                </Button>
                <Button
                  variant="success border"
                  onClick={() => setActiveComponent("AddJob")}
                >
                  <IoIosAddCircle
                    size={20}
                    style={{ marginBottom: 5, marginRight: 5 }}
                  />
                  Add Jobs
                </Button>
                <Button
                  variant="success border"
                  onClick={() => setActiveComponent("AddCategory")}
                >
                  {" "}
                  <IoIosAddCircle
                    size={20}
                    style={{ marginBottom: 5, marginRight: 5 }}
                  />
                  Add Category
                </Button>
                <Button
                  variant="success border"
                  onClick={() => setActiveComponent("AddCity")}
                >
                  {" "}
                  <IoIosAddCircle
                    size={20}
                    style={{ marginBottom: 5, marginRight: 5 }}
                  />
                  Add City
                </Button>
              </Stack>
            </Row>
          </Col>
          <Col md={9}>
            <Row className="m-3">
              {" "}
              {(() => {
                switch (activeComponent) {
                  case "DashboardDefault":
                    return <DashboardDefault />;
                  case "AddJob":
                    return <AddJobForm />;
                  case "AddCategory":
                    return <AddCategory />;
                  case "AddCity":
                    return <AddCity />;
                  default:
                    return null;
                }
              })()}
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Dashboard;
