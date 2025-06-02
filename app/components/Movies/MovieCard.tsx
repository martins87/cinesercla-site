"use client";

import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { TMDBMovie } from "@/app/types/Movie";
import { formatRuntime } from "@/lib/utils";
import CenteredElement from "@/app/components/ui/CenteredElement";
import Typography from "@/app/components/Typography";
import CarouselItem from "@/app/components/Carousel/CarouselItem";
import GlassCard from "./GlassCard";
import Rating from "../Rating";

type MovieCardProps = {
  movie: TMDBMovie;
};

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const router = useRouter();
  const mainGenre = movie.genres ? movie.genres.split(",")[0] : "";

  const handleClick = () =>
    router.push(
      `/filme/${
        movie.situacao === "em-breve" || movie.situacao === "pre-venda"
          ? movie.tmdbId
          : movie.idFilme
      }`
    );

  return (
    <CarouselItem onClick={handleClick}>
      <div className="flex flex-col gap-y-2 bg-[#3B3B3B] rounded-2xl p-4">
        <div className="relative min-h-72 max-h-72 lg:min-h-80 lg:max-h-80 xl:min-h-96 xl:max-h-96 flex flex-1 object-center">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            className="object-cover rounded-xl"
            sizes="(min-width: 1024px) 20vw, 50vw"
            fill
            alt="movie cover"
            priority
          />
          {(movie.situacao || movie.release_date) && (
            <GlassCard
              label={
                movie.situacao === "em-breve"
                  ? movie.release_date
                  : movie.situacao
              }
            />
          )}
          {movie.classificacao && <Rating rating={movie.classificacao} />}
        </div>
        <CenteredElement items="start">
          <CenteredElement className="w-3/5" justify="start">
            <Typography className="text-lg leading-6" weight="700" maxChar={24}>
              {movie.title}
            </Typography>
          </CenteredElement>
          <CenteredElement className="w-2/5" direction="col" items="end">
            <Typography className="text-lg opacity-60" weight="700">
              {mainGenre}
            </Typography>
            <Typography className="text-lg opacity-60 -mt-1" weight="400">
              {formatRuntime(movie.runtime)}
            </Typography>
          </CenteredElement>
        </CenteredElement>
      </div>
    </CarouselItem>
  );
};

export default MovieCard;
