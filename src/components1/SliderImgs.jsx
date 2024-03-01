import React, { useEffect, useRef } from "react";
import classes from "./sliderImgs.module.css";

export default function SliderImgs() {
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const buttons = document.querySelectorAll("[data-carousel-button]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      });
    });

    const intervalId = setInterval(() => {
      // Trigger a click on the "next" button every 8 seconds
      nextButtonRef.current.click();
    }, 8000);

    // Cleanup event listeners on component unmount
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });

      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs once after mount

  useEffect(() => {}, []);
  return (
    <div className={classes.carousel} data-carousel>
      <button
        className={`${classes.carouselbutton} ${classes.prev}`}
        data-carousel-button="prev"
      >
        &#8656;
      </button>
      <button
        className={`${classes.carouselbutton} ${classes.next}`}
        data-carousel-button="next"
        ref={nextButtonRef}
      >
        &#8658;
      </button>
      <ul data-slides>
        <li className={`${classes.slide} ${classes.active}`} data-active>
          <img src="./assets/imgs/img1.jpg" alt="Nature Image #1" />
        </li>
        <li className={classes.slide}>
          <img src="./assets/imgs/img2.jpg" alt="Nature Image #2" />
        </li>

        <li className={classes.slide}>
          <img src="./assets/imgs/img4.jpg" alt="Nature Image #4" />
        </li>

        <li className={classes.slide}>
          <img src="./assets/imgs/img5.jpeg" alt="Nature Image #5" />
        </li>
      </ul>
    </div>
  );
}
