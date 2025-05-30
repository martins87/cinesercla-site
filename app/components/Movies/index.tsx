"use client";

import { FC, useRef, useState } from "react";
import Slider from "react-slick";

import { MovieItemType } from "@/app/types/MovieItem";
import { Filter } from "@/app/types/Filter";
import { useMovieStore } from "@/app/store/movie";
import CenteredEl from "@/app/components/ui/CenteredElement";
import HeaderFilter from "@/app/components/HeaderFilter";
import CarouselArrow from "@/app/components/CarouselArrow";
import MovieCard from "./MovieCard";
import MovieCardsSkeleton from "./MovieCardsSkeleton";

const filters: { label: string; filter: MovieItemType }[] = [
  { label: "Em Cartaz", filter: "em-cartaz" },
  { label: "Em Breve", filter: "em-breve" },
];

type MoviesProps = {
  loading: boolean;
};

const Movies: FC<MoviesProps> = ({ loading }) => {
  let sliderRef = useRef(null);
  const { movieList } = useMovieStore();
  const [filterType, setFilterType] = useState<Filter>("em-cartaz");

  const handleFilter = (type: Filter) => setFilterType(type);

  // @ts-expect-error:next-line
  const previous = () => sliderRef.slickPrev();

  // @ts-expect-error:next-line
  const next = () => sliderRef.slickNext();

  const settings = {
    dots: false,
    infinite: false,
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
        <CenteredEl className="w-4/5 gap-x-6 tablet:gap-x-10" justify="start">
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
        <CenteredEl className="w-1/5 gap-x-2" justify="end">
          <CarouselArrow direction="left" onClick={previous} />
          <CarouselArrow direction="right" onClick={next} />
        </CenteredEl>
      </CenteredEl>
      {loading || !movieList ? (
        <MovieCardsSkeleton />
      ) : (
        <Slider
          className="w-full"
          ref={(slider) => {
            // @ts-expect-error:next-line
            sliderRef = slider;
          }}
          {...settings}
        >
          {movieList
            .filter((movie) => {
              return filterType === "em-breve"
                ? movie.situacao === "em-breve"
                : movie.situacao === "pre-venda" ||
                    movie.situacao === "em-cartaz";
            })
            .map((movie) => (
              <div key={movie.idFilme} className="mobile:px-1">
                <MovieCard movie={movie} />
              </div>
            ))}
        </Slider>
      )}
    </CenteredEl>
  );
};

export default Movies;
