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
        "group flex items-center justify-center gap-x-3 px-5 py-3 rounded-2xl transition-all duration-200",
        primary
          ? "bg-main_bordeaux hover:bg-main_bordeaux/90"
          : secondary
          ? "bg-white hover:bg-white/90"
          : "bg-main_bordeaux hover:bg-main_bordeaux/90",
        className
      )}
      onClick={onClick}
    >
      {icon && <Image width={32} height={32} src={icon} alt="button icon" />}
      <Typography
        className={twMerge(
          "text-lg tracking-wider",
          primary ? "text-white" : secondary ? "text-main_bordeaux" : ""
        )}
        font="gellix"
        weight="800"
      >
        {label}
      </Typography>
    </button>
  );
};

export default Button;
