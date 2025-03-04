"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";

import MovieCard from "./MovieCard";
import CenteredEl from "../ui/CenteredElement";
import { movies } from "../../constants/cards-movies";
import { MovieItemType } from "@/app/types/MovieItem";
import HeaderFilter from "@/app/components/HeaderFilter";
import CarouselArrow from "../CarouselArrow";
import Filter from "../../types/Filter";

const filters: { label: string; filter: MovieItemType }[] = [
  { label: "Em Cartaz", filter: "em-cartaz" },
  { label: "Em Breve", filter: "em-breve" },
  { label: "Pré-Venda", filter: "pre-venda" },
];

const Movies = () => {
  let sliderRef = useRef(null);
  const [filterType, setFilterType] = useState<Filter>("em-cartaz");

  const handleFilter = (type: Filter) => setFilterType(type);

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
      <CenteredEl className="mt-20 mb-6">
        <CenteredEl className="gap-x-4" justify="start">
          {filters.map((filter) => (
            <HeaderFilter
              key={filter.label}
              label={filter.label}
              filter={filter.filter}
              handleFilter={handleFilter}
              active={filter.filter === filterType}
            />
          ))}
        </CenteredEl>
        <CenteredEl className="gap-x-2" justify="end">
          <CarouselArrow direction="left" onClick={previous} />
          <CarouselArrow direction="right" onClick={next} />
        </CenteredEl>
      </CenteredEl>
      <Slider
        className="w-full"
        ref={(slider) => {
          // @ts-expect-error:next-line
          sliderRef = slider;
        }}
        {...settings}
      >
        {movies
          .filter((item) => {
            return filterType === null ? true : item.status === filterType;
          })
          .map((movie) => (
            <div key={movie.id} className="mobile:px-1">
              <MovieCard movie={movie} />
            </div>
          ))}
      </Slider>
    </CenteredEl>
  );
};

export default Movies;
