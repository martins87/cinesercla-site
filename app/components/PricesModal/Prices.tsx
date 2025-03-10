import { FC } from "react";
import Image from "next/image";

import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
import Dot from "../Dot";
import close from "@/app/assets/icons/close.svg";
import { Movie } from "@/app/types/Movie";
import PriceDetailList from "./PriceDetailList";

const subtitleClass = "w-fit text-base tablet:text-lg text-black/65";

type PricesProps = {
  closeFn: () => void;
  movie: Movie;
};

const Prices: FC<PricesProps> = ({ closeFn, movie }) => {
  return (
    <>
      <CenteredElement justify="between">
        <Typography
          className="max-w-[75%] md:w-auto text-2xl text-black/90 leading-7"
          weight="700"
        >
          Preços para hoje, 26 de Setembro
        </Typography>
        <Image
          className="hover:cursor-pointer"
          src={close}
          alt="close icon"
          onClick={closeFn}
        />
      </CenteredElement>
      <CenteredElement className="gap-y-4 overflow-y-scroll" direction="col">
        <CenteredElement className="mt-16 tablet:mt-40" justify="start">
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
        <CenteredElement className="gap-x-4">
          <CenteredElement className="w-fit">
            <Image
              className="w-32 rounded-xl"
              src={movie.card!}
              alt="movie card"
            />
          </CenteredElement>
          <CenteredElement direction="col" items="start">
            <Typography className="text-3xl text-black/90" weight="700">
              Deadpool & Wolverine
            </Typography>
            <Typography className="text-lg text-black/90" weight="400">
              Ação, Comédia
            </Typography>
            <Typography className="text-lg text-black/90" weight="400">
              2h 7min
            </Typography>
          </CenteredElement>
        </CenteredElement>
        <CenteredElement justify="start">
          <Typography className="w-fit text-lg text-black/65" weight="400">
            2D
          </Typography>
          <Dot className="text-lg text-black/65" />
          <Typography className="w-fit text-lg text-black/65" weight="400">
            Dublado
          </Typography>
          <Dot className="text-lg text-black/65" />
          <Typography className="w-fit text-lg text-black/65" weight="400">
            Sala 4
          </Typography>
        </CenteredElement>
        <PriceDetailList />
        <Typography className="text-lg text-black/75 leading-6" weight="400">
          * Os valores dos ingressos variam de acordo com a sala, tecnologia,
          dia e horário da sessão, unidade e pré-estreias. Taxa de serviço
          cobrada em compras online.
        </Typography>
      </CenteredElement>
    </>
  );
};

export default Prices;
