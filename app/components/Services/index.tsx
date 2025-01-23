import CenteredEl from "../ui/CenteredElement";
import ServiceCard from "./ServiceCard";

import Empresa from "../../assets/images/services/evento-empresa.png";
import ProjetoEscola from "../../assets/images/services/projeto.escola.png";
import AnuncieMarca from "../../assets/images/services/anuncie-sua-marca.png";
import SectionHeader from "../SectionHeader/SectionHeader";

const imgData = [
  { label: "EVENTOS EMPRESARIAIS", img: Empresa },
  { label: "PROJETO ESCOLA", img: ProjetoEscola },
  { label: "ANUNCIE", img: AnuncieMarca },
];

const Services = () => {
  return (
    <CenteredEl className="my-10" direction="col">
      <SectionHeader title="Nossos serviços" />
      <CenteredEl className="grid grid-cols-3 gap-x-2">
        {imgData.map((imgData) => (
          <ServiceCard key={imgData.label} imgData={imgData} />
        ))}
      </CenteredEl>
    </CenteredEl>
  );
};

export default Services;
