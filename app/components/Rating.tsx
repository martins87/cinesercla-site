import { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import cLivre from "@/app/assets/icons/classificacao-indicativa/Classificacao_livre.svg";
import c10 from "@/app/assets/icons/classificacao-indicativa/Classificacao_10.svg";
import c12 from "@/app/assets/icons/classificacao-indicativa/Classificacao_12.svg";
import c14 from "@/app/assets/icons/classificacao-indicativa/Classificacao_14.svg";
import c16 from "@/app/assets/icons/classificacao-indicativa/Classificacao_16.svg";
import c18 from "@/app/assets/icons/classificacao-indicativa/Classificacao_18.svg";
import cND from "@/app/assets/icons/classificacao-indicativa/Classificacao_n_definida.svg";

type RatingProps = {
  rating: string | undefined;
  absolute?: boolean;
};

const Rating: FC<RatingProps> = ({ rating, absolute }) => {
  const ratingIcon =
    rating === "L"
      ? cLivre
      : rating === "10"
      ? c10
      : rating === "12"
      ? c12
      : rating === "14"
      ? c14
      : rating === "16"
      ? c16
      : rating === "18"
      ? c18
      : cND;

  return (
    <div className={twMerge("scale-110", absolute && "absolute top-4 right-4")}>
      <Image src={ratingIcon} alt="" />
    </div>
  );
};

export default Rating;
