"use client";

import { ChangeEvent, FC, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";
import CenteredEl from "../ui/CenteredElement";

type InputProps = {
  placeholder: string;
  icon?: StaticImport;
};

const Input: FC<InputProps> = ({ placeholder, icon }) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <CenteredEl
      className="px-4 gap-x-0 gap-y-1 rounded-xl bg-[#7F7F7F]"
      justify="start"
    >
      {icon && <Image src={icon} alt="button icon" />}
      <input
        className={twMerge(
          "w-full py-4 px-4 outline-none text-base text-white bg-inherit",
          "placeholder:text-white"
        )}
        type="text"
        // ref={inputref}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        // onKeyDown={handleEnterKey}
      />
    </CenteredEl>
  );
};

export default Input;
