"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import Container from "../ui/Container";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import CitySelector from "./CitySelector";
import MobileMenuIcon from "./MobileMenuIcon";
import NavbarDropdown from "./NavbarDropdown";
import CenteredElement from "../ui/CenteredElement";
import Modal from "../ui/Modal";
import CinemaModal from "../CinemaModal";
import Link from "next/link";
import Typography from "../Typography";
import Switch from "../Switch";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [cinemaModalOpen, setCinemaModalOpen] = useState<boolean>(false);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  const openCinemaModal = () => setCinemaModalOpen(true);

  const closeCinemaModal = () => setCinemaModalOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {cinemaModalOpen && (
        <Modal setModalOpen={setCinemaModalOpen}>
          <CinemaModal closeFn={closeCinemaModal} />
        </Modal>
      )}
      <div
        className={twMerge(
          "w-full fixed top-0 h-14 lg:h-24 z-30",
          isScrolling ? "bg-[#EAEAEA] dark:bg-[#0f1619]" : ""
        )}
      >
        <Container className="relative flex flex-row items-center justify-between gap-x-10">
          <MobileMenuIcon />
          <Logo className="mx-auto lg:mx-0" />
          <CenteredElement className="hidden lg:flex gap-x-3">
            <NavbarDropdown
              title="PROGRAMAÇÃO"
              items={[
                { label: "EM CARTAZ", href: "/programacao" },
                { label: "EM BREVE", href: "/programacao" },
                // { label: "PRÉ-VENDA", href: "/programacao" },
              ]}
              isOnTop={isScrolling}
            />
            <Link href="/cinemas">
              <Typography
                className={twMerge(
                  "text-sm tracking-wide",
                  isScrolling ? "text-black dark:text-white" : "text-white"
                )}
                weight="700"
              >
                CINEMAS
              </Typography>
            </Link>
            <NavbarDropdown
              title="PROMOÇÕES"
              items={[
                { label: "BILHETERIA", href: "/promocoes" },
                { label: "BOMBONIERE", href: "/bomboniere" },
              ]}
              isOnTop={isScrolling}
            />
            <Link href="/corporativo">
              <Typography
                className={twMerge(
                  "text-sm tracking-wide",
                  isScrolling ? "text-black dark:text-white" : "text-white"
                )}
                weight="700"
              >
                CORPORATIVO
              </Typography>
            </Link>
            <CitySelector isOnTop={isScrolling} onClick={openCinemaModal} />
          </CenteredElement>
          <SearchBar
            isSearchActive={isSearchActive}
            setIsSearchActive={setIsSearchActive}
          />
          <Switch />
        </Container>
      </div>
    </>
  );
};

export default Navbar;
