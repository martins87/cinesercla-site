"use client";

import React, { FC, useState } from "react";
import Image from "next/image";

import { TMDBMovie } from "@/app/types/Movie";
import CenteredElement from "@/app/components/ui/CenteredElement";
import Container from "@/app/components/ui/Container";
import GradientOverlay from "@/app/components/GradientOverlay";
import TrailerVideo from "./TrailerVideo";
import NoBackdropImage from "./NoBackdropImage";
import BackdropImage from "./BackdropImage";
import MovieInfo from "./MovieInfo";
import PremiereCard from "./PremiereCard";
import MovieSession from "./MovieSession";
import MovieTrailers from "./MovieTrailers";
import play from "@/app/assets/icons/play.svg";

type MoviePageClientProps = {
  movie: TMDBMovie;
};

const MoviePageClient: FC<MoviePageClientProps> = ({ movie }) => {
  const [playing, setPlaying] = useState(false);
  const movieTrailer = movie.trailers && movie.trailers.length > 0;

  return (
    <>
      {movieTrailer && playing ? (
        <CenteredElement className="relative">
          <TrailerVideo
            videoKey={movie.trailers![0].key!}
            setPlaying={setPlaying}
            banner
          />
          <GradientOverlay hero />
        </CenteredElement>
      ) : (
        <CenteredElement className="relative h-screen bg-[#D8D8D8] dark:bg-[#1F2A31]">
          {movie.backdrop_path === null ? (
            <NoBackdropImage />
          ) : (
            <BackdropImage backdropPath={movie.backdrop_path} />
          )}
          {movieTrailer && (
            <Image
              className="absolute top-1/2 opacity-75 -m-10 hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out z-10"
              src={play}
              alt="play icon"
              onClick={() => setPlaying(true)}
            />
          )}
          <GradientOverlay hero />
        </CenteredElement>
      )}
      <Container className="mt-10 gap-y-14">
        <MovieInfo movie={movie} />
        {movie.situacao === "em-breve" ? (
          <PremiereCard releaseDate={movie.release_date} />
        ) : (
          <MovieSession movie={movie} />
        )}

        {movieTrailer && <MovieTrailers trailers={movie.trailers!} />}
      </Container>
    </>
  );
};

export default MoviePageClient;
