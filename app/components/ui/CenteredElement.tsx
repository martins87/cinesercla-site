import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CenteredElementProps = {
  children: ReactNode;
  className?: string;
  items?: "center" | "start" | "end";
  direction?: "row" | "col";
  justify?: "center" | "start" | "end" | "between" | "around";
};

const CenteredElement: FC<CenteredElementProps> = ({
  children,
  className,
  items,
  direction,
  justify,
}) => {
  return (
    <div
      className={twMerge(
        "w-full flex",
        items === "start"
          ? "items-start"
          : items === "end"
          ? "items-end"
          : "items-center",
        direction === "col" ? "flex-col" : "flex-row",
        justify === "start"
          ? "justify-start"
          : justify === "end"
          ? "justify-end"
          : justify === "between"
          ? "justify-between"
          : justify === "around"
          ? "justify-around"
          : "justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CenteredElement;
