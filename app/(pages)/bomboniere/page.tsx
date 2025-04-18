"use client";

import { useState } from "react";

import { BomboniereItem, BomboniereItemType } from "@/app/types/BomboniereItem";
import BgImageContainer from "@/app/components/ui/BgImageContainer";
import BomboniereCard from "@/app/components/BomboniereCard";
import Container from "@/app/components/ui/Container";
import CenteredEl from "@/app/components/ui/CenteredElement";
import { bomboniereItems } from "../../constants/bomboniere";
import CarouselArrow from "@/app/components/CarouselArrow";
// import OfertasPromocionais from "./OfertasPromocionais";
import HeaderFilter from "../../components/HeaderFilter";
import Bg from "../../assets/images/backgrounds/bomboniere.png";
import { Filter } from "@/app/types/Filter";

const filters: { label: string; filter: BomboniereItemType }[] = [
  { label: "Tudo", filter: null },
  { label: "Pipocas", filter: "pipoca" },
  { label: "Bebidas", filter: "bebida" },
  { label: "Doces", filter: "doce" },
  { label: "Combos", filter: "combo" },
];

const Bomboniere = () => {
  const [filterType, setFilterType] = useState<Filter>(null);

  const handleFilter = (type: Filter) => setFilterType(type);

  return (
    <>
      <BgImageContainer img={Bg} title="Bomboniere" />
      <Container>
        <CenteredEl className="flex-col md:flex-row mt-20 mb-6">
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
        <CenteredEl className="grid grid-cols-1 md:grid-cols-3 tablet:grid-cols-4 gap-2">
          {bomboniereItems
            .filter((item) => {
              return filterType === null ? true : item.type === filterType;
            })
            .map((item: BomboniereItem) => (
              <BomboniereCard key={item.id} item={item} />
            ))}
        </CenteredEl>
        {/* <OfertasPromocionais /> */}
      </Container>
    </>
  );
};

export default Bomboniere;
