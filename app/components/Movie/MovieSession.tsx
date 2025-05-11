"use client";

import { FC, useState } from "react";
import Image from "next/image";

import { TMDBMovie } from "@/app/types/Movie";
import { useSchedule } from "@/app/hooks/useSchedule";
import CenteredElement from "@/app/components/ui/CenteredElement";
import Typography from "@/app/components/Typography";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/ui/Modal";
import PocketGuide from "@/app/components/PocketGuideModal/PocketGuide";
import Prices from "@/app/components/PricesModal/Prices";
import MovieSchedule from "./MovieSchedule";
import arrow_down from "@/app/assets/icons/arrow-down-red.svg";
import Calendar from "./Calendar";
import CinemaModal from "../CinemaModal";
import { useLocation } from "@/app/store/location";

type MovieSessionProps = {
  movie: TMDBMovie;
};

const MovieSession: FC<MovieSessionProps> = ({ movie }) => {
  // @ts-expect-error:next-line
  const { city, idCinema } = useLocation();
  const { data: movieSchedule } = useSchedule(movie.idFilme, idCinema);
  const [pocketGuideModalOpen, setPocketGuideModalOpen] =
    useState<boolean>(false);
  const [pricesModalOpen, setPricesModalOpen] = useState<boolean>(false);
  const [cinemaModalOpen, setCinemaModalOpen] = useState<boolean>(false);

  const openPocketGuideModal = () => setPocketGuideModalOpen(true);

  const closePocketGuideModal = () => setPocketGuideModalOpen(false);

  const openPricesModal = () => setPricesModalOpen(true);

  const closePricesModal = () => setPricesModalOpen(false);

  const openCinemaModal = () => setCinemaModalOpen(true);

  const closeCinemaModal = () => setCinemaModalOpen(false);

  return (
    <>
      {pocketGuideModalOpen && (
        <Modal setModalOpen={setPocketGuideModalOpen}>
          <PocketGuide closeFn={closePocketGuideModal} />
        </Modal>
      )}
      {pricesModalOpen && (
        <Modal setModalOpen={setPricesModalOpen}>
          <Prices movie={movie} closeFn={closePricesModal} />
        </Modal>
      )}
      {cinemaModalOpen && (
        <Modal setModalOpen={setCinemaModalOpen}>
          <CinemaModal closeFn={closeCinemaModal} />
        </Modal>
      )}
      <CenteredElement
        className="flex-col md:flex-row gap-x-4 gap-y-4 p-4 bg-[#3B3B3B] rounded-2xl"
        items="start"
      >
        <CenteredElement className="w-full md:w-2/5 aspect-[2/3] relative">
          <Image
            className="rounded-xl"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            fill
            alt="movie card"
          />
        </CenteredElement>
        <CenteredElement
          className="gap-y-4"
          direction="col"
          items="start"
          justify="between"
        >
          <CenteredElement
            className="p-4 border-[1.5px] border-[#980038] rounded-xl"
            justify="between"
          >
            <CenteredElement className="w-auto gap-x-4" justify="start">
              <CenteredElement className="w-auto">
                <Typography className="hidden sm:flex">
                  Exibindo&nbsp;
                </Typography>
                <Typography className="w-full">Sessões Para:</Typography>
              </CenteredElement>
              <div
                className="flex gap-x-3 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
                onClick={openCinemaModal}
              >
                <CenteredElement className="w-auto">
                  <Typography className="text-xl md:text-2xl" weight="800">
                    {city}
                  </Typography>
                </CenteredElement>
                <CenteredElement className="w-fit">
                  <Image src={arrow_down} alt="arrow down icon" />
                </CenteredElement>
              </div>
            </CenteredElement>
            <CenteredElement
              className="w-fit hidden tablet:flex gap-x-2"
              justify="end"
            >
              <Button
                className="rounded-lg"
                label="GUIA DE BOLSO"
                onClick={openPocketGuideModal}
              />
              <Button
                className="rounded-lg"
                label="PREÇOS"
                onClick={openPricesModal}
                secondary
              />
            </CenteredElement>
          </CenteredElement>
          <CenteredElement
            className="flex tablet:hidden gap-x-2"
            justify="start"
          >
            <Button
              className="rounded-lg"
              label="GUIA DE BOLSO"
              onClick={openPocketGuideModal}
            />
            <Button
              className="rounded-lg"
              label="PREÇOS"
              onClick={openPricesModal}
              secondary
            />
          </CenteredElement>
          <Calendar />

          {movieSchedule && <MovieSchedule movieSchedule={movieSchedule} />}
          <Typography className="text-sm h-full text-white/65" weight="400">
            A Rede Cinesercla reserva o direito de alterar a programação sem
            prévio aviso.
          </Typography>
        </CenteredElement>
      </CenteredElement>
    </>
  );
};

export default MovieSession;
