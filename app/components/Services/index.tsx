import CenteredEl from "../ui/CenteredElement";
import Typography from "../Typography";
import Arrow from "../Movies/Arrow";
import ServiceCard from "./ServiceCard";

import Empresa from "../../assets/images/services/evento-empresa.png";
import ProjetoEscola from "../../assets/images/services/projeto.escola.png";
import AnuncieMarca from "../../assets/images/services/anuncie-sua-marca.png";

const imgData = [
  { label: "EVENTOS EMPRESARIAIS", img: Empresa },
  { label: "PROJETO ESCOLA", img: ProjetoEscola },
  { label: "ANUNCIE", img: AnuncieMarca },
];

const Services = () => {
  return (
    <CenteredEl className="h-[60vh]" direction="col">
      <div className="w-full flex items-center mb-4">
        <Typography className="flex flex-1 text-black text-3xl" weight="700">
          Nossos serviços
        </Typography>
        <div className="flex items-center justify-between gap-x-2">
          <Arrow direction="left" />
          <Arrow direction="right" />
        </div>
      </div>
      <CenteredEl className="grid grid-cols-3 gap-x-2">
        {imgData.map((imgData) => (
          <ServiceCard key={imgData.label} imgData={imgData} />
        ))}
      </CenteredEl>
    </CenteredEl>
  );
};

export default Services;
