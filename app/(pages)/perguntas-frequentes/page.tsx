"use client";

import { useRouter } from "next/navigation";

import BgImageContainer from "@/app/components/ui/BgImageContainer";
import Container from "@/app/components/ui/Container";
import Input from "@/app/components/Input";
import Typography from "@/app/components/Typography";
import Centered from "@/app/components/ui/CenteredElement";
import FAQBox from "@/app/components/FAQ/FAQBox";
import Button from "@/app/components/ui/Button";
import FAQ from "@/app/components/FAQ";
import { topics } from "@/app/constants/faq";
import Bg from "../../assets/images/backgrounds/perguntas-frequentes.png";

const PerguntasFrequentes = () => {
  const router = useRouter();

  const handleClick = () => router.push("/contato");

  return (
    <>
      <BgImageContainer img={Bg} title="Perguntas Frequentes" />
      <Container className="h-fit bg-[#EAEAEA] mt-16">
        <Centered className="gap-y-10" direction="col">
          <Input placeholder="Procure por tópicos" big />
          <Typography className="text-2xl text-black/90 mr-auto" weight="400">
            Aqui estão as perguntas que mais recebemos:
          </Typography>
          <Centered className="grid grid-cols-1 md:grid-cols-3 tablet:grid-cols-4 gap-2">
            {topics.map((topic) => (
              <FAQBox key={topic} label={topic} />
            ))}
          </Centered>
          <Typography
            className="text-3xl text-black/90 mt-6 mr-auto"
            weight="800"
          >
            Principais dúvidas
          </Typography>
          <Typography
            className="text-2xl text-black/90 -mt-6 mr-auto"
            weight="400"
          >
            O que acontece depois dos créditos? Quem realmente deixou a rocha no
            lugar de Excalibur? Ainda não temos essas respostas mas sobre o
            Cinesercla, você encontra tudo aqui.
          </Typography>
          <FAQ />
          <Centered className="gap-y-4" direction="col">
            <Typography className="text-2xl text-black/90">
              Precisa de mais ajuda?
            </Typography>
            <Button label="ENTRE EM CONTATO" onClick={handleClick} primary />
          </Centered>
        </Centered>
      </Container>
    </>
  );
};

export default PerguntasFrequentes;
