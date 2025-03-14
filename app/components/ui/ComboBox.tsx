import { Dispatch, FC, SetStateAction, useState } from "react";
import Image from "next/image";

import CenteredElement from "./CenteredElement";
import Typography from "../Typography";
import arrowDown from "@/app/assets/icons/arrow-down-white.svg";

type ComboBoxProps = {
  list: { value: string; label: string }[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const ComboBox: FC<ComboBoxProps> = ({ list, value, setValue }) => {
  const [show, setShow] = useState(false);

  return (
    <CenteredElement className="">
      <CenteredElement
        className="relative bg-[#A3A3A3] rounded-xl"
        onClick={() => setShow(!show)}
        direction="col"
      >
        <CenteredElement
          className="h-20 px-6 py-4 hover:cursor-pointer"
          justify="between"
        >
          <Typography className="text-xl uppercase" weight="700">
            {show ? list[0].label : value}
          </Typography>
          <Image src={arrowDown} alt="arrow down" />
        </CenteredElement>
        {show && (
          <ul className="absolute top-20 w-full py-2 flex flex-col items-start justify-start bg-[#bfbfbf] rounded-xl z-20">
            {list.slice(1).map((item, index) => (
              <li
                key={index}
                className="w-full px-6 py-3 hover:bg-[#A3A3A3]/25 hover:cursor-pointer"
                onClick={() => setValue(item.value)}
              >
                <Typography className="text-xl uppercase" weight="700">
                  {item.label}
                </Typography>
              </li>
            ))}
          </ul>
        )}
      </CenteredElement>
    </CenteredElement>
  );
};

export default ComboBox;
