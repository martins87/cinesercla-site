import { FC } from "react";
import Image from "next/image";

import { MovieSchedule } from "@/app/types/Movie";
import { AuditoriumSchedule as AS } from "@/app/types/AuditoriumSchedule";
import { filterValidSchedules, getAuditoriumSchedule } from "@/lib/utils";
import { useMovieStore } from "@/app/store/movie";
import CenteredElement from "@/app/components/ui/CenteredElement";
import Button from "@/app/components/ui/Button";
import Typography from "@/app/components/Typography";
import AuditoriumSchedule from "./AuditoriumSchedule";
import noPoster from "@/app/assets/images/no_poster1.png";

type MovieScheduleCardProps = {
  movieSchedule: MovieSchedule;
};

const MovieScheduleCard: FC<MovieScheduleCardProps> = ({ movieSchedule }) => {
  const { getMovieById } = useMovieStore();
  const movie = getMovieById(movieSchedule.idFilme);
  const scheduleList: AS[] = getAuditoriumSchedule(movieSchedule.scheduleList);
  const validScheduleList = filterValidSchedules(scheduleList, new Date());

  if (movie === undefined) return;

  console.log(`movie ${movieSchedule.idFilme}`, movie);
  const posterImg =
    movie && movie.poster_path
      ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
      : noPoster;

  return (
    <CenteredElement
      className="bg-[#37393A] rounded-xl p-4 gap-x-4"
      items="start"
      justify="start"
    >
      <CenteredElement className="w-full md:w-1/5 aspect-[2/3] relative">
        <Image className="rounded-lg" src={posterImg} fill alt="movie card" />
      </CenteredElement>
      {/* movie data column */}
      <CenteredElement direction="col">
        {/* title row */}
        <CenteredElement className="">
          {/* movie data inside column */}
          <CenteredElement
            className="mr-auto"
            items="start"
            justify="start"
            direction="col"
          >
            <Typography className="text-2xl" weight="700">
              {movie!.title}
            </Typography>
            <Typography className="text-lg" weight="400">
              {movie!.genres}
            </Typography>
          </CenteredElement>
          <Button label="PREÇOS" secondary />
        </CenteredElement>
        <CenteredElement className="gap-y-6" justify="start" direction="col">
          {validScheduleList.length > 0 ? (
            validScheduleList.map((auditoriumSchedule, index: number) => (
              <AuditoriumSchedule
                key={index}
                auditoriumSchedule={auditoriumSchedule}
                selectedDate={new Date()}
                small
              />
            ))
          ) : (
            <Typography className="text-lg mr-auto" weight="400">
              Não há programação para essa cidade
            </Typography>
          )}
        </CenteredElement>
      </CenteredElement>
    </CenteredElement>
  );
};

export default MovieScheduleCard;
