import React, { FC } from "react";
import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";

type PremiereCardProps = {
  releaseDate: string;
};

const PremiereCard: FC<PremiereCardProps> = ({ releaseDate }) => {
  return (
    <CenteredElement
      className="rounded-xl bg-[#3B3B3B] p-6 gap-y-4"
      items="start"
      direction="col"
    >
      <Typography className="text-2xl" weight="700">
        Previsão de Estreia: {releaseDate}
      </Typography>
      <div className="w-full h-[1px] bg-white/20" />
      <Typography className="text-lg" weight="400">
        As sessões ainda não começaram. Enquanto isso, veja o que já está em
        cartaz nesta unidade.
      </Typography>
    </CenteredElement>
  );
};

export default PremiereCard;
