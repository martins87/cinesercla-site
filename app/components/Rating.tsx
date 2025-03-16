import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

import CenteredElement from "./ui/CenteredElement";
import Typography from "./Typography";

type RatingProps = {
  rating: string | undefined;
  className?: string;
};

const Rating: FC<RatingProps> = ({ rating, className }) => {
  return (
    <CenteredElement
      className={twMerge(
        "w-8 aspect-square rounded-md",
        rating === "L"
          ? "bg-[#008000]"
          : rating === "10"
          ? "bg-[#0000FF]"
          : rating === "14"
          ? "bg-[#FFA500]"
          : rating === "16"
          ? "bg-[#FF0000]"
          : "bg-[#000000]",
        className
      )}
    >
      <Typography className="text-base tablet:text-lg">{rating}</Typography>
    </CenteredElement>
  );
};

export default Rating;
