import { FC } from "react";
import Image from "next/image";

import CenteredEl from "./ui/CenteredElement";
import Typography from "./Typography";
import { Bomboniere } from "../types/bomboniere";

type BomboniereCardProps = {
  product: Bomboniere;
};

const BomboniereCard: FC<BomboniereCardProps> = ({ product }) => {
  return (
    <CenteredEl className="relative h-80 p-4 rounded-[32px] transition-all ease-in-out duration-300 bg-[#3B3B3B] hover:bg-[#3B3B3B]/90">
      <Image
        className="h-56"
        width={94}
        height={140}
        src={`/api/files/${product.imageFileId}`}
        alt="bomboniere item"
      />
      <CenteredEl
        className="absolute w-4/5 h-[84px] bottom-6 px-4 py-2 rounded-2xl bg-[#D9D9D9]"
        direction="col"
        items="start"
        justify="between"
      >
        <Typography className="text-lg text-black leading-5" weight="700">
          {product.nome}
        </Typography>
        <Typography className="text-black" weight="400">
          {product.preco}
        </Typography>
      </CenteredEl>
    </CenteredEl>
  );
};

export default BomboniereCard;
