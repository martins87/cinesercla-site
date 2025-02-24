import { FC, ReactNode } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";
import Typography from "../Typography";

type ButtonProps = {
  label: string | ReactNode;
  primary?: boolean;
  secondary?: boolean;
  className?: string;
  icon?: StaticImport;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  label,
  primary,
  secondary,
  className,
  icon,
  onClick,
}) => {
  return (
    <button
      className={twMerge(
        "group flex items-center justify-center gap-x-3 px-5 py-3 rounded-2xl transition-all duration-300",
        primary
          ? "bg-main_bordeaux hover:bg-main_bordeaux/80"
          : secondary
          ? "bg-white border-2 border-main_bordeaux hover:bg-main_bordeaux/10"
          : "",
        className
      )}
      onClick={onClick}
    >
      {icon && <Image width={32} height={32} src={icon} alt="button icon" />}
      <Typography
        className={twMerge(
          "text-base tracking-wider",
          primary ? "text-white" : secondary ? "text-main_bordeaux" : ""
        )}
        weight="800"
      >
        {label}
      </Typography>
    </button>
  );
};

export default Button;
