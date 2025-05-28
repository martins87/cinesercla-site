import { FC } from "react";
import Image from "next/image";

import { Banner } from "@/app/types/banner";
import { useMovieStore } from "@/app/store/movie";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import Typography from "../Typography";
import GradientOverlay from "@/app/components/GradientOverlay";
import Dot from "@/app/components/Dot";
import DarkerBackground from "./DarkerBackground";
import Play from "@/app/assets/icons/play.svg";

type HeroBannerProps = {
  banner: Banner;
};

const HeroBanner: FC<HeroBannerProps> = ({ banner }) => {
  const { getMovieById } = useMovieStore();
  const idFilme = banner.idFilme;
  const movie = getMovieById(idFilme);

  return (
    <div className="relative h-screen">
      <DarkerBackground>
        <Image
          className="w-screen h-screen object-cover tablet:object-fill"
          src={`/api/files/${banner.images[0].fileId}`}
          alt="Image"
          priority
          fill
        />
      </DarkerBackground>
      <GradientOverlay hero />
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
                {/* <Rating rating={movie.rating} /> */}
                {/* <Dot className="text-base tablet:text-lg" />
                <Typography className="text-base tablet:text-lg">
                  {movie.}
                </Typography> */}
              </div>
              <Typography
                className="text-base tablet:text-xl opacity-85"
                weight="400"
              >
                {movie?.overview}
              </Typography>
              <div className="flex items-center justify-start gap-x-2">
                <Button label="COMPRAR" />
                <Image width={48} src={Play} alt="play icon" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroBanner;
