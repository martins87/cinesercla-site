import { FC } from "react";
import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import { twMerge } from "tailwind-merge";

type AuditoriumProps = {
  number: string;
  time: string;
  small?: boolean;
};

const Auditorium: FC<AuditoriumProps> = ({ number, time, small }) => {
  return (
    <CenteredElement
      className={twMerge(
        "w-24 lg:w-32 p-3 lg:p-4 bg-white/45 rounded-xl transition-all duration-200 hover:scale-105 ease-in-out",
        small ? "h-fit items-center" : "h-28 lg:h-36 items-start"
      )}
      direction="col"
      justify="between"
    >
      {!small && (
        <Typography className="text-lg" weight="700">
          Sala {number}
        </Typography>
      )}
      <Typography className="text-2xl lg:text-4xl" weight="700">
        {time}
      </Typography>
    </CenteredElement>
  );
};

export default Auditorium;
