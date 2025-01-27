"use client";

import { useRef } from "react";
import Slider from "react-slick";

import Typography from "../Typography";
import MovieCard from "./MovieCard";
import { movies } from "../../constants/cards-movies";
import Arrow from "../SectionHeader/SectionArrow";
import CenteredEl from "../ui/CenteredElement";

const Movies = () => {
  let sliderRef = useRef(null);

  const previous = () => sliderRef.slickPrev();

  const next = () => sliderRef.slickNext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <CenteredEl className="my-10" direction="col">
      <div className="w-full flex items-center mb-4">
        <div className="flex flex-1 gap-x-6">
          <Typography className="text-black text-3xl" weight="800">
            Em Cartaz
          </Typography>
          <Typography className="text-black/50 text-3xl" weight="800">
            Em Breve
          </Typography>
          <Typography className="text-black/50 text-3xl" weight="800">
            PréVenda
          </Typography>
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <Arrow direction="left" onClick={previous} />
          <Arrow direction="right" onClick={next} />
        </div>
      </div>

      <Slider
        className="w-full"
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="px-1">
            <MovieCard movie={movie} />
          </div>
        ))}
      </Slider>
    </CenteredEl>
  );
};

export default Movies;
