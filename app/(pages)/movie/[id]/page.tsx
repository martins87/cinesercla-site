"use client";

import { useState } from "react";
import Image from "next/image";

import GradientOverlay from "@/app/components/GradientOverlay";
import Container from "@/app/components/ui/Container";
import MovieInfo from "@/app/components/Movie/MovieInfo";
import MovieSession from "@/app/components/Movie/MovieSession";
import MovieTrailers from "@/app/components/Movie/MovieTrailers";
import { movie } from "@/app/constants/movies";
import play from "@/app/assets/icons/play.svg";
import CenteredElement from "@/app/components/ui/CenteredElement";
import TrailerVideo from "@/app/components/Movie/TrailerVideo";

const MoviePage = () => {
  // const { id } = params;
  // console.log(id);
  const [playing, setPlaying] = useState(false);

  return (
    <>
      {playing ? (
        <CenteredElement className="relative">
          <TrailerVideo
            src="https://www.youtube.com/embed/AFEaeuyOUBw?si=xW3npUSlt_YNgjKX&autoplay=1"
            setPlaying={setPlaying}
          />
          <GradientOverlay hero />
        </CenteredElement>
      ) : (
        <CenteredElement className="relative h-screen">
          <Image
            className="w-screen h-screen object-cover tablet:object-fill transition-all duration-300 ease-in-out"
            src={movie.cover!}
            alt="Image"
          />
          <Image
            className="absolute top-1/2 opacity-75 -m-10 hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
            src={play}
            alt="play icon"
            onClick={() => setPlaying(true)}
          />
          <GradientOverlay hero />
        </CenteredElement>
      )}
      <Container className="mt-10 gap-y-10">
        <MovieInfo movie={movie} />
        <MovieSession movie={movie} />
        <MovieTrailers movie={movie} />
      </Container>
    </>
  );
};

export default MoviePage;
