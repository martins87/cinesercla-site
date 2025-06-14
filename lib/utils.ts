import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Estado } from "@/app/types/Estado";
import { Cidade } from "@/app/types/Cidade";
import { Cinema } from "@/app/types/Cinema";
import { Schedule } from "@/app/types/Schedule";
import { AuditoriumSchedule } from "@/app/types/AuditoriumSchedule";
import { cinemaData } from "@/app/constants/cinemas";
import { MovieSchedule } from "@/app/types/Movie";

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

export const getCidadeByCityId = (cidadeId: string): Cidade[] => {
  for (const estado of cinemaData) {
    for (const cidade of estado.cidades) {
      if (cidade.id === cidadeId) {
        return [cidade];
      }
    }
  }
  return [];
};

export const getMallsByCity = (cityId: string): Cinema[] => {
  for (const estado of cinemaData) {
    const cidade = estado.cidades.find((cidade) => cidade.id === cityId);
    if (cidade) {
      return cidade.cinemas;
    }
  }
  return [];
};

export const getMallsByState = (stateId: string): Cinema[] => {
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
};

export const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

export const getAuditoriumSchedule = (
  schedules: Schedule[]
): AuditoriumSchedule[] => {
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
};

export const getFullDate = (date: Date): string => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const inputDate = new Date(date);
  inputDate.setHours(0, 0, 0, 0);

  const isToday = today.getTime() === inputDate.getTime();

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const formatted = formatter.format(date);

  if (isToday) {
    return `Hoje, ${formatted.replace(/^.*?,\s*/, "")}`;
  }

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

export const getFormattedDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0"); // Months are 0-indexed
  const day = `${date.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const formatShortDate = (date: Date): string => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const inputDate = new Date(date);
  inputDate.setHours(0, 0, 0, 0);

  const isToday = today.getTime() === inputDate.getTime();

  if (isToday) {
    return "Hoje";
  }

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  // Example: "sexta-feira, 23 de mai."
  let formatted = formatter.format(inputDate);

  // Capitalize the first letter
  formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  // Remove "-feira" from weekdays like "sexta-feira" -> "Sexta"
  formatted = formatted.replace(/-feira/g, "");

  // Remove "de" to match your example format
  formatted = formatted.replace(/\sde\s/g, " ");

  return formatted;
};

export const getNext7Days = () => {
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
    day: "2-digit",
  });

  const days = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);

    const formatted = formatter.format(date);

    const [weekday, day] = formatted.replace(".,", "").toUpperCase().split(" ");

    days.push({
      weekDay: i === 0 ? "HOJE" : weekday,
      monthDay: day,
      date,
    });
  }

  return days;
};

export const filterValidSchedules = <T extends { dataFim: string }>(
  schedules: T[],
  date: Date
): T[] => {
  const formatDate = (d: Date) => d.toISOString().split("T")[0];
  const selected = formatDate(date);

  return schedules.filter((schedule) => {
    const dataFimDate = new Date(schedule.dataFim);
    dataFimDate.setDate(dataFimDate.getDate());
    const dataFimFormatted = formatDate(dataFimDate);
    return dataFimFormatted >= selected;
  });
};

export const getScheduleUrl = (
  baseUrl: string,
  date: Date,
  sala: string,
  horario: string
): string => {
  const dia = date.toLocaleDateString("pt-BR").replace(/\//g, "");

  const sessao = `SALA${sala}_${horario.replace(":", "")}`;

  return `${baseUrl}&dia=${dia}&sessao=${sessao}`;
};

export const groupScheduleByMovie = (schedule: Schedule[]): MovieSchedule[] => {
  if (schedule.length === 0) return [];

  let movieIndex = 0;
  let idFilme = schedule[0].idFilme;
  const movieScheduleList: MovieSchedule[] = [{ idFilme, scheduleList: [] }];

  for (let i = 0; i < schedule.length; i++) {
    if (schedule[i].idFilme === idFilme) {
      movieScheduleList[movieIndex].scheduleList.push(schedule[i]);
    } else {
      movieIndex++;
      idFilme = schedule[i].idFilme;
      movieScheduleList.push({ idFilme, scheduleList: [schedule[i]] });
    }
  }

  return movieScheduleList;
};

export const truncate = (text: string, max: number) =>
  text.length > max ? text.slice(0, max) + "..." : text;
