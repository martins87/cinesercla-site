import { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { TMDBMovie } from "@/app/types/Movie";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import Typography from "@/app/components/Typography";
import Dot from "@/app/components/Dot";
import Play from "@/app/assets/icons/play.svg";
import Rating from "../Rating";

type HeroMovieDetailsProps = {
  movie: TMDBMovie;
  movieTrailer: boolean | undefined;
  setPlayingFn: Dispatch<SetStateAction<boolean>>;
};

const HeroMovieDetails: FC<HeroMovieDetailsProps> = ({
  movie,
  movieTrailer,
  setPlayingFn,
}) => {
  const router = useRouter();
  const handleClick = () => router.push(`/filme/${movie?.idFilme}`);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-20">
      <Container>
        <div className="w-full flex flex-col">
          <div className="sm:w-1/2 flex flex-col gap-y-4">
            <Typography
              className="text-2xl md:text-3xl tablet:text-5xl"
              weight="800"
            >
              {movie?.title}
            </Typography>
            <div className="relative w-full flex items-center justify-start gap-x-1">
              <Typography className="text-base tablet:text-lg">
                {movie?.genres.split(",")[0]}
              </Typography>
              <Dot className="text-base tablet:text-lg" />
              <Rating rating={movie?.classificacao} />
              <Dot className="text-base tablet:text-lg" />
              <Typography className="text-base tablet:text-lg">
                {movie?.runtime} min
              </Typography>
            </div>
            <Typography
              className="text-base tablet:text-xl opacity-85"
              weight="400"
            >
              {movie &&
              movie.overview &&
              movie.overview.length &&
              movie.overview.length > 300
                ? movie.overview.slice(0, 300) + "..."
                : movie?.overview}
            </Typography>
            <div className="flex items-center justify-start gap-x-2">
              <Button label="COMPRAR" onClick={handleClick} />
              {movieTrailer && (
                <Image
                  className="hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
                  width={48}
                  src={Play}
                  alt="play icon"
                  onClick={() => setPlayingFn(true)}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroMovieDetails;
