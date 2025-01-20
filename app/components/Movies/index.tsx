"use client";

import Typography from "../Typography";
import MovieCard from "./MovieCard";
import { movies } from "../../constants/cards-movies";
import Arrow from "./Arrow";

const Movies = () => {
  return (
    <div className="w-full h-[75vh] flex flex-col items-center justify-center">
      <div className="w-full flex items-center mb-4">
        <div className="flex flex-1 gap-x-6">
          <Typography className="text-black text-3xl" weight="800">
            Em Cartaz
          </Typography>
          <Typography className="text-black/50 text-3xl" weight="800">
            Em Breve
          </Typography>
          <Typography className="text-black/50 text-3xl" weight="800">
            PréVenda
          </Typography>
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <Arrow direction="left" onClick={() => {}} />
          <Arrow direction="right" onClick={() => {}} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-3">
        <MovieCard movie={movies[0]} />
        <MovieCard movie={movies[1]} />
        <MovieCard movie={movies[2]} />
        <MovieCard movie={movies[3]} />
      </div>
    </div>
  );
};

export default Movies;
