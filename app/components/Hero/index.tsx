"use client";

import { useRef } from "react";
import Slider from "react-slick";

import Movie from "./Movie";
import Arrow from "../CarouselArrow";
import CenteredEl from "../ui/CenteredElement";
import { movies } from "../../constants/movies";

const Hero = () => {
  let sliderRef = useRef(null);

  // @ts-expect-error:next-line
  const next = () => sliderRef.slickNext();

  // @ts-expect-error:next-line
  const previous = () => sliderRef.slickPrev();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative mb-10">
      <Slider
        ref={(slider) => {
          // @ts-expect-error:next-line
          sliderRef = slider;
        }}
        {...settings}
      >
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Slider>
      <CenteredEl
        className="hidden sm:flex w-fit absolute bottom-[25%] right-[5%] sm:right-[2.5%] lg:right-[10%] xl:right-[12.5%] gap-x-1 z-20"
        justify="end"
      >
        <Arrow direction="left" onClick={previous} />
        <Arrow direction="right" onClick={next} />
      </CenteredEl>
    </div>
  );
};

export default Hero;
