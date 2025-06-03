"use client";

import { useEffect, useState } from "react";

import { MovieSchedule } from "@/app/types/Movie";
import { Schedule } from "@/app/types/Schedule";
import { useSchedule } from "@/app/hooks/useSchedule";
import { useLocation } from "@/app/store/location";
import {
  getFormattedDate,
  getFullDate,
  getNext7Days,
  groupScheduleByMovie,
} from "@/lib/utils";
import Container from "@/app/components/ui/Container";
import MovieScheduleCard from "@/app/components/Movie/MovieScheduleCard";
import CenteredElement from "@/app/components/ui/CenteredElement";
import Typography from "@/app/components/Typography";
import { useMovieStore } from "@/app/store/movie";

const Programacao = () => {
  const { fetchMovieList } = useMovieStore();
  const { idCinema } = useLocation();
  const { data: scheduleList } = useSchedule(idCinema, "");
  console.log("schedule list", scheduleList);
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<MovieSchedule[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const days = getNext7Days();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        await fetchMovieList();
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [fetchMovieList]);

  useEffect(() => {
    if (scheduleList) {
      const exibicoes = scheduleList
        .filter((schedule: Schedule) => schedule.idUnidade === idCinema)
        .filter(
          (schedule: Schedule) =>
            schedule.dataInicio <= getFormattedDate(selectedDate) &&
            schedule.dataFim >= getFormattedDate(selectedDate)
        );

      const groupedMovies = groupScheduleByMovie(exibicoes);
      setMovies(groupedMovies);
      console.log("grouped movies by schedule", groupedMovies);
    }
  }, [idCinema, scheduleList, selectedDate]);

  const handleSelectDate = (date: Date) => setSelectedDate(date);

  return (
    <Container className="mt-32 items-start">
      {loading ? (
        <Typography className="text-xl text-black dark:text-white" weight="400">
          Carregando programação...
        </Typography>
      ) : (
        <CenteredElement className="gap-y-4" direction="col" items="start">
          <Typography
            className="text-3xl text-black dark:text-white"
            weight="800"
          >
            {`Guia de Bolso para ${getFullDate(selectedDate).toLowerCase()}`}
          </Typography>
          <CenteredElement className="gap-x-2" justify="between">
            {days.map(({ weekDay, monthDay, date }) => (
              <Typography
                key={`${weekDay}-${monthDay}`}
                className="text-md mt-3 hover:cursor-pointer"
                weight="700"
                onClick={() => handleSelectDate(date)}
              >
                {getFullDate(date)}
              </Typography>
            ))}
          </CenteredElement>
          {movies.map((movieSchedule) => (
            <MovieScheduleCard
              key={movieSchedule.idFilme}
              movieSchedule={movieSchedule}
            />
          ))}
        </CenteredElement>
      )}
    </Container>
  );
};

export default Programacao;
