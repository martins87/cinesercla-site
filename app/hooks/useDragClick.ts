import { useState } from "react";

type UseDragClickProps = {
  onClick: () => void;
  threshold?: number; // Movement threshold (default: 5px)
};

export const useDragClick = ({ onClick, threshold = 5 }: UseDragClickProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(false);
    setStartX(event.clientX);
    setStartY(event.clientY);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const deltaX = Math.abs(event.clientX - startX);
    const deltaY = Math.abs(event.clientY - startY);

    if (deltaX > threshold || deltaY > threshold) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) {
      onClick();
    }
  };

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};
