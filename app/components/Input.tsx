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
  big?: boolean;
};

const Input: FC<InputProps> = ({
  placeholder,
  icon,
  className,
  inputClassName,
  big,
}) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <CenteredEl
      className={twMerge(
        "px-2 py-1 gap-x-0 gap-y-1 rounded-xl bg-[#7F7F7F]",
        big ? "bg-[#A3A3A3] px-7 py-2 rounded-2xl" : "",
        className
      )}
      justify="start"
    >
      {icon && <Image src={icon} alt="button icon" />}
      <input
        className={twMerge(
          "w-full -mt-[2px] py-4 px-4 outline-none text-base text-white bg-inherit",
          "placeholder:text-white/80",
          big
            ? "text-2xl font-bold font-[family-name:var(--font-proxima-nova)] placeholder:text-2xl placeholder:font-bold placeholder:font-[family-name:var(--font-proxima-nova)] px-5"
            : "",
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
