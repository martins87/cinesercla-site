import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import { Trailer } from "@/app/types/Movie";
import { FC } from "react";
import MovieTrailer from "./MovieTrailer";

type MovieTrailersProps = {
  movieTitle: string;
  trailers: Trailer[];
};

const MovieTrailers: FC<MovieTrailersProps> = ({ movieTitle, trailers }) => {
  return (
    <CenteredElement className="gap-y-10" direction="col" items="start">
      <Typography
        className="text-3xl text-black/90 dark:text-white"
        weight="800"
      >
        {`Trailers & Vídeos Para ${movieTitle}`}
      </Typography>
      <CenteredElement className="gap-x-4" items="start" justify="start">
        {trailers.map((trailer: Trailer, index: number) => (
          <MovieTrailer key={index} trailer={trailer} />
        ))}
      </CenteredElement>
    </CenteredElement>
  );
};

export default MovieTrailers;
