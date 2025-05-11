import { FC } from "react";

import { Schedule } from "@/app/types/Schedule";
import { AuditoriumSchedule as AS } from "@/app/types/AuditoriumSchedule";
import { filterValidSchedules, getAuditoriumSchedule } from "@/lib/utils";
import CenteredElement from "@/app/components/ui/CenteredElement";
import AuditoriumSchedule from "./AuditoriumSchedule";
import Typography from "../Typography";

type MovieScheduleProps = {
  movieSchedule: Schedule[];
};

const MovieSchedule: FC<MovieScheduleProps> = ({ movieSchedule }) => {
  const scheduleList: AS[] = getAuditoriumSchedule(movieSchedule);
  console.log("[MovieSchedule component] scheduleList", scheduleList);
  const validScheduleList = filterValidSchedules(scheduleList);

  return (
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
  );
};

export default MovieSchedule;
