import { FC } from "react";

import { Trailer } from "@/app/types/Movie";
import CenteredElement from "../ui/CenteredElement";
import Image from "next/image";
import Typography from "../Typography";

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
      <Image
        className="w-fit rounded-2xl"
        src={trailer.videoThumb}
        alt="moviethumbnail"
      />
      <Typography className="text-xl text-black/90 leading-6" weight="700">
        {trailer.videoTitle}
      </Typography>
      <Typography className="text-xl text-black/65" weight="400">
        {`${trailer.videoDuration} ${trailer.timestamp}`}
      </Typography>
    </CenteredElement>
  );
};

export default MovieTrailer;
