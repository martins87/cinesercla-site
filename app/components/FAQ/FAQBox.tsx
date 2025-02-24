import { FC } from "react";
import Typography from "../Typography";
import Centered from "../ui/CenteredElement";

type FAQBoxProps = {
  label: string;
};

const FAQBox: FC<FAQBoxProps> = ({ label }) => {
  return (
    <Centered className="h-[72px] bg-[#7F7F7F] hover:cursor-pointer hover:bg-[#980038] transition-all ease-in-out duration-300 rounded-2xl">
      <Typography className="text-2xl leading-none text-center" weight="700">
        {label}
      </Typography>
    </Centered>
  );
};

export default FAQBox;
