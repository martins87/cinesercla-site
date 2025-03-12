import { FC } from "react";
import Image from "next/image";

import { Movie } from "@/app/types/Movie";
import GlassCard from "./GlassCard";
import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="flex flex-col gap-y-2 bg-[#3B3B3B] rounded-2xl p-4">
      <div className="relative min-h-72 max-h-72 lg:min-h-80 lg:max-h-80 xl:min-h-96 xl:max-h-96 flex flex-1 object-center">
        <Image
          className="w-full rounded-xl object-cover"
          src={movie.cover!}
          alt="movie cover"
        />
        <GlassCard label={movie.status} />
      </div>
      <CenteredElement className="min-h-12" items="start">
        <CenteredElement className="w-1/2" justify="start">
          <Typography className="text-lg leading-6" weight="700" maxChar={24}>
            {movie.title}
          </Typography>
        </CenteredElement>
        <CenteredElement className="w-1/2 gap-y-1" direction="col" items="end">
          <Typography className="text-lg opacity-60" weight="400">
            {movie.genre}
          </Typography>
        </CenteredElement>
      </CenteredElement>
    </div>
  );
};

export default MovieCard;
