import React, { useContext } from "react";
import { Navbar, Container, Image, Button } from "react-bootstrap";
import logo from "../media/logo.jpg";
import { CgProfile } from "react-icons/cg";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";

const NavbarSystem = () => {
  const { userData } = useContext(UserContext);
  return (
    <Navbar id="navbar-system">
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} style={{ height: "40px", width: "150px" }} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {userData ? (
            <Navbar.Text>
              <CgProfile style={{ marginBottom: 2 }} size={20} color="black" />
              <a href="#login" className="fw-semibold p-1 text-black">
                {userData}
              </a>
            </Navbar.Text>
          ) : (
            <Navbar.Text>
              <Link to="/registration">
                <Button variant="success" className="me-2">
                  Signup
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="success">Login</Button>
              </Link>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSystem;
