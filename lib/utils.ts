import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Estado } from "@/app/types/Estado";
import { Cidade } from "@/app/types/Cidade";
import { Cinema } from "@/app/types/Cinema";
import { cinemaData } from "@/app/constants/cinemas";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCidadesByState = (estado: string) => {
  const estadoData = cinemaData.find((item: Estado) => item.estado === estado);
  return estadoData ? estadoData.cidades : [];
};

export const getCidadesByStateId = (estadoId: string) => {
  const estadoData = cinemaData.find((item: Estado) => item.id === estadoId);
  return estadoData ? estadoData.cidades : [];
};

export const getCinemasByCity = (cidade: string): Cinema[] => {
  for (const estado of cinemaData) {
    const cidadeData = estado.cidades.find((c: Cidade) => c.cidade === cidade);
    if (cidadeData) {
      return cidadeData.cinemas.map((cinema: Cinema) => cinema);
    }
  }
  return [];
};

export function getCidadeByCityId(cidadeId: string): Cidade[] {
  for (const estado of cinemaData) {
    for (const cidade of estado.cidades) {
      if (cidade.id === cidadeId) {
        return [cidade];
      }
    }
  }
  return [];
}

export function getMallsByCity(cityId: string): Cinema[] {
  for (const estado of cinemaData) {
    const cidade = estado.cidades.find((cidade) => cidade.id === cityId);
    if (cidade) {
      return cidade.cinemas;
    }
  }
  return [];
}

export function getMallsByState(stateId: string): Cinema[] {
  const cinemasArr = [];
  for (const estado of cinemaData) {
    if (estado.id === stateId) {
      for (const cidade of estado.cidades) {
        for (const cinema of cidade.cinemas) {
          cinemasArr.push(cinema);
        }
      }
    }
  }
  return cinemasArr;
}

export const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h${mins}m`;
};
