import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const DashboardDefault = () => {
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    const jobs = async () => {
      const response = await axios.get("http://localhost:3001/api/v1/get/jobs");
      console.log(response.data);
      setAllJobs(response.data);
    };
    jobs();
  }, []);

  // Function to convert image data to data URL
  const getImageUrl = (imageData) => {
    console.log("Image Data:", imageData);

    if (imageData && imageData.contentType && imageData.data) {
      try {
        const base64Image = btoa(
          String.fromCharCode(...new Uint8Array(imageData.data))
        );
        const imageUrl = `data:${imageData.contentType};base64,${base64Image}`;
        console.log("Image URL:", imageUrl);
        return imageUrl;
      } catch (error) {
        console.error("Error converting image to Base64:", error);
        return "";
      }
    } else {
      console.error("Invalid image data:", imageData);
      return "";
    }
  };

  return (
    <Container>
      <Row>
        <div className="text-center">
          <h3>Hello, Welcome to the Dashboard!</h3> Here you can add a new job
          and view and delete the jobs.
        </div>
      </Row>
      <Row>
        {allJobs.map((job, index) => (
          <Row id="job-style" className="m-2" key={index}>
            <Col xs={2}>
              <Image
                src={getImageUrl(job.image)}
                style={{ height: "120px", width: "120px" }}
              />
            </Col>
            <Col xs={8}>
              <h3 className="text-start fw-bold">{job.job_title}</h3>
              <h5>{job.company}</h5>
              <div>{job.description}</div>
            </Col>
            <Col xs={2}>
              <Button variant="danger">Delete Job</Button>
            </Col>
          </Row>
        ))}
      </Row>
      {/* <Row id="job-style">
        <Col xs={2}>
          <Image
            src="https://th.bing.com/th/id/OIG.MxQxUggA0RKmKdTjwAqw"
            style={{ height: "120px", width: "120px" }}
          />
        </Col>
        <Col xs={8}>
          <h4 className="text-start">Designer</h4>
          <h5>Google</h5>
          <h6>
            We are looking for interns for the Church's service center in
            Peltola, Oulu.
          </h6>
        </Col>
        <Col xs={2}>
          <Button variant="primary">Delete Job</Button>
        </Col>
      </Row> */}
    </Container>
  );
};

export default DashboardDefault;
