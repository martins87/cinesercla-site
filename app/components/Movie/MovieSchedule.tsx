import { FC } from "react";

import { Schedule } from "@/app/types/Schedule";
import { AuditoriumSchedule as AS } from "@/app/types/AuditoriumSchedule";
import { getAuditoriumSchedule } from "@/lib/utils";
import CenteredElement from "@/app/components/ui/CenteredElement";
import AuditoriumSchedule from "./AuditoriumSchedule";

type MovieScheduleProps = {
  movieSchedule: Schedule[];
};

const MovieSchedule: FC<MovieScheduleProps> = ({ movieSchedule }) => {
  const scheduleList: AS[] = getAuditoriumSchedule(movieSchedule);

  return (
    <CenteredElement className="gap-y-6" justify="start" direction="col">
      {scheduleList.map((auditoriumSchedule, index: number) => (
        <AuditoriumSchedule
          key={index}
          auditoriumSchedule={auditoriumSchedule}
        />
      ))}
    </CenteredElement>
  );
};

export default MovieSchedule;
