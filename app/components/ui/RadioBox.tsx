"use client";

import { Dispatch, FC, SetStateAction } from "react";

import Typography from "../Typography";
import CenteredElement from "./CenteredElement";

type RadioBoxProps = {
  label: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const RadioBox: FC<RadioBoxProps> = ({ label, selected, setSelected }) => {
  const handleClick = () => setSelected(label);

  return (
    <CenteredElement
      className="h-20 px-6 py-4 hover:cursor-pointer bg-[#A3A3A3] hover:bg-[#A3A3A3]/90 rounded-xl"
      onClick={handleClick}
      items="center"
      justify="between"
    >
      <Typography className="text-xl uppercase" weight="700">
        {label}
      </Typography>
      {label !== selected ? (
        <div className="w-4 aspect-square border-2 border-white rounded-full mr-2" />
      ) : (
        <CenteredElement className="w-fit p-2 bg-[#980038]/25 rounded-full">
          <div className="w-4 aspect-square bg-[#980038] rounded-full" />
        </CenteredElement>
      )}
    </CenteredElement>
  );
};

export default RadioBox;
