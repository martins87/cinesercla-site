"use client";

import { ChangeEvent, FC, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";
import CenteredEl from "./ui/CenteredElement";

type InputProps = {
  placeholder: string;
  icon?: StaticImport;
  className?: string;
  inputClassName?: string;
};

const Input: FC<InputProps> = ({
  placeholder,
  icon,
  className,
  inputClassName,
}) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <CenteredEl
      className={twMerge(
        "px-4 gap-x-0 gap-y-1 rounded-xl bg-[#7F7F7F]",
        className
      )}
      justify="start"
    >
      {icon && <Image src={icon} alt="button icon" />}
      <input
        className={twMerge(
          "w-full -mt-[2px] py-4 px-4 outline-none text-base text-white bg-inherit",
          "placeholder:text-white",
          inputClassName
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
