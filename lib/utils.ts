import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Estado } from "@/app/types/Estado";
import { Cidade } from "@/app/types/Cidade";
import { Cinema } from "@/app/types/Cinema";
import { Schedule } from "@/app/types/Schedule";
import { AuditoriumSchedule } from "@/app/types/AuditoriumSchedule";
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
      return cidadeData.cinemas.filter(
        (cinema: Cinema) => cinema.idCinema !== "x"
      );
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
  return `${hours}h ${mins}m`;
};

export function getAuditoriumSchedule(
  schedules: Schedule[]
): AuditoriumSchedule[] {
  return schedules.map((schedule) => {
    const horarios: string[] = [];

    for (let i = 0; i <= 7; i++) {
      const horarioKey = `horario${i}` as keyof Schedule;
      const horario = schedule[horarioKey];
      if (horario && horario !== "00:00:00") {
        horarios.push(horario.slice(0, 5));
      }
    }

    return {
      dataInicio: schedule.dataInicio,
      dataFim: schedule.dataFim,
      sala: schedule.sala,
      versao: schedule.versao,
      idioma: schedule.idioma,
      horarios,
      idERP: schedule.idERP,
      idFilme: schedule.idFilme,
      filmeUrl: schedule.filmeUrl,
    };
  });
}
