import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './partenerCarousel.css'; // Import your custom CSS file

function PartnerCarousel() {
  const sliderSettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="text-center font-weight-bold">Our Partners</h2>
      <Slider {...sliderSettings}>
        <div className="slide">
          <img src="images/315389443910_15_33_11.png" alt="logo" />
        </div>
        <div className="slide">
          <img src="images/216425038320_12_03_52.png" alt="logo" />
        </div>
        <div className="slide">
          <img src="images/516425039510_12_05_51.png" alt="logo" />
        </div>
        <div className="slide">
          <img src="images/416425040220_12_07_02.png" alt="logo" />
        </div>
        <div className="slide">
          <img src="images/116425040610_12_07_41.jpg" alt="logo" />
        </div>
        <div className="slide">
          <img src="images/216425043590_12_12_39.png" alt="logo" />
        </div>
        <div className="slide">
          <img src="images/016425044610_12_14_21.png" alt="logo" />
        </div>
      </Slider>

    
    </div>
  );
}

export default PartnerCarousel;
