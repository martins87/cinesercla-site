"use client";

import { useEffect, useState } from "react";

import Container from "../ui/Container";
import Links from "../Links";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import UserActionMenu from "../UserActionMenu";
import CitySelector from "./CitySelector";
import { twMerge } from "tailwind-merge";
import MobileMenuIcon from "./MobileMenuIcon";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={twMerge(
        "w-full fixed top-0 h-14 lg:h-24 z-20",
        isScrolling ? "bg-[#EAEAEA]" : ""
      )}
    >
      <Container className="flex flex-row items-center justify-between">
        <MobileMenuIcon />
        <Logo className="mx-auto lg:mx-0" />
        <div className="flex items-center lg:justify-around gap-x-4">
          <Links isOnTop={isScrolling} />
          <CitySelector isOnTop={isScrolling} />
        </div>
        <SearchBar />
        <UserActionMenu />
      </Container>
    </div>
  );
};

export default Navbar;
