import React from "react";
import {
  Carousel,
  Form,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
  InputGroup,
} from "react-bootstrap";
import slider1 from "../media/slider/slider1.jpg";
import slider2 from "../media/slider/slider2.jpg";
import slider3 from "../media/slider/slider3.jpg";
import { finlandCities } from "../data";

const Slider = () => {
  const [city, setCity] = React.useState();
  return (
    <div style={{ position: "relative" }}>
      <Carousel slide={false}>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={slider2} />
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={slider3} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={slider1} />
        </Carousel.Item>
      </Carousel>
      <div id="search-bar" className="p-1 bg-white rounded">
        <Form className="d-flex flex-column flex-md-row justify-content-between align-items-center p-1">
          <FormControl
            type="text"
            placeholder="Category"
            className="m-1 w-100 mb-2" // Full width on mobile
          />
          <div className="d-flex flex-column flex-md-row w-100 mb-2">
            <InputGroup className="mb-2 mb-md-0 mr-md-1 w-100">
              <DropdownButton
                variant="outline-secondary"
                title={!city ? "Choose the city" : city}
              >
                {finlandCities.map((city, index) => (
                  <Dropdown.Item key={index} onClick={() => setCity(city)}>
                    {city}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              {/* <FormControl aria-describedby="basic-addon1" /> */}
            </InputGroup>
            <Button className="m-1 w-100" variant="outline-success">
              Search
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Slider;
