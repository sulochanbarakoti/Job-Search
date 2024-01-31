import React from "react";
import { Navbar, Container, Image, Button } from "react-bootstrap";
import logo from "../media/logo.jpg";
import { CgProfile } from "react-icons/cg";

const NavbarSystem = () => {
  const user = "Sulochan Barakoti";
  return (
    <Navbar id="navbar-system">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} style={{ height: "40px", width: "150px" }} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user ? (
            <Navbar.Text>
              <CgProfile style={{ marginBottom: 2 }} />
              <a href="#login" className="fw-semibold p-1 text-black">
                {user}
              </a>
            </Navbar.Text>
          ) : (
            <Navbar.Text>
              <Button variant="success" className="me-2">
                Signup
              </Button>
              <Button variant="success">Login</Button>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSystem;
