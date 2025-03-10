import { FC } from "react";
import Image from "next/image";

import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
import Dot from "../Dot";
import PocketGuideMovieList from "./PocketGuideMovieList";
import Button from "../ui/Button";
import close from "@/app/assets/icons/close.svg";

const subtitleClass = "w-fit text-base tablet:text-lg text-black/65";

type PocketGuideProps = {
  closeFn: () => void;
};

const PocketGuide: FC<PocketGuideProps> = ({ closeFn }) => {
  return (
    <>
      <CenteredElement justify="between">
        <Typography
          className="max-w-[75%] md:w-auto text-2xl text-black/90 leading-7"
          weight="700"
        >
          Guia de Bolso para hoje, 26 de Setembro
        </Typography>
        <Image
          className="hover:cursor-pointer"
          src={close}
          alt="close icon"
          onClick={closeFn}
        />
      </CenteredElement>
      <CenteredElement justify="start">
        <Typography className={subtitleClass} weight="400">
          Shopping Norte
        </Typography>
        <Dot className={subtitleClass} />
        <Typography className={subtitleClass} weight="400">
          Belo Horizonte
        </Typography>
        <Dot className={subtitleClass} />
        <Typography className={subtitleClass} weight="400">
          Minas Gerais
        </Typography>
      </CenteredElement>
      <PocketGuideMovieList />
      <CenteredElement className="gap-x-2 justify-between md:justify-end">
        <Button className="w-full md:w-auto" label="FECHAR" onClick={closeFn} />
        <Button className="w-full md:w-auto" label="IMPRIMIR" />
      </CenteredElement>
    </>
  );
};

export default PocketGuide;
