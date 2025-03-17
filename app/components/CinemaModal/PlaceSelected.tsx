import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import { FC } from "react";

type PlaceSelectedProps = {
  estado: string;
  cidade: string;
};

const PlaceSelected: FC<PlaceSelectedProps> = ({ estado, cidade }) => {
  return (
    <CenteredElement className="gap-y-4" direction="col" items="start">
      <Typography
        className="uppercase text-2xl text-black/90 dark:text-white"
        weight="800"
      >
        local escolhido
      </Typography>
      <CenteredElement
        className="h-20 px-6 py-4 bg-[#A3A3A3] rounded-xl"
        justify="start"
      >
        <Typography className="text-xl uppercase" weight="700">
          {cidade} | {estado}
        </Typography>
      </CenteredElement>
    </CenteredElement>
  );
};

export default PlaceSelected;
