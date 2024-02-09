import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card, Row } from "react-bootstrap";
import { cardData } from "../data";
import axios from "axios";

const Topworker = () => {
  const [jobData, setJobData] = useState([]);
  const settings = {
    centerMode: true,
    // centerPadding: "60px",
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          // centerPadding: "10px",
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

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

  useEffect(() => {
    // fetch backend data
    const getJobs = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/v1/get/jobs");
        setJobData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getJobs();
  }, []);

  return (
    <div className="mb-5">
      <Row>
        <div className="text-center fw-bold m-3 h4">Top available jobs</div>
      </Row>
      <Slider {...settings}>
        {jobData
          ? jobData.map((job) => (
              <div key={job.id}>
                <Card id="card-style">
                  <Card.Img
                    id="card-image"
                    variant="top"
                    src={getImageUrl(job.image)}
                  />
                  <Card.Body>
                    <Card.Title>{job.job_title}</Card.Title>
                    <Card.Text id="profile-description">
                      {job.company}
                    </Card.Text>
                    <Card.Text>{job.description}</Card.Text>
                    <Button id="more-button" variant="primary">
                      More..
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          : cardData.map((card) => (
              <div key={card.id}>
                <Card id="card-style">
                  <Card.Img id="card-image" variant="top" src={card.image} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text id="profile-description">
                      {card.jobTitle}
                    </Card.Text>
                    <Card.Text>{card.description}</Card.Text>
                    <Button id="more-button" variant="primary">
                      More..
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
      </Slider>
    </div>
  );
};

export default Topworker;
