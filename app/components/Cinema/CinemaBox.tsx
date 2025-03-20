import { FC } from "react";
import Typography from "../Typography";
import Centered from "../ui/CenteredElement";

type CinemaBoxProps = {
  cinema: string;
  onClick: () => void;
};

const CinemaBox: FC<CinemaBoxProps> = ({ cinema, onClick }) => {
  return (
    <Centered
      className="bg-[#980038] hover:cursor-pointer hover:bg-[#980038]/80 transition-all ease-in-out duration-300 rounded-2xl py-5"
      onClick={onClick}
    >
      <Typography className="text-2xl" weight="700">
        {cinema}
      </Typography>
    </Centered>
  );
};

export default CinemaBox;
