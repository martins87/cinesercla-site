"use client";

import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  // Movie,
  TMDBMovie,
} from "@/app/types/Movie";
import GlassCard from "./GlassCard";
import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
// import Rating from "../Rating";
import CarouselItem from "../Carousel/CarouselItem";

type MovieCardProps = {
  // movie: Movie;
  movie: TMDBMovie;
};

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const router = useRouter();

  const handleClick = () => router.push(`/filme/${movie.tmdbId}`);

  return (
    <CarouselItem onClick={handleClick}>
      <div className="flex flex-col gap-y-2 bg-[#3B3B3B] rounded-2xl p-4">
        <div className="relative min-h-72 max-h-72 lg:min-h-80 lg:max-h-80 xl:min-h-96 xl:max-h-96 flex flex-1 object-center">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            // src={movie.cover!}
            className="object-cover rounded-xl"
            sizes="(min-width: 1024px) 20vw, 50vw"
            fill
            alt="movie cover"
            priority
          />
          {/* <GlassCard label={movie.status} /> */}
          <GlassCard label={movie.situacao} />
          {/* <Rating rating={movie.rating} /> */}
        </div>
        <CenteredElement className="min-h-12" items="start">
          <CenteredElement className="w-1/2" justify="start">
            <Typography className="text-lg leading-6" weight="700" maxChar={24}>
              {movie.title}
            </Typography>
          </CenteredElement>
          <CenteredElement
            className="w-1/2 gap-y-1"
            direction="col"
            items="end"
          >
            <Typography className="text-lg opacity-60" weight="400">
              {/* {movie.genre} */}
              {movie.genres}
            </Typography>
          </CenteredElement>
        </CenteredElement>
      </div>
    </CarouselItem>
  );
};

export default MovieCard;
