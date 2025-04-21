"use client";

import { FC, useState } from "react";
import Image from "next/image";

import { Trailer } from "@/app/types/Movie";
import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import TrailerVideo from "./TrailerVideo";
import play from "@/app/assets/icons/play.svg";

type MovieTrailerProps = {
  trailer: Trailer;
};

const MovieTrailer: FC<MovieTrailerProps> = ({ trailer }) => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  return (
    <>
      <CenteredElement
        className="w-fit max-w-80 gap-y-4"
        direction="col"
        items="start"
      >
        <CenteredElement className="relative">
          <Image
            src={`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`}
            alt="Trailer thumbnail"
            width={319}
            height={188}
            className="rounded-xl"
          />
          <Image
            className="absolute grid place-items-center opacity-75 hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
            src={play}
            alt="play icon"
            onClick={handlePlay}
          />
        </CenteredElement>
        <Typography
          className="text-xl text-black/90 dark:text-white leading-6"
          weight="700"
        >
          {trailer.name}
        </Typography>
      </CenteredElement>
      {playing && (
        <TrailerVideo videoKey={trailer.key!} setPlaying={setPlaying} />
      )}
    </>
  );
};

export default MovieTrailer;
