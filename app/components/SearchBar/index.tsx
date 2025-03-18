"use client";

import { ChangeEvent, FC, useRef, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import CenteredEl from "../ui/CenteredElement";
import magnifyingGlass from "../../assets/icons/magnifying-glass-light.svg";
import close from "@/app/assets/icons/close-small.svg";

type SearchBarProps = {
  isSearchActive: boolean;
  setIsSearchActive: (status: boolean) => void;
};

const SearchBar: FC<SearchBarProps> = ({
  isSearchActive,
  setIsSearchActive,
}) => {
  const inputref = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search: string = e.target?.value;
    setSearchTerm(search);
  };

  const handleStartSearch = () => {
    setIsSearchActive(true);
    inputref.current?.focus();
  };

  const handleFinishSearch = () => {
    setIsSearchActive(false);
    inputref.current?.blur();
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // search action here
    }
  };

  return (
    <CenteredEl
      className={twMerge(
        "absolute w-[17.5%] right-0 hidden lg:flex gap-x-4 rounded-full px-4 h-14",
        isSearchActive ? "bg-[#222222] z-20" : "bg-inherit"
      )}
    >
      <Image
        className="hover:cursor-pointer"
        src={magnifyingGlass}
        alt="magnifying glass icon"
        onClick={handleStartSearch}
      />
      <input
        className={twMerge(
          "w-3/5 h-1/2 flex flex-1 bg-inherit outline-none font-[family-name:var(--font-proxima-nova)] text-base font-bold text-white placeholder:uppercase",
          isSearchActive
            ? "transition-all transform duration-0 opacity-100 placeholder:text-white/50"
            : "transition-all transform duration-0 opacity-0"
        )}
        type="text"
        ref={inputref}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleEnterKey}
        placeholder="buscar"
      />
      <Image
        className="hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out"
        src={close}
        alt="close icon"
        onClick={handleFinishSearch}
      />
    </CenteredEl>
  );
};

export default SearchBar;
