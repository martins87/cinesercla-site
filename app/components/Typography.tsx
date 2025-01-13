import { FC } from "react";
import { twMerge } from "tailwind-merge";

type TypographyProps = {
  className?: string;
  font: "proxima-nova" | "gellix";
  weight?: "400" | "700" | "800";
  children: string;
};

const Typography: FC<TypographyProps> = ({
  className = "",
  font,
  weight = "400",
  children,
}) => {
  return (
    <span
      className={twMerge(
        font === "proxima-nova"
          ? "font-[family-name:var(--font-proxima-nova)]"
          : "",
        weight === "700"
          ? "font-bold"
          : weight === "800"
          ? "font-extrabold"
          : weight,
        className
      )}
    >
      {children}
    </span>
  );
};

export default Typography;
