import { FC } from "react";
import Link from "next/link";

import { AuditoriumSchedule as AS } from "@/app/types/AuditoriumSchedule";
import { getScheduleUrl } from "@/lib/utils";
import CenteredElement from "@/app/components/ui/CenteredElement";
import Typography from "@/app/components/Typography";
import Auditorium from "./Auditorium";

type AuditoriumScheduleProps = {
  auditoriumSchedule: AS;
  selectedDate: Date;
};

const AuditoriumSchedule: FC<AuditoriumScheduleProps> = ({
  auditoriumSchedule,
  selectedDate,
}) => {
  return (
    <CenteredElement direction="col" items="start" className="gap-y-2">
      <Typography className="text-base text-white/65" weight="400">
        {`${auditoriumSchedule.versao} ${auditoriumSchedule.idioma}`}
      </Typography>
      <CenteredElement className="gap-x-2" justify="start">
        {auditoriumSchedule.horarios.map((horario, index: number) => (
          <Link
            key={index}
            href={getScheduleUrl(
              auditoriumSchedule.filmeUrl,
              selectedDate,
              auditoriumSchedule.sala,
              horario
            )}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Auditorium number={auditoriumSchedule.sala} time={horario} />
          </Link>
        ))}
      </CenteredElement>
    </CenteredElement>
  );
};

export default AuditoriumSchedule;
