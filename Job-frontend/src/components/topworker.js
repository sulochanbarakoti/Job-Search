import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card, Row } from "react-bootstrap";
import profile1 from "../media/profile1.png";
import profile2 from "../media/profile2.png";
import profile3 from "../media/profile3.jpg";
import profile4 from "../media/profile4.jpg";

const Topworker = () => {
  const cardData = [
    {
      id: 1,
      title: "Sulochan Barakoti",
      jobTitle: "WEB DEVELOPER",
      image: profile1,
      description:
        "Experienced Web Developer with a passion for front-end technologies.",
    },
    {
      id: 2,
      title: "Sujan Pandit",
      jobTitle: "GRAPHIC DESIGNER",
      image: profile2,
      description:
        "Creative Graphic Designer with a keen eye for detail and aesthetics.",
    },
    {
      id: 3,
      title: "Sandesh Pandi",
      jobTitle: "FULL-STACK DEVELOPER",
      image: profile3,
      description:
        "Dedicated Software Engineer specializing in full-stack development.",
    },
    {
      id: 4,
      title: "Niroj Regmi",
      jobTitle: "DATA SCIENTIST",
      image: profile4,
      description:
        "Enthusiastic Data Scientist with expertise in machine learning algorithms.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 4, // Show 4 slides on medium screens
        },
      },
      {
        breakpoint: 992, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 3, // Show 3 slides on small screens
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Show 1 slide on extra small screens
        },
      },
    ],
  };

  return (
    <div className="mb-5">
      <Row>
        <div className="text-center fw-bold m-3 h4">Top Rated Profile</div>
      </Row>
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id}>
            <Card id="card-style">
              <Card.Img id="card-image" variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text id="profile-description">{card.jobTitle}</Card.Text>
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
