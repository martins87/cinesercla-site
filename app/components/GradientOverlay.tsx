import { FC } from "react";
import { twMerge } from "tailwind-merge";

type GradientOverlayProps = {
  hero?: boolean;
};

const GradientOverlay: FC<GradientOverlayProps> = ({ hero }) => (
  <>
    <div
      className={twMerge(
        "absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-[#EAEAEA] dark:to-[#10141c] z-10",
        hero ? "h-20" : "h-6"
      )}
    />
    <div
      className={twMerge(
        "absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-[#EAEAEA] dark:to-[#10141c] z-10",
        hero ? "h-20" : "h-6"
      )}
    />
  </>
);

export default GradientOverlay;
