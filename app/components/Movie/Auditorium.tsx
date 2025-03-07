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
      className="w-32 h-36 p-4 bg-white/45 rounded-xl"
      direction="col"
      items="start"
      justify="between"
    >
      <Typography className="text-lg" weight="700">
        Sala {number}
      </Typography>
      <Typography className="text-4xl" weight="700">
        {time}
      </Typography>
    </CenteredElement>
  );
};

export default Auditorium;
