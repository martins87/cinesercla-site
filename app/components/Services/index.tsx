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

  // @ts-expect-error:next-line
  const previous = () => sliderRef.slickPrev();

  // @ts-expect-error:next-line
  const next = () => sliderRef.slickNext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CenteredEl className="my-10" direction="col">
      <SectionHeader title="Nossos serviços" prevFn={previous} nextFn={next} />
      <Slider
        className="w-full"
        ref={(slider) => {
          // @ts-expect-error:next-line
          sliderRef = slider;
        }}
        {...settings}
      >
        {imgData.map((imgData) => (
          <div key={imgData.label} className="px-1">
            <ServiceCard imgData={imgData} />
          </div>
        ))}
      </Slider>
    </CenteredEl>
  );
};

export default Services;
