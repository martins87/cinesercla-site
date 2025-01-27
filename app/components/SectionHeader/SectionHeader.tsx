import React, { FC } from "react";
import Typography from "../Typography";
import SectionArrow from "./SectionArrow";

type SectionHeaderProps = {
  title: string;
  prevFn: () => void;
  nextFn: () => void;
};

const SectionHeader: FC<SectionHeaderProps> = ({ title, prevFn, nextFn }) => {
  return (
    <div className="w-full flex items-center mb-4">
      <Typography className="flex flex-1 text-black text-3xl" weight="700">
        {title}
      </Typography>
      <div className="flex items-center justify-between gap-x-2">
        <SectionArrow direction="left" onClick={prevFn} />
        <SectionArrow direction="right" onClick={nextFn} />
      </div>
    </div>
  );
};

export default SectionHeader;
