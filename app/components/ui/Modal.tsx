"use client";

import CenteredElement from "./CenteredElement";
import { Dispatch, FC, ReactNode, SetStateAction, useEffect } from "react";

type ModalProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({ setModalOpen, children }) => {
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
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/85 z-30">
      <CenteredElement
        className="w-screen md:w-[80vw] lg:w-[75vw] xl:w-[50vw] h-screen md:min-h-[65vh] md:max-h-[80vh] gap-y-4  p-6 md:rounded-2xl bg-white z-50"
        direction="col"
        justify="between"
      >
        {children}
      </CenteredElement>
    </div>
  );
};

export default Modal;
