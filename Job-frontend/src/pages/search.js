import React, { useState } from "react";
import { finlandCities, jobsCategories } from "../data";
import NavbarSystem from "../components/navbar";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import DashNav from "../components/DashNav";

const Search = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    // Call the filter function with selected category and city
    // onFilter(e.target.value, selectedCity);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    // Call the filter function with selected category and city
    // onFilter(selectedCategory, e.target.value);
  };
  return (
    <>
      <Row>
        <DashNav />
      </Row>
      <Row>
        <Row className="mb-3">
          <Col
            md={3}
            className="bg-success rounded"
            style={{ height: "100vh" }}
          >
            <Row className="p-3 fs-4 fw-bold text-white">
              <h3>Filter by Category</h3>
              <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">All Categories</option>
                {jobsCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <h3>Filter by City</h3>
              <select value={selectedCity} onChange={handleCityChange}>
                <option value="">All Cities</option>
                {finlandCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </Row>
          </Col>
          <Col md={9}></Col>
        </Row>
      </Row>
    </>
  );
};

export default Search;
