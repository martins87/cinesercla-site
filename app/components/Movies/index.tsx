"use client";

import { useRef } from "react";
import Slider from "react-slick";

import Typography from "../Typography";
import MovieCard from "./MovieCard";
import Arrow from "../CarouselArrow";
import CenteredEl from "../ui/CenteredElement";
import { movies } from "../../constants/cards-movies";

const Movies = () => {
  let sliderRef = useRef(null);

  // @ts-expect-error:next-line
  const previous = () => sliderRef.slickPrev();

  // @ts-expect-error:next-line
  const next = () => sliderRef.slickNext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CenteredEl className="my-10" direction="col">
      <div className="w-full flex items-center mb-4">
        <div className="flex flex-1 justify-between mobile:justify-normal gap-x-6">
          <Typography
            className="text-black text-xl md:text-2xl tablet:text-3xl"
            weight="800"
          >
            Em Cartaz
          </Typography>
          <Typography
            className="text-black/50 text-xl md:text-2xl tablet:text-3xl"
            weight="800"
          >
            Em Breve
          </Typography>
          <Typography
            className="text-black/50 text-xl md:text-2xl tablet:text-3xl"
            weight="800"
          >
            PréVenda
          </Typography>
        </div>
        <div className="hidden md:flex items-center justify-between gap-x-2">
          <Arrow direction="left" onClick={previous} />
          <Arrow direction="right" onClick={next} />
        </div>
      </div>

      <Slider
        className="w-full"
        ref={(slider) => {
          // @ts-expect-error:next-line
          sliderRef = slider;
        }}
        {...settings}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="mobile:px-1">
            <MovieCard movie={movie} />
          </div>
        ))}
      </Slider>
    </CenteredEl>
  );
};

export default Movies;
