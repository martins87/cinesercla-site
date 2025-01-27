"use client";

import Slider from "react-slick";

import { movies } from "../../constants/movies";
import Movie from "./Movie";
import { useRef } from "react";
import Arrow from "../SectionHeader/SectionArrow";

const Hero = () => {
  let sliderRef = useRef(null);

  const next = () => sliderRef.slickNext();

  const previous = () => sliderRef.slickPrev();

  const settings = {
    dots: false,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    // arrows: true,
    pauseOnHover: false,
  };

  return (
    // <div className="w-full">
    <div className="w-[99.1vw]">
      <Slider
        className="w-full"
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Slider>
      <div className="flex items-center justify-between gap-x-2">
        <Arrow direction="left" onClick={previous} />
        <Arrow direction="right" onClick={next} />
      </div>
    </div>
  );
};

export default Hero;
