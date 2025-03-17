import React, { FC, ReactNode } from "react";

import { useDragClick } from "@/app/hooks/useDragClick";

type CarouselItemProps = {
  onClick: () => void;
  children: ReactNode;
};

const CarouselItem: FC<CarouselItemProps> = ({ onClick, children }) => {
  const { handleMouseDown, handleMouseMove, handleMouseUp } = useDragClick({
    onClick,
  });

  return (
    <div
      className="hover:cursor-pointer"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
