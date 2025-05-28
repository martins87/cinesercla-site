import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type SkeletonElementProps = {
  className?: string;
};

const SkeletonElement: FC<SkeletonElementProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "rounded-md bg-[#B8B8B8] dark:bg-[#A8A8A8]",
        className
      )}
    />
  );
};

export default SkeletonElement;
