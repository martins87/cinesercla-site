import BgImageContainer from "@/app/components/ui/BgImageContainer";

import BomboniereCard from "@/app/components/BomboniereCard";
import Container from "@/app/components/ui/Container";
import CenteredEl from "@/app/components/ui/CenteredElement";
import { bomboniereItems } from "../../constants/bomboniere";
import { BomboniereItem } from "@/app/types/BomboniereItem";
import Bg from "../../assets/images/backgrounds/bomboniere.png";

const Bomboniere = () => {
  return (
    <>
      <BgImageContainer img={Bg} title="Bomboniere" />
      <Container>
        <CenteredEl className="grid grid-cols-4 gap-2">
          {bomboniereItems.map((item: BomboniereItem) => (
            <BomboniereCard key={item.id} item={item} />
          ))}
        </CenteredEl>
      </Container>
    </>
  );
};

export default Bomboniere;
