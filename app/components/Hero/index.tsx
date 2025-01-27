"use client";

import Slider from "react-slick";

import { movies } from "../../constants/movies";
import Movie from "./Movie";
import { useRef } from "react";
import Arrow from "../SectionHeader/SectionArrow";
import CenteredEl from "../ui/CenteredElement";

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
    <div className="relative w-screen">
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
      <CenteredEl
        className="w-fit absolute bottom-[25%] right-[5%] sm:right-[2.5%] lg:right-[10%] xl:right-[12.5%] gap-x-1 z-20"
        justify="end"
      >
        <Arrow direction="left" onClick={previous} hero />
        <Arrow direction="right" onClick={next} hero />
      </CenteredEl>
    </div>
  );
};

export default Hero;
