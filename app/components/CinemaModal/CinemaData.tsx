import React, { FC } from "react";
import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";

type CinemaDataProps = {
  title: string;
  address: string;
};

const CinemaData: FC<CinemaDataProps> = ({ title, address }) => {
  return (
    <CenteredElement className="gap-y-1" direction="col" items="start">
      <Typography className="text-lg" weight="700">
        {title}
      </Typography>
      <Typography className="text-base uppercase" weight="400">
        {address}
      </Typography>
    </CenteredElement>
  );
};

export default CinemaData;
