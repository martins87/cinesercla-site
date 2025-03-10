import Image from "next/image";

import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
import clock from "@/app/assets/icons/clock.svg";
import audio from "@/app/assets/icons/audio.svg";

const PocketGuideMovieDetail = () => {
  return (
    <CenteredElement className="p-4 rounded-xl bg-[#3B3B3B]">
      <CenteredElement className="w-1/2" direction="col" items="start">
        <Typography className="text-lg" weight="700">
          Sonic 3: O Filme
        </Typography>
        <Typography className="text-sm" weight="400">
          Sessão 2D . 12 Anos . Sala 4
        </Typography>
      </CenteredElement>
      <CenteredElement className="w-1/2" justify="between">
        <CenteredElement className="gap-x-2" justify="start">
          <Image src={clock} alt="clock icon" />
          <Typography className="text-sm" weight="400">
            16:20
          </Typography>
        </CenteredElement>
        <CenteredElement className="gap-x-2" justify="start">
          <Image src={audio} alt="clock icon" />
          <Typography className="text-sm" weight="400">
            Dublado
          </Typography>
        </CenteredElement>
      </CenteredElement>
    </CenteredElement>
  );
};

export default PocketGuideMovieDetail;
