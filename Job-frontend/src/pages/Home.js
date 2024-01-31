import React from "react";
import NavbarSystem from "../components/navbar";
import Slider from "../components/slider";
import Category from "../components/category";
import Topworker from "../components/topworker";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <NavbarSystem></NavbarSystem>
      <Slider></Slider>
      <Category></Category>
      <Topworker></Topworker>
      <Footer></Footer>
    </div>
  );
};

export default Home;
