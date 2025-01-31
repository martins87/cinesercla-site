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
import HeaderFilter from "./HeaderFilter";

const filters: { label: string; filter: BomboniereItemType }[] = [
  { label: "Tudo", filter: null },
  { label: "Pipocas", filter: "pipoca" },
  { label: "Bebidas", filter: "bebida" },
  { label: "Doces", filter: "doce" },
  { label: "Combos", filter: "combo" },
];

const Bomboniere = () => {
  const [filterType, setFilterType] = useState<BomboniereItemType>(null);

  const handleFilter = (type: BomboniereItemType) => setFilterType(type);

  return (
    <>
      <BgImageContainer img={Bg} title="Bomboniere" />
      <Container>
        <CenteredEl className="mt-20 mb-6">
          <CenteredEl className="gap-x-4" justify="start">
            {filters.map((filter) => (
              <HeaderFilter
                key={filter.label}
                label={filter.label}
                filter={filter.filter}
                handleFilter={handleFilter}
                active={filter.filter === filterType}
              />
            ))}
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
