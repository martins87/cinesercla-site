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
        "bg-white/45 rounded-xl transition-all duration-200 hover:scale-105 ease-in-out",
        small
          ? "w-20 lg:w-28 p-2 lg:p-3 h-fit items-center"
          : "w-24 lg:w-32 p-3 lg:p-4 h-28 lg:h-36 items-start"
      )}
      direction="col"
      justify="between"
    >
      {!small && (
        <Typography className="text-lg" weight="700">
          Sala {number}
        </Typography>
      )}
      <Typography
        className={twMerge(
          small ? "text-xl lg:text-2xl" : "text-2xl lg:text-4xl"
        )}
        weight="700"
      >
        {time}
      </Typography>
    </CenteredElement>
  );
};

export default Auditorium;
