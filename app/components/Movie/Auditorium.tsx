import { FC } from "react";
import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";

type AuditoriumProps = {
  number: string;
  time: string;
};

const Auditorium: FC<AuditoriumProps> = ({ number, time }) => {
  return (
    <CenteredElement
      className="w-24 lg:w-32 h-28 lg:h-36 p-3 lg:p-4 bg-white/45 rounded-xl transition-all duration-200 hover:scale-105 ease-in-out"
      direction="col"
      items="start"
      justify="between"
    >
      <Typography className="text-lg" weight="700">
        Sala {number}
      </Typography>
      <Typography className="text-2xl lg:text-4xl" weight="700">
        {time}
      </Typography>
    </CenteredElement>
  );
};

export default Auditorium;
