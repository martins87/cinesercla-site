"use client";

import React, { Dispatch, FC, SetStateAction } from "react";

import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import RadioBox from "../ui/RadioBox";
import { Cidade } from "@/app/types/Cidade";

type CitySelectionProps = {
  list: Cidade[];
  cidade: string;
  setCidade: Dispatch<SetStateAction<string>>;
};

const CitySelection: FC<CitySelectionProps> = ({ list, cidade, setCidade }) => {
  return (
    <CenteredElement className="gap-y-4" direction="col" items="start">
      <Typography className="uppercase text-2xl text-black/90" weight="800">
        selecionar cidade
      </Typography>
      <CenteredElement direction="col" className="gap-y-2">
        {list.map((c) => (
          <RadioBox
            key={c.id}
            label={c.cidade}
            selected={cidade}
            setSelected={setCidade}
          />
        ))}
      </CenteredElement>
    </CenteredElement>
  );
};

export default CitySelection;
