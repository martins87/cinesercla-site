import Container from "@/app/components/ui/Container";
import BgImageContainer from "@/app/components/ui/BgImageContainer";
import InstitucionalInfo from "./InstitucionalInfo";

import Bg from "../../assets/images/backgrounds/institucional.png";
import { institucionalInfo } from "../../constants/institucional";

const Institucional = () => {
  return (
    <>
      <BgImageContainer
        img={Bg}
        title="Institucional"
        subtitle="Saiba por que somos referência em cinemas no Brasil."
      />
      <Container className="h-fit bg-[#EAEAEA] mt-10">
        {institucionalInfo.map((info, index) => (
          <InstitucionalInfo
            key={info.title}
            title={info.title}
            description={info.description}
            img={info.img}
            btnLabel={info.btnLabel}
            orderInverted={index === 1}
          />
        ))}
      </Container>
    </>
  );
};

export default Institucional;
