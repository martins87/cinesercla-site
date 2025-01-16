import Image from "next/image";

import Typography from "../Typography";
import Pin from "../../assets/icons/pin.png";
import ArrowDown from "../../assets/icons/arrow-down.png";

const CitySelector = () => {
  return (
    <div className="h-10 flex items-center gap-x-3">
      <Image src={Pin} alt="pin icon" />
      <Typography className="text-base" font="proxima-nova" weight="700">
        BELO HORIZONTE
      </Typography>
      <Image src={ArrowDown} alt="arrow down icon" />
    </div>
  );
};

export default CitySelector;
