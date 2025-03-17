"use client";

import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import CenteredEl from "../ui/CenteredElement";
import CarouselItem from "../Carousel/CarouselItem";

type PromotionCardProps = {
  img: StaticImport;
};

const PromotionCard: FC<PromotionCardProps> = ({ img }) => {
  const router = useRouter();

  const handleClick = () => router.push("/promocoes");

  return (
    <CarouselItem onClick={handleClick}>
      <CenteredEl className="w-full h-80 rounded-xl overflow-hidden">
        <Image
          className="w-full h-80 hover:scale-[103%] transition-transform ease-in-out duration-300"
          src={img}
          alt="image card"
        />
      </CenteredEl>
    </CarouselItem>
  );
};

export default PromotionCard;
