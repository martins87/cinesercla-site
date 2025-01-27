import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC } from "react";
import CenteredEl from "../ui/CenteredElement";

type PromotionCardProps = {
  img: StaticImport;
};

const PromotionCard: FC<PromotionCardProps> = ({ img }) => {
  return (
    <CenteredEl className="w-full h-80 rounded-xl overflow-hidden hover:cursor-pointer">
      <Image
        className="w-full h-80 hover:scale-[103%] transition-transform ease-in-out duration-300"
        src={img}
        alt="image card"
      />
    </CenteredEl>
  );
};

export default PromotionCard;
