import { FC } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import DarkerBackground from "../Hero/DarkerBackground";
import Typography from "../Typography";
import GradientOverlay from "../GradientOverlay";

type BgImageContainerProps = {
  img: StaticImport;
  title: string;
  subtitle?: string;
};

const BgImageContainer: FC<BgImageContainerProps> = ({
  img,
  title,
  subtitle,
}) => {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <DarkerBackground>
        <Image className="w-screen h-screen" src={img} alt="Image" />
        <div className="absolute bottom-24 left-[5%] sm:left-[2.5%] lg:left-[10%] xl:left-[12.5%] z-20">
          <Typography
            className="text-3xl md:text-5xl tablet:text-7xl"
            weight="800"
          >
            {title}
          </Typography>
        </div>
        {subtitle && (
          <div className="absolute bottom-12 left-[5%] sm:left-[2.5%] lg:left-[10%] xl:left-[12.5%] z-20">
            <Typography
              className="text-base md:text-xl tablet:text-2xl"
              weight="400"
            >
              {subtitle}
            </Typography>
          </div>
        )}
      </DarkerBackground>
      <GradientOverlay />
    </div>
  );
};

export default BgImageContainer;
