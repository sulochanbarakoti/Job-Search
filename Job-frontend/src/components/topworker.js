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
    centerPadding: "5%",
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
          // centerPadding: "80px",
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
          // centerPadding: "80px",
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
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

  const getImage = (imagePath) => {
    const baseUrl = "http://localhost:3001/";
    const formattedPath = imagePath.replace(/\\/g, "/"); // Replace backslashes with forward slashes
    const url = baseUrl + formattedPath;
    console.log(url);
    return url;
  };

  return (
    <div className="mb-5">
      <Row>
        <div className="text-center fw-bold m-3 h4">Top available jobs</div>
      </Row>
      <Slider {...settings}>
        {jobData
          ? jobData.map((job) => (
              <div key={job._id}>
                <Card id="card-style">
                  <Card.Img
                    id="card-image"
                    variant="top"
                    src={getImage(job.image)}
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
