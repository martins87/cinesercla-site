import { FC } from "react";
import { twMerge } from "tailwind-merge";

type HorizontalLineProps = {
  height?: "0.5px" | "1px";
  className?: string;
};

const HorizontalLine: FC<HorizontalLineProps> = ({
  height = "0.5px",
  className,
}) => {
  return (
    <div
      className={twMerge(
        "w-full bg-black/20 dark:bg-white/50",
        height === "0.5px" ? "h-[0.5px]" : "h-[1px]",
        className
      )}
    />
  );
};

export default HorizontalLine;
