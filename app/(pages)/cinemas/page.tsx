"use client";

import { useState } from "react";

import { Cinema } from "@/app/types/Cinema";
import { Location } from "@/app/types/Location";
import { getMallsByCity, getMallsByState } from "@/lib/utils";
import Centered from "@/app/components/ui/CenteredElement";
import Container from "@/app/components/ui/Container";
import CenteredElement from "@/app/components/ui/CenteredElement";
import Typography from "@/app/components/Typography";
import CinemaBox from "@/app/components/Cinema/CinemaBox";
import HorizontalLine from "@/app/components/Footer/HorizontalLine";
import HeaderFilter from "@/app/components/HeaderFilter";
import { estados, cidades } from "@/app/constants/cep";
import CinemaSearch from "@/app/components/Cinema/CinemaSearch";
import CityList from "@/app/components/Cinema/CityList";

export type CinemaFilter = "estado" | "cidade";

const Cinemas = () => {
  const [filter, setFilter] = useState<CinemaFilter>("estado");
  const [location, setLocation] = useState<string>("");
  const [preposition, setPreposition] = useState<string>("");
  const [cinemaList, setCinemaList] = useState<Cinema[]>([]);

  const handleClick = (filterType: CinemaFilter, location: Location) => {
    setCinemaList(
      filterType === "estado"
        ? getMallsByState(location.id)
        : getMallsByCity(location.id)
    );
    setPreposition(location.preposition);
    setLocation(location.label);
  };

  return (
    <Container className="mt-32 lg:mt-40">
      {cinemaList.length === 0 ? (
        <CinemaSearch />
      ) : (
        <CenteredElement direction="col" items="start">
          <Typography
            className="text-2xl md:text-3xl tablet:text-4xl text-black/90 dark:text-white"
            weight="800"
          >
            {`Cinesercla ${preposition} ${location}`}
          </Typography>
          <CityList list={cinemaList} />
        </CenteredElement>
      )}
      <Centered className="flex-col md:flex-row mt-14 items-start justify-between gap-y-4">
        <Typography
          className="text-2xl md:text-3xl tablet:text-4xl text-black/90 dark:text-white"
          weight="800"
        >
          Todos os cinemas
        </Typography>
        <Centered className="w-fit gap-x-4">
          <HeaderFilter
            label="Estado"
            filter="estado"
            active={filter === "estado"}
            handleFilter={() => setFilter("estado")}
          />
          <HeaderFilter
            label="Cidade"
            filter="cidade"
            active={filter === "cidade"}
            handleFilter={() => setFilter("cidade")}
          />
        </Centered>
      </Centered>
      <HorizontalLine className="my-4" height="1px" />
      <Centered className="grid grid-cols-1 md:grid-cols-3 tablet:grid-cols-4 gap-2">
        {filter === "estado" &&
          estados.map((estado) => (
            <CinemaBox
              key={estado.id}
              cinema={estado.label}
              onClick={() => handleClick("estado", estado)}
            />
          ))}
        {filter === "cidade" &&
          cidades.map((cidade) => (
            <CinemaBox
              key={cidade.id}
              cinema={cidade.label}
              onClick={() => handleClick("cidade", cidade)}
            />
          ))}
      </Centered>
    </Container>
  );
};

export default Cinemas;
