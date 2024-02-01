import React, { useContext } from "react";
import logo from "../media/logo.jpg";
import { CgProfile } from "react-icons/cg";
import { UserContext } from "../context/userContext";
import { Row, Col, Button, Navbar, Image, Stack } from "react-bootstrap";

const DashNav = () => {
  const { userData } = useContext(UserContext);
  return (
    <div>
      <Navbar id="navbar-system">
        <Navbar.Brand href="#home">
          <Image src={logo} style={{ height: "40px", width: "150px" }} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <CgProfile style={{ marginBottom: 2 }} size={20} color="black" />
            <a href="#login" className="fw-semibold p-1 text-black">
              {userData}
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default DashNav;
