"use client";

import { FC, useRef, useState } from "react";
import Slider from "react-slick";

import { useBannerStore } from "@/app/store/banner";
import CenteredEl from "../ui/CenteredElement";
import Arrow from "../CarouselArrow";
import HeroBanner from "./HeroBanner";
import HeroSkeleton from "./HeroSkeleton";

type HeroProps = {
  loading: boolean;
};

const Hero: FC<HeroProps> = ({ loading }) => {
  let sliderRef = useRef(null);
  const { bannerList } = useBannerStore();
  const [playing, setPlaying] = useState<boolean>(false);
  console.log("banner list", bannerList);

  // @ts-expect-error:next-line
  const next = () => sliderRef.slickNext();

  // @ts-expect-error:next-line
  const previous = () => sliderRef.slickPrev();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !playing,
    autoplaySpeed: 7000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <>
      {loading ? (
        <HeroSkeleton />
      ) : (
        <div className="relative mb-10">
          <Slider
            ref={(slider) => {
              // @ts-expect-error:next-line
              sliderRef = slider;
            }}
            {...settings}
          >
            {bannerList.map((banner) => (
              <HeroBanner
                key={banner._id}
                banner={banner}
                playing={playing}
                setPlaying={setPlaying}
              />
            ))}
          </Slider>
          <CenteredEl
            className="hidden sm:flex w-fit absolute bottom-[25%] right-[5%] sm:right-[2.5%] lg:right-[10%] xl:right-[12.5%] gap-x-1 z-20"
            justify="end"
          >
            <Arrow direction="left" onClick={previous} />
            <Arrow direction="right" onClick={next} />
          </CenteredEl>
        </div>
      )}
    </>
  );
};

export default Hero;
