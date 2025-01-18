import { FC } from "react";
import Image from "next/image";

import { Movie as M } from "@/app/types/Movie";

type MovieProps = {
  movie: M;
};

const Movie: FC<MovieProps> = ({ movie }) => {
  return (
    <div>
      <Image
        className="w-screen h-screen object-cover"
        src={movie.cover}
        alt="Image"
      />
    </div>
  );
};

export default Movie;
