"use client";

import React, { Dispatch, FC, SetStateAction } from "react";

import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import RadioBox from "../ui/RadioBox";
import { Cinema } from "@/app/types/Cinema";

type CinemaSelectionProps = {
  list: Cinema[];
  cinema: string;
  setCinema: Dispatch<SetStateAction<string>>;
};

const CinemaSelection: FC<CinemaSelectionProps> = ({
  list,
  cinema,
  setCinema,
}) => {
  return (
    <CenteredElement className="gap-y-4" direction="col" items="start">
      <Typography className="uppercase text-2xl text-black/90" weight="800">
        selecionar o melhor cinema
      </Typography>
      <CenteredElement direction="col" className="gap-y-2">
        {list.map((c) => (
          <RadioBox
            key={c.id}
            label={c.cinema}
            selected={cinema}
            setSelected={setCinema}
          />
        ))}
      </CenteredElement>
    </CenteredElement>
  );
};

export default CinemaSelection;
