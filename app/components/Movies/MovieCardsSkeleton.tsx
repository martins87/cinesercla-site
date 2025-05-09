import React, { FC, ReactNode } from "react";
import CenteredElement from "../ui/CenteredElement";

type MovieCardsSkeletonProps = {
  children?: ReactNode;
};

const MovieCardsSkeleton: FC<MovieCardsSkeletonProps> = ({ children }) => {
  return (
    <CenteredElement className="gap-x-2">
      {Array.from({ length: 4 }).map((_, index: number) => (
        <div
          key={index}
          className="w-full flex flex-col gap-y-2 bg-[#D8D8D8] dark:bg-[#49575A] rounded-2xl p-4"
        >
          <div className="relative min-h-[344px] max-h-[344px] lg:min-h-[376px] lg:max-h-[376px] xl:min-h-[440px] xl:max-h-[440px] flex flex-1 object-center">
            {children}
          </div>
        </div>
      ))}
    </CenteredElement>
  );
};

export default MovieCardsSkeleton;
