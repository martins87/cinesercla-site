"use client";

import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import CenteredElement from "../ui/CenteredElement";

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

  return (
    <div
      className={twMerge(
        banner
          ? "w-screen h-screen bg-black z-10"
          : "fixed inset-0 flex items-center justify-center backdrop-brightness-[10%] z-50"
      )}
    >
      <CenteredElement>
        <div className="absolute w-[80vw] h-[80vh] -mt-20 tablet:-mt-6">
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </CenteredElement>
    </div>
  );
};

export default TrailerVideo;
