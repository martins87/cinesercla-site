"use client";

import { useRef } from "react";
import Slider from "react-slick";

import SectionHeader from "../SectionHeader/SectionHeader";
import CenteredEl from "../ui/CenteredElement";

import Promotion0 from "../../assets/images/promotions/promotion-0.png";
import Promotion1 from "../../assets/images/promotions/promotion-1.png";
import Promotion2 from "../../assets/images/promotions/promotion-2.png";
import Promotion3 from "../../assets/images/promotions/promotion-3.png";
import Promotion4 from "../../assets/images/promotions/promotion-4.png";
import Promotion5 from "../../assets/images/promotions/promotion-5.png";
import PromotionCard from "./PromotionCard";

const imgData = [
  Promotion0,
  Promotion1,
  Promotion2,
  Promotion3,
  Promotion4,
  Promotion5,
];

const Promotions = () => {
  let sliderRef = useRef(null);

  const previous = () => sliderRef.slickPrev();

  const next = () => sliderRef.slickNext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    // arrows: true,
    pauseOnHover: false,
  };

  return (
    <CenteredEl className="my-10" direction="col">
      <SectionHeader title="Promoções" prevFn={previous} nextFn={next} />

      <Slider
        className="w-full"
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {imgData.map((img, index) => (
          <div key={index} className="px-1">
            <PromotionCard img={img} />
          </div>
        ))}
      </Slider>
    </CenteredEl>
  );
};

export default Promotions;
