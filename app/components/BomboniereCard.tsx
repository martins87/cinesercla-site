import { FC } from "react";
import Image from "next/image";

import CenteredEl from "./ui/CenteredElement";
import Typography from "./Typography";
import { BomboniereItem } from "../types/BomboniereItem";
// import Plus from "../assets/icons/plus.svg";

type BomboniereCardProps = {
  item: BomboniereItem;
};

const BomboniereCard: FC<BomboniereCardProps> = ({ item }) => {
  return (
    <CenteredEl className="relative h-80 p-4 rounded-[32px] transition-all ease-in-out duration-300 bg-[#3B3B3B] hover:bg-[#3B3B3B]/90">
      <Image className="h-56" src={item.img} alt="bomboniere item" />
      <CenteredEl
        className="absolute w-4/5 h-[84px] bottom-6 px-4 py-2 rounded-2xl bg-[#D9D9D9]"
        direction="col"
        items="start"
        justify="between"
      >
        <Typography className="text-lg text-black leading-5" weight="700">
          {item.description}
        </Typography>
        <Typography className="text-black" weight="400">
          {item.price}
        </Typography>
      </CenteredEl>
      {/* <CenteredEl className="absolute bottom-4 right-[7.5%] w-12 aspect-square rounded-full transition-all ease-in-out duration-300 bg-[#980038] hover:scale-110 hover:cursor-pointer">
        <Image src={Plus} alt="plus icon" />
      </CenteredEl> */}
    </CenteredEl>
  );
};

export default BomboniereCard;
