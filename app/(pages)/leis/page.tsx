import BgImageContainer from "@/app/components/ui/BgImageContainer";
import Container from "@/app/components/ui/Container";
import Centered from "@/app/components/ui/CenteredElement";
import Typography from "@/app/components/Typography";
import Button from "@/app/components/ui/Button";
import Accordion from "@/app/components/Accordion";
import { leis } from "../../constants/leis";
import {
  AlimentosNaoSimilares,
  ClassificacaoIndicativa,
  CriancasAte2Anos,
  LeiDaMeiaEntrada,
} from "./AccordionContent";
import Bg from "../../assets/images/backgrounds/leis.png";

const Leis = () => {
  leis[0].content = <ClassificacaoIndicativa />;
  leis[1].content = <CriancasAte2Anos />;
  leis[2].content = <LeiDaMeiaEntrada />;
  leis[3].content = <AlimentosNaoSimilares />;

  return (
    <>
      <BgImageContainer img={Bg} title="Leis" />
      <Container className="h-fit bg-[#EAEAEA] mt-16">
        <Accordion list={leis} />
        <Centered className="gap-y-4 mt-16" direction="col">
          <Typography className="text-2xl text-black/90">
            Precisa de mais ajuda?
          </Typography>
          <Button label="ENTRE EM CONTATO" primary />
        </Centered>
      </Container>
    </>
  );
};

export default Leis;
