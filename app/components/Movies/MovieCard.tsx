import { FC } from "react";
import Image from "next/image";

import { Movie } from "@/app/types/Movie";
import GlassCard from "./GlassCard";
import Typography from "../Typography";
import IMDBLogo from "../../assets/images/imdb-logo.png";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="flex flex-col gap-y-2 bg-[#3B3B3B] rounded-2xl p-4">
      <div className="relative min-h-72 max-h-72 lg:min-h-80 lg:max-h-80 xl:min-h-96 xl:max-h-96 flex flex-1 object-center">
        <Image
          className="w-full rounded-xl object-cover"
          src={movie.cover}
          alt="movie cover"
        />
        <GlassCard label="Pré-venda" />
      </div>
      <div className="flex items-center justify-between">
        <div className="w-1/2 flex items-center">
          <Typography className="text-lg font-normal" maxChar={24}>
            {movie.title}
          </Typography>
        </div>
        <div className="w-1/2 flex flex-col gap-y-1 items-end">
          <Typography className="text-xl font-normal opacity-50">
            {movie.genre}
          </Typography>
          <div className="flex items-center justify-between gap-x-2">
            <Image width={44} src={IMDBLogo} alt="imdb logo" />
            <Typography>{movie.imdbRate}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
