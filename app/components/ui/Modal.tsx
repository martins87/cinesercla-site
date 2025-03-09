"use client";

import Image from "next/image";

import Typography from "../Typography";
import CenteredElement from "./CenteredElement";
import close from "@/app/assets/icons/close.svg";
import Button from "./Button";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import Dot from "../Dot";
import PocketGuideMovieList from "../PocketGuide/PocketGuideMovieList";

type ModalProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const Modal: FC<ModalProps> = ({ setModalOpen }) => {
  const closeFn = () => setModalOpen(false);

  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", closeModal);

    return () => window.removeEventListener("keydown", closeModal);
  }, [setModalOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/65 z-30">
        <CenteredElement
          className="w-[50vw] min-h-[65vh] gap-y-4 max-h-[80vh] p-6 rounded-2xl bg-white z-50"
          direction="col"
          justify="between"
        >
          <CenteredElement justify="between">
            <Typography className="text-2xl text-black/65" weight="700">
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
            <Typography className="w-fit text-lg text-black/65" weight="400">
              Shopping Norte
            </Typography>
            <Dot />
            <Typography className="w-fit text-lg text-black/65" weight="400">
              Belo Horizonte
            </Typography>
            <Dot />
            <Typography className="w-fit text-lg text-black/65" weight="400">
              Minas Gerais
            </Typography>
          </CenteredElement>
          <PocketGuideMovieList />
          <CenteredElement className="gap-x-2" justify="end">
            <Button label="FECHAR" onClick={closeFn} />
            <Button label="IMPRIMIR" />
          </CenteredElement>
        </CenteredElement>
      </div>
    </>
  );
};

export default Modal;
