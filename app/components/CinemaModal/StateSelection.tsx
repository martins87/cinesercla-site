"use client";

import React, { Dispatch, FC, SetStateAction } from "react";

import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import ComboBox from "../ui/ComboBox";

type StateSelectionProps = {
  estados: { value: string; label: string }[];
  estado: string;
  setEstado: Dispatch<SetStateAction<string>>;
};

const StateSelection: FC<StateSelectionProps> = ({
  estados,
  estado,
  setEstado,
}) => {
  return (
    <CenteredElement className="gap-y-4" direction="col" items="start">
      <Typography className="uppercase text-2xl text-black/90" weight="800">
        selecionar estado
      </Typography>
      <ComboBox
        value={estado}
        setValue={setEstado}
        list={estados}
        label="selecione um estado"
      />
    </CenteredElement>
  );
};

export default StateSelection;
