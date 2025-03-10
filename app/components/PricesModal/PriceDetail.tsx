import { FC } from "react";
import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";

type PriceDetailProps = {
  title: string;
  description: string;
};

const PriceDetail: FC<PriceDetailProps> = ({ title, description }) => {
  return (
    <CenteredElement className="p-4 rounded-xl bg-[#3B3B3B]">
      <CenteredElement direction="col" items="start">
        <Typography className="text-xl" weight="700">
          {title}
        </Typography>
        <Typography className="text-lg" weight="400">
          {description}
        </Typography>
      </CenteredElement>
    </CenteredElement>
  );
};

export default PriceDetail;
