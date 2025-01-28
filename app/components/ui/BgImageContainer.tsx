import { FC } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import DarkerBackground from "../Hero/DarkerBackground";
import Typography from "../Typography";

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
          <Typography className="text-7xl" font="proxima-nova" weight="800">
            {title}
          </Typography>
        </div>
        {subtitle && (
          <div className="absolute bottom-14 left-[5%] sm:left-[2.5%] lg:left-[10%] xl:left-[12.5%] z-20">
            <Typography className="text-2xl" font="proxima-nova" weight="400">
              {subtitle}
            </Typography>
          </div>
        )}
      </DarkerBackground>
    </div>
  );
};

export default BgImageContainer;
