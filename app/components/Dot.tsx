import CenteredElement from "./ui/CenteredElement";
import Typography from "./Typography";
import { FC } from "react";

type DotProps = {
  className: string;
};

const Dot: FC<DotProps> = ({ className }) => {
  return (
    <CenteredElement className="w-fit mx-2">
      <Typography className={className}>&bull;</Typography>
    </CenteredElement>
  );
};

export default Dot;
