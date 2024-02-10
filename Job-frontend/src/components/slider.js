import React, { useState } from "react";
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
import { finlandCities, jobsCategories } from "../data";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const [city, setCity] = useState();
  const [category, setCategory] = useState("");

  console.log(category);

  return (
    <div style={{ position: "relative", height: "auto" }}>
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
        <Form className="d-flex flex-column flex-md-row p-1">
          <Typeahead
            id="autocomplete-search"
            options={jobsCategories}
            placeholder="Categories....."
            className="m-1 w-100"
            onChange={setCategory}
          />
          {/* <FormControl
            type="text"
            placeholder="Category"
            className="m-1 w-100" // Full width on mobile
          /> */}
          <InputGroup className="m-1" style={{ width: "auto" }}>
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
          </InputGroup>
          {/* <Link to="/search"> */}
          <Button
            className="m-1"
            style={{ width: "60%" }}
            variant="outline-success"
          >
            Search
          </Button>
          {/* </Link> */}
        </Form>
      </div>
    </div>
  );
};

export default Slider;
