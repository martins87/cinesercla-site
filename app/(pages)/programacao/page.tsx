"use client";

import { useEffect, useState } from "react";

import { MovieSchedule } from "@/app/types/Movie";
import { Schedule } from "@/app/types/Schedule";
import { useSchedule } from "@/app/hooks/useSchedule";
import { useLocation } from "@/app/store/location";
import { getDateFormatted, groupScheduleByMovie } from "@/lib/utils";
import Container from "@/app/components/ui/Container";
import MovieScheduleCard from "@/app/components/Movie/MovieScheduleCard";
import CenteredElement from "@/app/components/ui/CenteredElement";
import Typography from "@/app/components/Typography";
import { useMovieStore } from "@/app/store/movie";
// import SkeletonElement from "@/app/components/SkeletonElement";

const Programacao = () => {
  const { fetchMovieList } = useMovieStore();
  const { idCinema } = useLocation();
  const { data: scheduleList } = useSchedule(idCinema, "");
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<MovieSchedule[]>([]);

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
      const exibicoes = scheduleList.filter(
        (schedule: Schedule) => schedule.idUnidade === idCinema
      );

      const groupedMovies = groupScheduleByMovie(exibicoes);
      setMovies(groupedMovies);
      console.log("grouped movies by schedule", groupedMovies);
    }
  }, [idCinema, scheduleList]);

  return (
    <Container className="mt-32">
      <CenteredElement className="gap-y-4" direction="col" items="start">
        <Typography
          className="text-3xl text-black dark:text-white"
          weight="800"
        >
          {`Guia de Bolso para ${getDateFormatted(new Date()).toLowerCase()}`}
        </Typography>
        {loading ? (
          // <SkeletonElement className="w-full h-[200px] rounded-xl" />
          <Typography
            className="text-xl text-black dark:text-white"
            weight="400"
          >
            Carregando programação...
          </Typography>
        ) : (
          movies.map((movieSchedule) => (
            <MovieScheduleCard
              key={movieSchedule.idFilme}
              movieSchedule={movieSchedule}
            />
          ))
        )}
      </CenteredElement>
    </Container>
  );
};

export default Programacao;
