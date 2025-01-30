import Image from "next/image";

import ArrowLeft from "../assets/icons/arrow-left.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

type ArrowProps = {
  direction: "left" | "right";
  onClick?: () => void;
  hero?: boolean;
};

const CarouselArrow: FC<ArrowProps> = ({ direction, onClick, hero }) => {
  return (
    <div
      className={twMerge(
        "w-8 aspect-square flex items-center justify-center rounded-full p-2 hover:cursor-pointer",
        hero
          ? "w-10 bg-white/20 backdrop-blur-md hover:bg-white/50 rounded-xl"
          : "bg-[#980038]/70 transition-all ease-in-out duration-300 hover:bg-[#980038]"
      )}
      onClick={onClick}
    >
      <Image
        src={direction === "left" ? ArrowLeft : ArrowRight}
        alt="carousel arrow"
      />
    </div>
  );
};

export default CarouselArrow;
