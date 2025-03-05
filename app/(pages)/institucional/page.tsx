import BgImageContainer from "@/app/components/ui/BgImageContainer";
import GridPageInfo from "@/app/components/GridPageInfo";
import { institucionalInfo } from "../../constants/pageInfo";
import Bg from "../../assets/images/backgrounds/institucional.png";

const Institucional = () => {
  return (
    <>
      <BgImageContainer
        img={Bg}
        title="Institucional"
        subtitle="Saiba por que somos referência em cinemas no Brasil."
      />
      <GridPageInfo pageInfo={institucionalInfo} />
    </>
  );
};

export default Institucional;
