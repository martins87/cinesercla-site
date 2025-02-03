import { FC } from "react";
import Image from "next/image";

import { Movie as M } from "@/app/types/Movie";
import Typography from "../Typography";
import DarkerBackground from "./DarkerBackground";
import Container from "../ui/Container";
import IMDBLogo from "../../assets/images/imdb-logo.png";
import RTLogo from "../../assets/images/rotten-tomatoes-logo.png";
import Ticket from "../../assets/icons/ticket.png";
import Play from "../../assets/icons/play.png";

type MovieProps = {
  movie: M;
};

const Movie: FC<MovieProps> = ({ movie }) => {
  return (
    <div className="relative h-screen">
      <DarkerBackground>
        <Image className="w-screen h-screen" src={movie.cover} alt="Image" />
      </DarkerBackground>
      <div className="absolute top-0 left-0 h-screen z-20">
        <Container className="">
          <div className="w-full flex flex-col">
            <div className="sm:w-1/2 flex flex-col gap-y-4">
              <Typography
                className="text-2xl md:text-3xl tablet:text-5xl"
                weight="800"
              >
                {movie.title}
              </Typography>
              <Typography
                className="text-base tablet:text-xl opacity-85"
                weight="400"
              >
                {movie.description}
              </Typography>
              <div className="w-full flex items-center justify-start gap-x-2 ">
                <Image width={44} src={IMDBLogo} alt="imdb logo" />
                <Typography className="text-base tablet:text-lg">
                  {movie.imdbRate}
                </Typography>
                <Image width={24} src={RTLogo} alt="rotten tomatoes logo" />
                <Typography className="text-base tablet:text-lg">
                  {movie.rtRate}
                </Typography>
                <Typography className="text-base tablet:text-lg">
                  {movie.rating}
                </Typography>
                <Typography className="text-base tablet:text-lg">
                  {`| ${movie.duration}`}
                </Typography>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div className="flex items-center justify-center gap-x-3 p-4 rounded-2xl bg-[#980038]">
                  <Typography className="text-base tablet:text-lg tracking-wider">
                    COMPRAR
                  </Typography>
                  <Image width={24} src={Ticket} alt="ticket logo" />
                </div>
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
