import Image from "next/image";

import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

type ArrowProps = {
  direction: "left" | "right";
  onClick: () => void;
};

const Arrow: FC<ArrowProps> = ({ direction, onClick }) => {
  return (
    <div
      className={twMerge(
        "w-8 aspect-square flex items-center justify-center rounded-full p-2 hover:cursor-pointer",
        direction === "left" ? "bg-[#980038]/70" : "bg-[#980038]"
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

export default Arrow;
