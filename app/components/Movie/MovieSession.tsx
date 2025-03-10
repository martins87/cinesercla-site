"use client";

import { FC, useState } from "react";
import Image from "next/image";

import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import { Movie } from "@/app/types/Movie";
import Button from "../ui/Button";
import arrow_down from "@/app/assets/icons/arrow-down-red.svg";
import Auditorium from "./Auditorium";
import Modal from "../ui/Modal";
import PocketGuide from "../PocketGuide/PocketGuide";

type MovieSessionProps = {
  movie: Movie;
};

const MovieSession: FC<MovieSessionProps> = ({ movie }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  return (
    <>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <PocketGuide closeFn={closeModal} />
        </Modal>
      )}
      <CenteredElement
        className="flex-col md:flex-row gap-x-4 gap-y-4 p-4 bg-[#3B3B3B] rounded-2xl"
        items="start"
      >
        <CenteredElement className="w-full md:w-2/5 h-auto">
          <Image
            className="h-full rounded-xl"
            src={movie.card!}
            alt="movie card"
          />
        </CenteredElement>
        <CenteredElement className="gap-y-4" direction="col" items="start">
          <CenteredElement
            className="p-4 border-[1.5px] border-[#980038] rounded-xl"
            justify="between"
          >
            <CenteredElement className="w-auto gap-x-2" justify="start">
              <CenteredElement className="w-auto">
                <Typography className="hidden sm:flex">
                  Exibindo&nbsp;
                </Typography>
                <Typography className="w-full">Sessões Para:</Typography>
              </CenteredElement>
              <CenteredElement className="w-auto">
                <Typography className="text-xl md:text-2xl" weight="800">
                  SHOPPING NORTE
                </Typography>
              </CenteredElement>
              <CenteredElement className="w-fit">
                <Image src={arrow_down} alt="arrow down icon" />
              </CenteredElement>
            </CenteredElement>
            <CenteredElement
              className="w-fit hidden tablet:flex gap-x-2"
              justify="end"
            >
              <Button
                className="rounded-lg"
                label="GUIA DE BOLSO"
                onClick={openModal}
              />
              <Button className="rounded-lg" label="PREÇOS" secondary />
            </CenteredElement>
          </CenteredElement>
          <CenteredElement
            className="flex tablet:hidden gap-x-2"
            justify="start"
          >
            <Button
              className="rounded-lg"
              label="GUIA DE BOLSO"
              onClick={openModal}
            />
            <Button className="rounded-lg" label="PREÇOS" secondary />
          </CenteredElement>
          <Typography className="">Calendar</Typography>
          <Typography className="">Hoje, 26 de Setembro</Typography>
          <Typography className="text-base text-white/65" weight="400">
            2D Dublado
          </Typography>
          <CenteredElement className="gap-x-2" justify="start">
            <Auditorium number="2" time="20:20" />
            <Auditorium number="4" time="15:20" />
          </CenteredElement>
          <Typography className="text-sm text-white/65" weight="400">
            A Rede Cinesercla reserva o direito de alterar a programação sem
            prévio aviso.
          </Typography>
        </CenteredElement>
      </CenteredElement>
    </>
  );
};

export default MovieSession;
