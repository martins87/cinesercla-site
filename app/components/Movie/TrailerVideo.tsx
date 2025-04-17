"use client";

import { Dispatch, FC, SetStateAction, useEffect } from "react";
import CenteredElement from "../ui/CenteredElement";

type TrailerVideoProps = {
  videoKey: string;
  setPlaying: Dispatch<SetStateAction<boolean>>;
};

const TrailerVideo: FC<TrailerVideoProps> = ({ videoKey, setPlaying }) => {
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
    <CenteredElement className="w-screen h-screen bg-black z-10">
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
  );
};

export default TrailerVideo;
