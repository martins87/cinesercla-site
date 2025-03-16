"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import Container from "../ui/Container";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
// import UserActionMenu from "../UserActionMenu";
import CitySelector from "./CitySelector";
import MobileMenuIcon from "./MobileMenuIcon";
import NavbarDropdown from "./NavbarDropdown";
import CenteredElement from "../ui/CenteredElement";
import Modal from "../ui/Modal";
import CinemaModal from "../CinemaModal";
import Link from "next/link";
import Typography from "../Typography";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [cinemaModalOpen, setCinemaModalOpen] = useState<boolean>(false);

  const closeCinemaModal = () => setCinemaModalOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openCinemaModal = () => setCinemaModalOpen(true);

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
          isScrolling ? "bg-[#EAEAEA]" : ""
        )}
      >
        <Container className="flex flex-row items-center justify-between">
          <MobileMenuIcon />
          <Logo className="mx-auto lg:mx-0" />
          <CenteredElement className="hidden lg:flex gap-x-4">
            <NavbarDropdown
              title="PROGRAMAÇÃO"
              items={[
                { label: "EM CARTAZ", href: "/programacao" },
                { label: "EM BREVE", href: "/programacao" },
                { label: "PRÉ-VENDA", href: "/programacao" },
              ]}
              isOnTop={isScrolling}
            />
            <Link href="/cinemas">
              <Typography
                className={twMerge(
                  "text-sm tracking-wide",
                  isScrolling ? "text-black" : "text-white"
                )}
                weight="700"
              >
                CINEMAS
              </Typography>
            </Link>
            <NavbarDropdown
              title="PROMOÇÕES"
              items={[
                { label: "BILHETERIA", href: "/programacao" },
                { label: "BOMBONIERE", href: "/bomboniere" },
              ]}
              isOnTop={isScrolling}
            />
            <Link href="/corporativo">
              <Typography
                className={twMerge(
                  "text-sm tracking-wide",
                  isScrolling ? "text-black" : "text-white"
                )}
                weight="700"
              >
                CORPORATIVO
              </Typography>
            </Link>
            <CitySelector isOnTop={isScrolling} onClick={openCinemaModal} />
          </CenteredElement>
          <SearchBar />
          {/* <UserActionMenu /> */}
        </Container>
      </div>
    </>
  );
};

export default Navbar;
