import { FC } from "react";
import Image from "next/image";

import { Movie as M } from "@/app/types/Movie";
import Typography from "../Typography";
import DarkerBackground from "./DarkerBackground";
import Container from "../ui/Container";
import Play from "../../assets/icons/play.svg";
import GradientOverlay from "../GradientOverlay";
import Dot from "../Dot";
// import Ticket from "../../assets/icons/ticket.png";
import CenteredElement from "../ui/CenteredElement";
import { twMerge } from "tailwind-merge";
import Button from "../ui/Button";

type MovieProps = {
  movie: M;
};

const Movie: FC<MovieProps> = ({ movie }) => {
  return (
    <div className="relative h-screen">
      <DarkerBackground>
        <Image
          className="w-screen h-screen object-cover tablet:object-fill"
          src={movie.cover!}
          alt="Image"
        />
      </DarkerBackground>
      <GradientOverlay hero />
      <div className="absolute top-0 left-0 h-screen z-20">
        <Container>
          <div className="w-full flex flex-col">
            <div className="sm:w-1/2 flex flex-col gap-y-4">
              <Typography
                className="text-2xl md:text-3xl tablet:text-5xl"
                weight="800"
              >
                {movie.title}
              </Typography>
              <div className="w-full flex items-center justify-start gap-x-1 ">
                <Typography className="text-base tablet:text-lg">
                  {movie.genre}
                </Typography>
                <Dot className="text-base tablet:text-lg" />
                <CenteredElement
                  className={twMerge(
                    "w-8 aspect-square rounded-md",
                    movie.rating === "L"
                      ? "bg-[#008000]"
                      : movie.rating === "10"
                      ? "bg-[#0000FF]"
                      : movie.rating === "14"
                      ? "bg-[#FFA500]"
                      : movie.rating === "16"
                      ? "bg-[#FF0000]"
                      : "bg-[#000000]"
                  )}
                >
                  <Typography className="text-base tablet:text-lg">
                    {movie.rating}
                  </Typography>
                </CenteredElement>
                <Dot className="text-base tablet:text-lg" />
                <Typography className="text-base tablet:text-lg">
                  {movie.duration}
                </Typography>
              </div>
              <Typography
                className="text-base tablet:text-xl opacity-85"
                weight="400"
              >
                {movie.description}
              </Typography>
              <div className="flex items-center justify-start gap-x-2">
                {/* <div className="flex items-center justify-center gap-x-3 p-4 rounded-2xl bg-[#980038]">
                  <Typography
                    className="text-base tablet:text-lg tracking-wider"
                    font="gellix"
                  >
                    COMPRAR
                  </Typography>
                  <Image width={24} src={Ticket} alt="ticket logo" />
                </div> */}
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

export default Movie;
