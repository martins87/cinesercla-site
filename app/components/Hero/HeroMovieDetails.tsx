import { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { TMDBMovie } from "@/app/types/Movie";
import { truncate } from "@/lib/utils";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import Typography from "@/app/components/Typography";
import Dot from "@/app/components/Dot";
import Play from "@/app/assets/icons/play.svg";

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
            <div className="w-full flex items-center justify-start gap-x-1 ">
              <Typography className="text-base tablet:text-lg">
                {movie?.genres}
              </Typography>
              <Dot className="text-base tablet:text-lg" />
            </div>
            <Typography
              className="text-base tablet:text-xl opacity-85"
              weight="400"
            >
              {truncate(movie?.overview, 300)}
            </Typography>
            <div className="flex items-center justify-start gap-x-2">
              <Button label="COMPRAR" onClick={handleClick} />
              {movieTrailer && (
                <Image
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
