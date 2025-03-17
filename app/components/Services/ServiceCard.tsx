"use client";

import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Typography from "../Typography";
import CenteredEl from "../ui/CenteredElement";
import OuterLinkArrow from "./OuterLinkArrow";
import CarouselItem from "../Carousel/CarouselItem";

type ServiceCardProps = {
  imgData: { label: string; img: StaticImport };
};

const ServiceCard: FC<ServiceCardProps> = ({ imgData }) => {
  const router = useRouter();
  const { label, img } = imgData;

  const handleClick = () => router.push("/corporativo");

  return (
    <CarouselItem onClick={handleClick}>
      <div className="group w-full h-[500px] relative object-center rounded-xl overflow-hidden">
        <Image
          className="absolute inset-0 object-cover h-full group-hover:scale-[103%] transition-all ease-in-out duration-300"
          src={img}
          alt="image card"
        />
        <CenteredEl className="h-[15%] absolute bottom-0 left-0 bg-black/20 backdrop-blur-md">
          <CenteredEl className="px-8" justify="between">
            <Typography className="text-lg tracking-wide">{label}</Typography>
            <OuterLinkArrow />
          </CenteredEl>
        </CenteredEl>
      </div>
    </CarouselItem>
  );
};

export default ServiceCard;
