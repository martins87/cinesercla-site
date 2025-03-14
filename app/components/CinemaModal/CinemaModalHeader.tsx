import Image from "next/image";

import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import close from "@/app/assets/icons/close.svg";
import { FC } from "react";

type CinemaModalHeaderProps = {
  closeFn: () => void;
};

const CinemaModalHeader: FC<CinemaModalHeaderProps> = ({ closeFn }) => {
  return (
    <CenteredElement justify="between">
      <Typography
        className="uppercase text-3xl text-black/90 text-center"
        weight="800"
      >
        Por favor, selecione um cinema abaixo:
      </Typography>
      <Image
        className="hover:cursor-pointer"
        src={close}
        alt="close icon"
        onClick={closeFn}
      />
    </CenteredElement>
  );
};

export default CinemaModalHeader;
