"use client";

import { FC, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
import arrowDown from "@/app/assets/icons/arrow-down.svg";
import arrowUp from "@/app/assets/icons/arrow-up.svg";
import { twMerge } from "tailwind-merge";

type NavbarDropdownProps = {
  title: string;
  items: { label: string; href: string }[];
  isOnTop: boolean;
};

const NavbarDropdown: FC<NavbarDropdownProps> = ({ title, items, isOnTop }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const hasItems = items && items.length > 0;

  const menuVariants = {
    hidden: { opacity: 0, y: 0, scale: 1 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const handleMouseEnter = () => {
    if (hasItems) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (hasItems) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative rounded-lg items-center justify-center hover:cursor-pointer p-4 mt-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CenteredElement className="gap-x-4" justify="between">
        <Typography
          className={twMerge(
            "text-sm tracking-wider",
            isOnTop ? "text-black" : "text-white"
          )}
          weight="700"
        >
          {title}
        </Typography>
        <Image className="w-4 aspect-auto" src={arrowDown} alt="arrow down" />
      </CenteredElement>
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={menuVariants}
        className="absolute left-0 top-0 w-full py-2 bg-[#3D4244] rounded-lg shadow-lg z-10 text-white overflow-hidden"
      >
        <CenteredElement className="px-4 py-2 gap-x-4" justify="between">
          <Typography className="text-sm tracking-wider" weight="700">
            {title}
          </Typography>
          <CenteredElement>
            <Image className="w-4 aspect-auto" src={arrowUp} alt="arrow up" />
          </CenteredElement>
        </CenteredElement>
        {items.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className="block px-4 py-2 text-sm text-white transition-colors hover:text-gray-300"
            variants={itemVariants}
          >
            <Typography
              className="text-xs tracking-wider text-white/50"
              weight="700"
            >
              {item.label}
            </Typography>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default NavbarDropdown;
