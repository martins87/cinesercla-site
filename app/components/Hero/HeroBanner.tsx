"use client";

import { Dispatch, FC, SetStateAction } from "react";

import { Banner } from "@/app/types/banner";
import { useMovieStore } from "@/app/store/movie";
import GradientOverlay from "@/app/components/GradientOverlay";
import HeroBannerBgImage from "./HeroBannerBgImage";
import HeroMovieDetails from "./HeroMovieDetails";
import CenteredElement from "../ui/CenteredElement";
import TrailerVideo from "../Movie/TrailerVideo";

type HeroBannerProps = {
  banner: Banner;
  playing: boolean;
  setPlaying: Dispatch<SetStateAction<boolean>>;
};

const HeroBanner: FC<HeroBannerProps> = ({ banner, playing, setPlaying }) => {
  const { getMovieById } = useMovieStore();
  const idFilme = banner.idFilme;
  const movie = getMovieById(idFilme);

  const movieTrailer = movie && movie.trailers && movie.trailers.length > 0;

  return (
    <div className="relative h-screen">
      {movieTrailer && playing ? (
        <CenteredElement className="relative">
          <TrailerVideo
            videoKey={movie.trailers![0].key!}
            setPlaying={setPlaying}
            banner
          />
          <GradientOverlay hero />
        </CenteredElement>
      ) : (
        <>
          <HeroBannerBgImage imgFileId={banner.images[0].fileId} />
          <GradientOverlay hero />
          <HeroMovieDetails
            movie={movie!}
            movieTrailer={movieTrailer}
            setPlayingFn={setPlaying}
          />
        </>
      )}
    </div>
  );
};

export default HeroBanner;
