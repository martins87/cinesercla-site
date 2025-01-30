import BgImageContainer from "@/app/components/ui/BgImageContainer";
import GridPageInfo from "@/app/components/GridPageInfo";

import { promocoesInfo } from "../../constants/pageInfo";
import Bg from "../../assets/images/backgrounds/promocoes.png";

const Promocoes = () => {
  return (
    <>
      <BgImageContainer img={Bg} title="Promoções" />
      <GridPageInfo pageInfo={promocoesInfo} />
    </>
  );
};

export default Promocoes;
