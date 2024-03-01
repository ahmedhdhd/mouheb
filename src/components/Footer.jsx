// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components1/Footer";
import React from "react";
import PartnerCarousel from "../components1/PartenerCarousel";
import SliderImgs from "../components1/SliderImgs";

const Foter = () => {
  return (
    <>
      {" "}
      <SliderImgs />
      <PartnerCarousel />
      <Footer />
    </>
  );
};

export default Foter;
