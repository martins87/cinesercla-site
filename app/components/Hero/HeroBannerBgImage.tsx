import Image from "next/image";

import DarkerBackground from "./DarkerBackground";
import { FC } from "react";

type HeroBannerBgImageProps = {
  imgFileId: string;
};

const HeroBannerBgImage: FC<HeroBannerBgImageProps> = ({ imgFileId }) => {
  return (
    <DarkerBackground>
      <Image
        className="w-screen h-screen object-cover tablet:object-fill"
        src={`/api/files/${imgFileId}`}
        alt="Image"
        priority
        fill
      />
    </DarkerBackground>
  );
};

export default HeroBannerBgImage;
