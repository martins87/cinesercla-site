"use client";

import { useState } from "react";

import { BomboniereItemType } from "@/app/types/BomboniereItem";
import { Filter } from "@/app/types/Filter";
import { Bomboniere as BomboniereItem } from "@/app/types/bomboniere";
import { useBomboniere } from "@/app/hooks/useBomboniere";
import BgImageContainer from "@/app/components/ui/BgImageContainer";
import BomboniereCard from "@/app/components/BomboniereCard";
import Container from "@/app/components/ui/Container";
import CenteredEl from "@/app/components/ui/CenteredElement";
import CarouselArrow from "@/app/components/CarouselArrow";
import HeaderFilter from "../../components/HeaderFilter";
import Bg from "../../assets/images/backgrounds/bomboniere.png";

const filters: { label: string; filter: BomboniereItemType }[] = [
  { label: "Tudo", filter: null },
  { label: "Pipocas", filter: "pipocas" },
  { label: "Bebidas", filter: "bebidas" },
  { label: "Doces", filter: "doces" },
  { label: "Combos", filter: "combos" },
];

const Bomboniere = () => {
  const [filterType, setFilterType] = useState<Filter>(null);
  const { data: productList } = useBomboniere();
  console.log("product list", productList);

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
        {productList && (
          <CenteredEl className="grid grid-cols-1 md:grid-cols-3 tablet:grid-cols-4 gap-2">
            {productList
              .filter((product) => {
                return filterType === null
                  ? true
                  : product.categoria === filterType;
              })
              .map((product: BomboniereItem) => (
                <BomboniereCard key={product._id} product={product} />
              ))}
          </CenteredEl>
        )}
        {/* <OfertasPromocionais /> */}
      </Container>
    </>
  );
};

export default Bomboniere;
