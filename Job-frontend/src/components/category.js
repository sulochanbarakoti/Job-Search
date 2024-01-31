import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Figure,
  Accordion,
} from "react-bootstrap";
import { GoCodeReview, GoLaw } from "react-icons/go";
import { BiSolidCarMechanic } from "react-icons/bi";
import { MdEngineering, MdPlumbing, MdDesignServices } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import jobImage from "../media/find-a-job.png";

const Category = () => {
  return (
    <Container fluid id="bg-grey">
      <Row>
        <div className="text-center fw-bold m-3 h4">Category</div>
      </Row>
      <Row className="d-flex align-items-center">
        <Col xs={12} md={6} className="mb-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h6>Enginner and Construnction</h6>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Mechanical Engineer</li>
                  <li>Electrical Engineer</li>
                  <li>Builder</li>
                  <li>Plumber</li>
                  <li>Electrician</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h6>Art and Design</h6>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Painter</li>
                  <li>Graphic Designer</li>
                  <li>Interior Designer</li>
                  <li>Multimedia Artist</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h6>Creative Arts</h6>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Artist</li>
                  <li>Sculptor</li>
                  <li>Photographer</li>
                  <li>Set Designer</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col xs={12} md={6}>
          <Figure>
            <Figure.Image src={jobImage} />
          </Figure>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
