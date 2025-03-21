import React, { FC } from "react";

import Typography from "../Typography";
import { Cinema } from "@/app/types/Cinema";
import CenteredElement from "../ui/CenteredElement";
import GoogleMap from "./GoogleMap";

type ShoppingMallDetailProps = {
  cinema: Cinema;
};

const ShoppingMallDetail: FC<ShoppingMallDetailProps> = ({ cinema }) => {
  return (
    <CenteredElement className="gap-x-20" justify="between">
      <CenteredElement
        className="w-full sm:w-1/2 mb-auto"
        direction="col"
        items="start"
        justify="start"
      >
        <Typography
          className="text-4xl text-black/90 dark:text-white"
          weight="800"
        >
          {cinema.cinema}
        </Typography>
        <Typography
          className="text-2xl text-black/90 dark:text-white"
          weight="400"
        >
          {cinema.address}
        </Typography>
        <Typography
          className="text-xl text-black/80 dark:text-white/50"
          weight="400"
        >
          Contato: {cinema.contact}
        </Typography>
        <Typography
          className="text-xl text-black/90 dark:text-white/50"
          weight="400"
        >
          Capacidade: {cinema.capacity}
        </Typography>
        <Typography
          className="text-xl text-black/90 dark:text-white/50"
          weight="400"
        >
          Inauguração: {cinema.opening}
        </Typography>
      </CenteredElement>
      <GoogleMap mapURL={cinema.mapURL} />
    </CenteredElement>
  );
};

export default ShoppingMallDetail;
