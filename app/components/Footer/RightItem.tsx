"use client";

import { ChangeEvent, useState } from "react";

import Typography from "../Typography";
import CenteredEl from "../ui/CenteredElement";
import Captcha from "../Capcha";

const RightItem = () => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <CenteredEl
      className="h-full gap-y-6"
      direction="col"
      items="start"
      justify="start"
    >
      <Typography
        className="text-lg leading-[22px] tracking-wide text-black "
        weight="800"
      >
        Newsletter
      </Typography>
      <CenteredEl className="gap-y-4" direction="col">
        <Typography
          className="font-normal text-base leading-6 text-black/70 mr-auto"
          weight="400"
        >
          Receba a Programação Semanal
        </Typography>
        <CenteredEl className="gap-x-2">
          <CenteredEl
            className="px-4 gap-x-0 gap-y-1 rounded-xl bg-white"
            justify="start"
          >
            <input
              className="w-full px-2 py-4 outline-none text-base text-black bg-inherit placeholder:text-black/50"
              type="text"
              value={value}
              onChange={handleInputChange}
              placeholder="Insira seu email"
            />
          </CenteredEl>
          <CenteredEl className="w-fit px-8 py-4 rounded-2xl bg-[#980038]">
            <Typography className="uppercase" font="gellix">
              Enviar
            </Typography>
          </CenteredEl>
        </CenteredEl>
        <Typography
          className="font-normal text-xs leading-5 text-black/70 mr-auto"
          weight="400"
        >
          Ao se inscrever, você concorda com nossos Termos de Uso e dá
          consentimento para receber atualizações da nossa empresa.
        </Typography>
        <Captcha />
      </CenteredEl>
    </CenteredEl>
  );
};

export default RightItem;
