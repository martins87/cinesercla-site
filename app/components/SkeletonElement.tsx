import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type SkeletonElementProps = {
  className?: string;
};

const SkeletonElement: FC<SkeletonElementProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "rounded-md bg-[#B8B8B8] dark:bg-[#3B3B3B]",
        // "rounded-md bg-[#B8B8B8] dark:bg-[#49575A]",
        className
      )}
    />
  );
};

export default SkeletonElement;
