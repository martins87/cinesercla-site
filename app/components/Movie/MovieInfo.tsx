import { FC } from "react";

import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
// import like from "@/app/assets/icons/like.svg";
import { TMDBMovie } from "@/app/types/Movie";
import { formatRuntime } from "@/lib/utils";

type MovieInfoProps = {
  movie: TMDBMovie;
};

const MovieInfo: FC<MovieInfoProps> = ({ movie }) => {
  return (
    <CenteredElement className="gap-y-8" direction="col">
      <CenteredElement className="flex-col md:flex-row items-start md:items-between justify-between">
        <Typography
          className="md:w-1/2 text-3xl text-black/90 dark:text-white"
          weight="800"
        >
          {movie.title}
        </Typography>
        {/* <CenteredElement className="md:w-1/2 gap-x-2 justify-start md:justify-end">
          <Typography className="text-lg text-black/90" weight="700">
            Em Seus Favoritos
          </Typography>
          <Image className="scale-[70%]" src={like} alt="like icon" />
        </CenteredElement> */}
      </CenteredElement>
      <CenteredElement className="flex-col md:flex-row gap-y-10 items-start justify-between">
        <CenteredElement
          className="md:w-1/2 gap-y-2 mb-auto"
          direction="col"
          items="start"
        >
          <Typography
            className="text-lg text-black/65 dark:text-white"
            weight="400"
          >
            Duração: {formatRuntime(movie.runtime)}
          </Typography>
          <Typography
            className="text-lg text-black/65 dark:text-white"
            weight="400"
          >
            Gênero: {movie.genres}
          </Typography>
          <Typography
            className="text-lg text-black/65 dark:text-white"
            weight="400"
          >
            Data de Lançamento: {movie.release_date}
          </Typography>
          <Typography
            className="w-[75%] text-lg text-black/65 dark:text-white"
            weight="400"
          >
            Elenco: //TODO
          </Typography>
        </CenteredElement>
        <CenteredElement className="tablet:w-1/2">
          <Typography
            className="text-xl text-black/90 dark:text-white"
            weight="400"
          >
            {movie.overview}
          </Typography>
        </CenteredElement>
      </CenteredElement>
    </CenteredElement>
  );
};

export default MovieInfo;
