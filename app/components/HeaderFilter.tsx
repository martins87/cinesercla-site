import Typography from "@/app/components/Typography";
import CenteredElement from "@/app/components/ui/CenteredElement";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Filter } from "../types/Filter";

type HeaderFilterProps = {
  label: string;
  filter: Filter;
  handleFilter?: (type: Filter) => void;
  active: boolean;
};

const HeaderFilter: FC<HeaderFilterProps> = ({
  label,
  filter,
  handleFilter,
  active,
}) => {
  return (
    <CenteredElement direction="col">
      <Typography
        className={twMerge(
          "relative text-base md:text-xl tablet:text-3xl hover:cursor-pointer transition-all duration-300 ease-in-out",
          active
            ? "text-black hover:text-black/80"
            : "text-black/40 hover:text-black/60"
        )}
        weight="800"
        onClick={handleFilter && (() => handleFilter(filter))}
      >
        {label}
        {active && (
          <div className="absolute bottom-0 left-[20%] w-[60%] h-1 rounded-full bg-[#980038] -mt-1 animate-fadeIn" />
        )}
      </Typography>
    </CenteredElement>
  );
};

export default HeaderFilter;
