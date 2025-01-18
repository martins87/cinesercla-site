"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { movies } from "../../constants/movies";
import Movie from "./Movie";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <div style={{ width: "100vw" }}>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
