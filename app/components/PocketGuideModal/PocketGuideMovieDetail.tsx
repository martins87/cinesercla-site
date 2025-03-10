import { FC } from "react";
import Image from "next/image";

import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
import clock from "@/app/assets/icons/clock.svg";
import audio from "@/app/assets/icons/audio.svg";
import Dot from "../Dot";
import { PocketGuideMovieDetail as MovieDetail } from "@/app/types/PocketGuideMovieDetail";

type PocketGuideMovieDetailProps = {
  movieDetail: MovieDetail;
};

const PocketGuideMovieDetail: FC<PocketGuideMovieDetailProps> = ({
  movieDetail,
}) => {
  return (
    <CenteredElement className="flex-col tablet:flex-row gap-y-2 p-4 rounded-xl bg-[#3B3B3B]">
      <CenteredElement className="tablet:w-1/2" direction="col" items="start">
        <Typography className="text-lg" weight="700">
          {movieDetail.title}
        </Typography>
        <CenteredElement justify="start">
          <Typography className="text-sm" weight="400">
            {movieDetail.session}
          </Typography>
          <Dot className="text-sm" />
          <Typography className="text-sm" weight="400">
            {movieDetail.rate}
          </Typography>
          <Dot className="text-sm" />
          <Typography className="text-sm" weight="400">
            {movieDetail.screen}
          </Typography>
        </CenteredElement>
      </CenteredElement>
      <CenteredElement className="tablet:w-1/2" justify="between">
        <CenteredElement className="gap-x-2" justify="start">
          <Image src={clock} alt="clock icon" />
          <Typography className="text-sm" weight="400">
            {movieDetail.time[0]}
          </Typography>
        </CenteredElement>
        <CenteredElement className="gap-x-2" justify="start">
          <Image src={audio} alt="clock icon" />
          <Typography className="text-sm" weight="400">
            {movieDetail.language}
          </Typography>
        </CenteredElement>
      </CenteredElement>
    </CenteredElement>
  );
};

export default PocketGuideMovieDetail;
