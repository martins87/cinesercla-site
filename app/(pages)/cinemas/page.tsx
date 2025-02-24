"use client";

import Input from "@/app/components/Input";
import Typography from "@/app/components/Typography";
import Centered from "@/app/components/ui/CenteredElement";
import Container from "@/app/components/ui/Container";
import MagnifyingGlass from "../../assets/icons/magnifying-glass-white.png";
import CinemaBox from "@/app/components/Cinema/CinemaBox";
import { estados, cidades } from "@/app/constants/cep";
import HorizontalLine from "@/app/components/Footer/HorizontalLine";
import HeaderFilter from "../bomboniere/HeaderFilter";
import { useState } from "react";

export type CinemaFilter = "estado" | "cidade";

const Cinemas = () => {
  const [filter, setFilter] = useState<CinemaFilter>("estado");

  return (
    <Container className="mt-14 lg:mt-40">
      <Centered
        className="gap-y-6"
        items="start"
        justify="start"
        direction="col"
      >
        <Typography className="text-4xl text-black/90" weight="800">
          Encontre um cinema
        </Typography>
        <Input
          className="bg-[#A3A3A3] px-7 py-2 rounded-2xl"
          inputClassName="text-2xl font-bold font-[family-name:var(--font-proxima-nova)] placeholder:text-2xl placeholder:font-bold placeholder:font-[family-name:var(--font-proxima-nova)] px-5"
          placeholder="Procure por Cidade, Cinema ou Shopping"
          icon={MagnifyingGlass}
        />
      </Centered>
      <Centered className="mt-14" justify="between">
        <Typography className="text-4xl text-black/90" weight="800">
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
