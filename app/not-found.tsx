"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Container from "@/app/components/ui/Container";
import CenteredElement from "@/app/components/ui/CenteredElement";
import _404Img from "./assets/images/404.png";
import _404Projector from "./assets/images/404-projector.png";
import Typography from "./components/Typography";
import Button from "./components/ui/Button";

const NotFound = () => {
  const router = useRouter();

  const handleClick = () => router.push("/");

  return (
    <Container className="mt-32 lg:mt-40">
      <CenteredElement
        className="flex-col gap-y-16 md:flex-row"
        items="center"
        justify="between"
      >
        <CenteredElement
          className="gap-y-4 order-last md:order-first"
          items="start"
          direction="col"
        >
          <Image src={_404Img} alt="404 not found" />
          <Typography
            className="text-4xl text-black dark:text-white"
            weight="800"
          >
            Página não encontrada.
          </Typography>
          <Typography
            className="text-2xl text-black dark:text-white"
            weight="400"
          >
            Elementar, meu caro navegante...
          </Typography>
          <Typography
            className="-mt-4 text-2xl text-black dark:text-white"
            weight="400"
          >
            Essa página sumiu, mas a inicial está logo ali.
          </Typography>
          <Button label="IR PARA O INÍCIO" onClick={handleClick} />
        </CenteredElement>
        <Image src={_404Projector} alt="not found" />
      </CenteredElement>
    </Container>
  );
};

export default NotFound;
