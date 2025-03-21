import React, { FC } from "react";
import CenteredElement from "../ui/CenteredElement";
import { Cinema } from "@/app/types/Cinema";
import ShoppingMallDetail from "./ShoppingMallDetail";

type CityListProps = {
  list: Cinema[];
};

const CityList: FC<CityListProps> = ({ list }) => {
  return (
    <CenteredElement
      className="gap-y-20"
      items="start"
      justify="start"
      direction="col"
    >
      {list.map((cinema) => (
        <ShoppingMallDetail key={cinema.id} cinema={cinema} />
      ))}
    </CenteredElement>
  );
};

export default CityList;
