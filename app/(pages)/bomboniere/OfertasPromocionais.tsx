import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";

import SectionHeader from "@/app/components/SectionHeader/SectionHeader";
import Oferta0 from "../../assets/images/pages/bomboniere/oferta-promocional-0.png";
import Oferta1 from "../../assets/images/pages/bomboniere/oferta-promocional-1.png";
import Oferta2 from "../../assets/images/pages/bomboniere/oferta-promocional-2.png";
import CenteredEl from "@/app/components/ui/CenteredElement";

const ofertasPromocionais = [Oferta0, Oferta1, Oferta2];

const OfertasPromocionais = () => {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  const previous = () => sliderRef.slickPrev();

  const next = () => sliderRef.slickNext();

  return (
    <CenteredEl className="mt-32 mb-16" direction="col">
      <SectionHeader
        title="Ofertas Promocionais"
        prevFn={previous}
        nextFn={next}
      />
      <Slider
        className="w-full"
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {ofertasPromocionais.map((oferta, index) => (
          <Image
            className="rounded-2xl"
            key={index}
            src={oferta}
            alt="oferta"
          />
        ))}
      </Slider>
    </CenteredEl>
  );
};

export default OfertasPromocionais;
