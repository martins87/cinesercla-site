"use client";

import { useRef } from "react";
import Slider from "react-slick";

import CenteredEl from "../ui/CenteredElement";
import ServiceCard from "./ServiceCard";

import Empresa from "../../assets/images/services/evento-empresa.png";
import ProjetoEscola from "../../assets/images/services/projeto.escola.png";
import AnuncieMarca from "../../assets/images/services/anuncie-sua-marca.png";
import Aniversario from "../../assets/images/services/aniversario.png";
import SectionHeader from "../SectionHeader/SectionHeader";

const imgData = [
  { label: "EVENTOS EMPRESARIAIS", img: Empresa },
  { label: "PROJETO ESCOLA", img: ProjetoEscola },
  { label: "ANUNCIE", img: AnuncieMarca },
  { label: "ANIVERSÁRIO", img: Aniversario },
];

const Services = () => {
  let sliderRef = useRef(null);

  const previous = () => sliderRef.slickPrev();

  const next = () => sliderRef.slickNext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <CenteredEl className="my-10" direction="col">
      <SectionHeader title="Nossos serviços" prevFn={previous} nextFn={next} />
      {/* <CenteredEl className="grid grid-cols-3 gap-x-2"> */}
      <Slider
        className="w-full"
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {imgData.map((imgData) => (
          <ServiceCard key={imgData.label} imgData={imgData} />
        ))}
      </Slider>
      {/* </CenteredEl> */}
    </CenteredEl>
  );
};

export default Services;
