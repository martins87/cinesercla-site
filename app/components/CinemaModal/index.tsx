"use client";

import { FC, useEffect, useState } from "react";

import { Estado } from "@/app/types/Estado";
import { Cidade } from "@/app/types/Cidade";
import { Cinema } from "@/app/types/Cinema";
import { cinemaData } from "@/app/constants/cinemas";
import { getCidadesByState, getCinemasByCity } from "@/lib/utils";
import CenteredElement from "../ui/CenteredElement";
import Button from "../ui/Button";
import CinemaModalHeader from "./CinemaModalHeader";
import StateSelection from "./StateSelection";
import CitySelection from "./CitySelection";
import PlaceSelected from "./PlaceSelected";
import CinemaSelection from "./CinemaSelection";

const INITIAL_LABEL = "Selecione um estado";

type CinemaModalProps = {
  closeFn: () => void;
};

enum Steps {
  Initial,
  StateSelected,
  CitySelected,
  CinemaSelected,
}

const CinemaModal: FC<CinemaModalProps> = ({ closeFn }) => {
  const [step, setStep] = useState<Steps>(Steps.Initial);
  const [estado, setEstado] = useState<string>(INITIAL_LABEL);
  const [cidade, setCidade] = useState<string>("");
  const [cinema, setCinema] = useState<string>("");
  const estadoList = cinemaData.map((estado: Estado) => {
    return { value: estado.id, label: estado.estado };
  });
  const [cidadeList, setCidadeList] = useState<Cidade[]>([]);
  const [cinemaList, setCinemaList] = useState<Cinema[]>([]);

  useEffect(() => {
    const cities = getCidadesByState(estado);
    if (cities.length > 0) setCidadeList(cities);
  }, [estado]);

  useEffect(() => {
    const cinemas = getCinemasByCity(cidade);
    if (cinemas.length > 0) setCinemaList(cinemas);
  }, [cidade]);

  useEffect(() => {
    if (step === Steps.CinemaSelected) closeFn();
  }, [step, closeFn]);

  return (
    <CenteredElement className="flex-1 justify-start gap-y-4" direction="col">
      <CinemaModalHeader closeFn={closeFn} />
      {(step === Steps.Initial || step === Steps.StateSelected) && (
        <StateSelection
          estados={estadoList}
          estado={estado}
          setEstado={setEstado}
        />
      )}
      {step === Steps.StateSelected && (
        <CitySelection
          list={cidadeList}
          cidade={cidade}
          setCidade={setCidade}
        />
      )}
      {step === Steps.CitySelected && (
        <>
          <PlaceSelected estado={estado} cidade={cidade} />
          <CinemaSelection
            list={cinemaList}
            cinema={cinema}
            setCinema={setCinema}
          />
        </>
      )}
      {step === Steps.Initial && estado !== INITIAL_LABEL ? (
        <Button
          className="w-full h-[80px] uppercase"
          label={`${estado} | CONFIRMAR`}
          onClick={() => setStep(Steps.StateSelected)}
        />
      ) : step === Steps.StateSelected && cidade !== "" ? (
        <Button
          className="w-full h-[80px] uppercase"
          label={`${cidade} | CONFIRMAR`}
          onClick={() => setStep(Steps.CitySelected)}
        />
      ) : step === Steps.CitySelected && cinema !== "" ? (
        <Button
          className="w-full h-[80px] uppercase"
          label={`${cinema} | CONFIRMAR`}
          onClick={() => setStep(Steps.CinemaSelected)}
        />
      ) : null}
    </CenteredElement>
  );
};

export default CinemaModal;
