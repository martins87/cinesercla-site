import { FC } from "react";
import Image from "next/image";

import Typography from "../Typography";
import Pin from "../../assets/icons/pin.png";
import ArrowDown from "../../assets/icons/arrow-down-red.svg";
import { twMerge } from "tailwind-merge";
import { useLocation } from "@/app/store/location";

type CitySelectorProps = {
  isOnTop: boolean;
  onClick?: () => void;
};

const CitySelector: FC<CitySelectorProps> = ({ isOnTop, onClick }) => {
  const { city } = useLocation();

  return (
    <div
      className="h-10 hidden lg:flex items-center gap-x-3 -mb-1 ml-4 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
      onClick={onClick}
    >
      <Image src={Pin} alt="pin icon" />
      <Typography
        className={twMerge(
          "text-sm",
          isOnTop ? "text-black dark:text-white" : "text-white"
        )}
        weight="700"
      >
        {city}
      </Typography>
      <Image src={ArrowDown} alt="arrow down icon" />
    </div>
  );
};

export default CitySelector;
