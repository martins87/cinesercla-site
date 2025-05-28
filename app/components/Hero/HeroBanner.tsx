import { FC } from "react";

import { Banner } from "@/app/types/banner";
import { useMovieStore } from "@/app/store/movie";
import GradientOverlay from "@/app/components/GradientOverlay";
import HeroBannerBgImage from "./HeroBannerBgImage";
import HeroMovieDetails from "./HeroMovieDetails";

type HeroBannerProps = {
  banner: Banner;
};

const HeroBanner: FC<HeroBannerProps> = ({ banner }) => {
  const { getMovieById } = useMovieStore();
  const idFilme = banner.idFilme;
  const movie = getMovieById(idFilme);

  return (
    <div className="relative h-screen">
      <HeroBannerBgImage imgFileId={banner.images[0].fileId} />
      <GradientOverlay hero />
      <HeroMovieDetails movie={movie!} />
    </div>
  );
};

export default HeroBanner;
