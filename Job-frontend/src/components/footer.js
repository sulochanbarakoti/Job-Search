import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import logo from "../media/logo.jpg";

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Row className="justify-content-center">
          <Image id="footer-logo" src={logo} />
          <p className="text-center">
            Welcome to our platform, where individuals and businesses can offer
            their skills and services to a wide audience. Our goal is to connect
            professionals with those in need of their expertise, making it
            easier for people to find the help they need
          </p>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <FaFacebook size={24} />
            <AiFillInstagram size={25} />
            <IoIosMail size={26} />
          </Col>
        </Row>
      </Row>
      <Row className="py-3 copyright">
        <Col>Design by: Sulochan Barakoti</Col>
        <Col className="text-end">© Copyright 2024</Col>
      </Row>
    </Container>
  );
};

export default Footer;
