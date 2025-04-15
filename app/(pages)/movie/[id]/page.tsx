"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import GradientOverlay from "@/app/components/GradientOverlay";
import Container from "@/app/components/ui/Container";
import MovieInfo from "@/app/components/Movie/MovieInfo";
import MovieSession from "@/app/components/Movie/MovieSession";
import MovieTrailers from "@/app/components/Movie/MovieTrailers";
import play from "@/app/assets/icons/play.svg";
import CenteredElement from "@/app/components/ui/CenteredElement";
import TrailerVideo from "@/app/components/Movie/TrailerVideo";
import { useMovieStore } from "@/app/store/movie";

const MoviePage = () => {
  const params = useParams();
  const { id } = params as { id: string };
  const [playing, setPlaying] = useState(false);
  const { getMovieById } = useMovieStore();
  const movie = getMovieById(+id);

  if (!movie) return;

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
            // className="w-screen h-screen object-cover tablet:object-fill transition-all duration-300 ease-in-out"
            className="object-cover tablet:object-fill transition-all duration-300 ease-in-out"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            fill
            alt="Image"
          />
          <Image
            className="absolute top-1/2 opacity-75 -m-10 hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out z-10"
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
