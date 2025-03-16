import { FC } from "react";
import Image from "next/image";

import { Trailer } from "@/app/types/Movie";
import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import play from "@/app/assets/icons/play.svg";

type MovieTrailerProps = {
  trailer: Trailer;
};

const MovieTrailer: FC<MovieTrailerProps> = ({ trailer }) => {
  return (
    <CenteredElement
      className="w-64 gap-y-2"
      items="start"
      justify="start"
      direction="col"
    >
      <CenteredElement className="relative">
        <Image
          className="w-full h-full rounded-2xl"
          src={trailer.videoThumb}
          alt="moviethumbnail"
        />
        <Image
          className="absolute grid place-items-center opacity-75"
          src={play}
          alt="play icon"
        />
      </CenteredElement>
      <Typography
        className="text-xl text-black/90 dark:text-white leading-6"
        weight="700"
      >
        {trailer.videoTitle}
      </Typography>
      <Typography
        className="text-xl text-black/65 dark:text-white"
        weight="400"
      >
        {`${trailer.videoDuration} ${trailer.timestamp}`}
      </Typography>
    </CenteredElement>
  );
};

export default MovieTrailer;
