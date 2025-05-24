import CenteredElement from "../ui/CenteredElement";
import Image from "next/image";

import Typography from "../Typography";
import noBanner from "@/app/assets/images/no_banner.svg";

const NoBackdropImage = () => {
  return (
    <CenteredElement className="gap-y-4" direction="col">
      <Image src={noBanner} alt="Image" />
      <Typography className="text-xl text-black/50 dark:text-white/50">
        Imagem Em Breve
      </Typography>
    </CenteredElement>
  );
};

export default NoBackdropImage;
