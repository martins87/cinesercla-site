"use client";

import { useState } from "react";

import Input from "@/app/components/Input";
import Typography from "@/app/components/Typography";
import Centered from "@/app/components/ui/CenteredElement";
import Container from "@/app/components/ui/Container";
import CinemaBox from "@/app/components/Cinema/CinemaBox";
import HorizontalLine from "@/app/components/Footer/HorizontalLine";
import HeaderFilter from "../../components/HeaderFilter";
import { estados, cidades } from "@/app/constants/cep";
import MagnifyingGlass from "../../assets/icons/magnifying-glass-white.png";

export type CinemaFilter = "estado" | "cidade";

const Cinemas = () => {
  const [filter, setFilter] = useState<CinemaFilter>("estado");

  return (
    <Container className="mt-32 lg:mt-40">
      <Centered
        className="gap-y-6"
        items="start"
        justify="start"
        direction="col"
      >
        <Typography
          className="text-2xl md:text-3xl tablet:text-4xl text-black/90 dark:text-white"
          weight="800"
        >
          Encontre um cinema
        </Typography>
        <Input
          placeholder="Procure por Cidade, Cinema ou Shopping"
          icon={MagnifyingGlass}
          big
        />
      </Centered>
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
          estados.map((estado) => <CinemaBox key={estado} cinema={estado} />)}
        {filter === "cidade" &&
          cidades.map((estado) => <CinemaBox key={estado} cinema={estado} />)}
      </Centered>
    </Container>
  );
};

export default Cinemas;
