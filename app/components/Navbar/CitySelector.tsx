import { FC } from "react";
import Image from "next/image";

import Typography from "../Typography";
import Pin from "../../assets/icons/pin.png";
import ArrowDown from "../../assets/icons/arrow-down.png";
import { twMerge } from "tailwind-merge";

type CitySelectorProps = {
  isOnTop: boolean;
};

const CitySelector: FC<CitySelectorProps> = ({ isOnTop }) => {
  return (
    <div className="h-10 flex items-center gap-x-3">
      <Image src={Pin} alt="pin icon" />
      <Typography
        className={twMerge("text-base", isOnTop ? "text-black" : "text-white")}
        font="proxima-nova"
        weight="700"
      >
        BELO HORIZONTE
      </Typography>
      <Image src={ArrowDown} alt="arrow down icon" />
    </div>
  );
};

export default CitySelector;
