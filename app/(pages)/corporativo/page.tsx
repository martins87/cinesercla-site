import BgImageContainer from "@/app/components/ui/BgImageContainer";
import GridPageInfo from "@/app/components/GridPageInfo";

import { corporativoInfo } from "../../constants/pageInfo";
import Bg from "../../assets/images/backgrounds/corporativo.png";

const Corporativo = () => {
  return (
    <>
      <BgImageContainer img={Bg} title="Corporativo" />
      <GridPageInfo pageInfo={corporativoInfo} />
    </>
  );
};

export default Corporativo;
