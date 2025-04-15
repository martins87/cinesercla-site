import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import {
  // Movie,
  TMDBMovie,
  // Trailer
} from "@/app/types/Movie";
import { FC } from "react";
// import MovieTrailer from "./MovieTrailer";

type MovieTrailersProps = {
  // movie: Movie;
  movie: TMDBMovie;
};

const MovieTrailers: FC<MovieTrailersProps> = ({ movie }) => {
  return (
    <CenteredElement className="gap-y-4" direction="col" items="start">
      <Typography
        className="text-3xl text-black/90 dark:text-white"
        weight="800"
      >
        {`Trailers & Vídeos Para ${movie.title}`}
      </Typography>
      {/* <CenteredElement className="gap-x-3" items="start" justify="start">
        {movie.trailers!.map((trailer: Trailer, index: number) => (
          <MovieTrailer key={index} trailer={trailer} />
        ))}
      </CenteredElement> */}
    </CenteredElement>
  );
};

export default MovieTrailers;
