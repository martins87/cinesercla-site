import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TypographyProps = {
  className?: string;
  font?: "proxima-nova" | "gellix";
  weight?: "400" | "700" | "800";
  children: string | ReactNode;
  maxChar?: number;
  onClick?: () => void;
};

const Typography: FC<TypographyProps> = ({
  className,
  font = "proxima-nova",
  weight = "700",
  children,
  maxChar,
  onClick,
}) => {
  return (
    <span
      className={twMerge(
        "text-white",
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
      onClick={onClick}
    >
      {maxChar
        ? children!.toString().length > maxChar
          ? `${children!.toString().slice(0, maxChar)}...`
          : children!.toString()
        : children}
    </span>
  );
};

export default Typography;
