"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { useMovieStore } from "@/app/store/movie";
import Container from "@/app/components/ui/Container";
import CenteredElement from "@/app/components/ui/CenteredElement";
import GradientOverlay from "@/app/components/GradientOverlay";
import MovieInfo from "@/app/components/Movie/MovieInfo";
import MovieSession from "@/app/components/Movie/MovieSession";
import MovieTrailers from "@/app/components/Movie/MovieTrailers";
import TrailerVideo from "@/app/components/Movie/TrailerVideo";
import PremiereCard from "@/app/components/Movie/PremiereCard";
import NoBackdropImage from "@/app/components/Movie/NoBackdropImage";
import BackdropImage from "@/app/components/Movie/BackdropImage";
import play from "@/app/assets/icons/play.svg";

const MoviePage = () => {
  const router = useRouter();
  const params = useParams();
  const { getMovieById } = useMovieStore();
  const [playing, setPlaying] = useState(false);
  const { id } = params as { id: string };
  const movie = getMovieById(+id);
  console.log("movie", movie);

  if (!movie) {
    router.push("/");
    return;
  }

  const movieTrailer = movie.trailers && movie.trailers.length > 0;
  const noBackdropImg = movie.backdrop_path === null;

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
          {noBackdropImg ? (
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

export default MoviePage;
