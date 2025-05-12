"use client";

import { FC, useState } from "react";

import { Schedule } from "@/app/types/Schedule";
import { AuditoriumSchedule as AS } from "@/app/types/AuditoriumSchedule";
import { filterValidSchedules, getAuditoriumSchedule } from "@/lib/utils";
import CenteredElement from "@/app/components/ui/CenteredElement";
import AuditoriumSchedule from "./AuditoriumSchedule";
import Typography from "../Typography";
import Calendar from "./Calendar";

type MovieScheduleProps = {
  movieSchedule: Schedule[];
};

const MovieSchedule: FC<MovieScheduleProps> = ({ movieSchedule }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const scheduleList: AS[] = getAuditoriumSchedule(movieSchedule);
  const validScheduleList = filterValidSchedules(scheduleList, selectedDate);

  return (
    <CenteredElement className="gap-y-2" direction="col" items="start">
      <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      <CenteredElement className="gap-y-6" justify="start" direction="col">
        {validScheduleList.length > 0 ? (
          validScheduleList.map((auditoriumSchedule, index: number) => (
            <AuditoriumSchedule
              key={index}
              auditoriumSchedule={auditoriumSchedule}
            />
          ))
        ) : (
          <Typography className="text-lg mr-auto" weight="400">
            Não há programação para essa cidade
          </Typography>
        )}
      </CenteredElement>
    </CenteredElement>
  );
};

export default MovieSchedule;
