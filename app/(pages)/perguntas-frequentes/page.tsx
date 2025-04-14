"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { FAQCategory } from "@/app/types/FAQ";
import { useFaqStore } from "@/app/store/faq";
import BgImageContainer from "@/app/components/ui/BgImageContainer";
import Container from "@/app/components/ui/Container";
import Centered from "@/app/components/ui/CenteredElement";
import Input from "@/app/components/Input";
import Typography from "@/app/components/Typography";
import FAQBox from "@/app/components/FAQ/FAQBox";
import Button from "@/app/components/ui/Button";
import Accordion from "@/app/components/Accordion";
import { topics } from "@/app/constants/faq";
import Bg from "../../assets/images/backgrounds/perguntas-frequentes.png";
import close from "@/app/assets/icons/close.svg";
import { AccordionData } from "@/app/types/AccordionData";

const PerguntasFrequentes = () => {
  const router = useRouter();
  const { faqList, fetchFaqList } = useFaqStore();
  const [category, setCategory] = useState<FAQCategory | null>(null);
  const [list, setList] = useState<AccordionData[]>([]);

  useEffect(() => {
    const fetchFaq = async () => {
      // TODO treat database fetch error here
      await fetchFaqList();
    };

    fetchFaq();
  }, [fetchFaqList]);

  useEffect(() => {
    const arr = [];

    for (let i = 0; i < faqList.length; i++) {
      if (faqList[i].principalDuvida)
        arr.push({ title: faqList[i].pergunta, content: faqList[i].resposta });
    }

    setList(arr);
  }, [faqList]);

  useEffect(() => {
    const arr = [];

    for (let i = 0; i < faqList.length; i++) {
      if (faqList[i].categoria === category)
        arr.push({ title: faqList[i].pergunta, content: faqList[i].resposta });
    }

    setList(arr);
  }, [category, faqList]);

  const handleClick = () => router.push("/contato");

  const closeFn = () => setCategory(null);

  return (
    <>
      <BgImageContainer img={Bg} title="Perguntas Frequentes" />
      <Container className="h-fit bg-inherit mt-16">
        <Centered className="gap-y-10" direction="col">
          <Input
            placeholder="Procure por tópicos"
            big
            inputClassName="placeholder:text-white/70"
          />
          <Typography
            className="text-2xl text-black/90 dark:text-white mr-auto"
            weight="400"
          >
            Aqui estão as perguntas que mais recebemos:
          </Typography>
          <Centered className="grid grid-cols-1 md:grid-cols-3 tablet:grid-cols-4 gap-2">
            {topics.map((topic) => (
              <FAQBox
                key={topic.label}
                topic={topic}
                setCategory={setCategory}
              />
            ))}
          </Centered>
          {category === null ? (
            <>
              <Typography
                className="text-3xl text-black/90 dark:text-white mt-6 mr-auto"
                weight="800"
              >
                Principais dúvidas
              </Typography>
              <Typography
                className="text-2xl text-black/90 dark:text-white -my-6 mr-auto"
                weight="400"
              >
                O que acontece depois dos créditos? Quem realmente deixou a
                rocha no lugar de Excalibur? Ainda não temos essas respostas mas
                sobre o Cinesercla, você encontra tudo aqui.
              </Typography>
            </>
          ) : (
            <Centered className="mt-6 -mb-6" justify="between">
              <Typography
                className="text-3xl text-black/90 dark:text-white"
                weight="800"
              >
                {topics.filter((topic) => topic.category === category)[0].label}
              </Typography>
              <Image
                className="hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out"
                src={close}
                alt="close icon"
                onClick={closeFn}
              />
            </Centered>
          )}
          <Accordion list={list} />
          <Centered className="gap-y-4" direction="col">
            <Typography className="text-2xl text-black/90 dark:text-white">
              Precisa de mais ajuda?
            </Typography>
            <Button label="ENTRE EM CONTATO" onClick={handleClick} />
          </Centered>
        </Centered>
      </Container>
    </>
  );
};

export default PerguntasFrequentes;
