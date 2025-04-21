"use client";

import { Dispatch, FC, SetStateAction, useEffect } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import close from "@/app/assets/icons/close.svg";

type TrailerVideoProps = {
  videoKey: string;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  banner?: boolean;
};

const TrailerVideo: FC<TrailerVideoProps> = ({
  videoKey,
  setPlaying,
  banner,
}) => {
  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPlaying(false);
      }
    };

    window.addEventListener("keydown", closeModal);

    return () => window.removeEventListener("keydown", closeModal);
  }, [setPlaying]);

  const handleClose = () => setPlaying(false);

  return (
    <div
      className={twMerge(
        "w-full flex items-center justify-center",
        banner
          ? "w-screen h-screen flex bg-black z-10"
          : "fixed inset-0 flex items-center justify-center backdrop-brightness-[10%] z-50"
      )}
    >
      <div className="absolute w-[90%] sm:w-[95%] lg:w-[80%] xl:w-[75%] h-[75vh] -mt-20 tablet:-mt-6">
        <Image
          className="hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out z-50 ml-auto"
          src={close}
          alt="close icon"
          onClick={handleClose}
        />
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
          className="absolute top-10 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerVideo;
