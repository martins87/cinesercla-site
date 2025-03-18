import { useState, useEffect } from "react";
// import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import sun from "@/app/assets/icons/sun.svg";
import sunLight from "@/app/assets/icons/sun-light.svg";
import moon from "@/app/assets/icons/moon.svg";
import moonLight from "@/app/assets/icons/moon-light.svg";
import Image from "next/image";

const Switch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div
      className="flex items-center justify-between rounded-full bg-[#222222] px-5 h-14 min-w-[100px] tablet:min-w-28 relative transition-all hover:cursor-pointer hover:bg-[#222222]/80"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 w-9 h-9 rounded-full transition-all ease-linear duration-300
        ${
          isDark
            ? "bg-main_bordeaux right-[11px]"
            : "bg-main_bordeaux left-[12px]"
        }`}
      ></div>
      <Image className="z-10" src={isDark ? sunLight : sun} alt="sun" />
      <Image className="z-10" src={isDark ? moon : moonLight} alt="sun" />
    </div>
  );
};

export default Switch;
