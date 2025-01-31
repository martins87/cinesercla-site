"use client";

import { useState } from "react";

import BgImageContainer from "@/app/components/ui/BgImageContainer";
import BomboniereCard from "@/app/components/BomboniereCard";
import Container from "@/app/components/ui/Container";
import CenteredEl from "@/app/components/ui/CenteredElement";
import { bomboniereItems } from "../../constants/bomboniere";
import Typography from "@/app/components/Typography";
import CarouselArrow from "@/app/components/CarouselArrow";
import { BomboniereItem, BomboniereItemType } from "@/app/types/BomboniereItem";
import OfertasPromocionais from "./OfertasPromocionais";
import Bg from "../../assets/images/backgrounds/bomboniere.png";

const Bomboniere = () => {
  const [filterType, setFilterType] = useState<null | BomboniereItemType>(null);

  const handleFilter = (type: BomboniereItemType | null) => setFilterType(type);

  return (
    <>
      <BgImageContainer img={Bg} title="Bomboniere" />
      <Container>
        <CenteredEl className="mt-20 mb-10">
          <CenteredEl className="gap-x-4" justify="start">
            <Typography
              className="text-[32px] hover:cursor-pointer text-black hover:text-black/80"
              weight="800"
              onClick={() => handleFilter(null)}
            >
              Tudo
            </Typography>
            <Typography
              className="text-[32px] hover:cursor-pointer text-black/40 hover:text-black/50"
              weight="800"
              onClick={() => handleFilter("pipoca")}
            >
              Pipocas
            </Typography>
            <Typography
              className="text-[32px] hover:cursor-pointer text-black/40 hover:text-black/50"
              weight="800"
              onClick={() => handleFilter("bebida")}
            >
              Bebidas
            </Typography>
            <Typography
              className="text-[32px] hover:cursor-pointer text-black/40 hover:text-black/50"
              weight="800"
              onClick={() => handleFilter("doce")}
            >
              Doces
            </Typography>
            <Typography
              className="text-[32px] hover:cursor-pointer text-black/40 hover:text-black/50"
              weight="800"
              onClick={() => handleFilter("combo")}
            >
              Combos
            </Typography>
          </CenteredEl>
          <CenteredEl className="gap-x-2" justify="end">
            <CarouselArrow direction="left" onClick={() => {}} />
            <CarouselArrow direction="right" onClick={() => {}} />
          </CenteredEl>
        </CenteredEl>
        <CenteredEl className="grid grid-cols-4 gap-2">
          {bomboniereItems
            .filter((item) => {
              return filterType === null ? true : item.type === filterType;
            })
            .map((item: BomboniereItem) => (
              <BomboniereCard key={item.id} item={item} />
            ))}
        </CenteredEl>
        <OfertasPromocionais />
      </Container>
    </>
  );
};

export default Bomboniere;
