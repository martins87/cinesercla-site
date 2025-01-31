import Typography from "@/app/components/Typography";
import CenteredElement from "@/app/components/ui/CenteredElement";
import { BomboniereItemType } from "@/app/types/BomboniereItem";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

type HeaderFilterProps = {
  label: string;
  filter: BomboniereItemType;
  handleFilter: (type: BomboniereItemType) => void;
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
          "text-[32px] hover:cursor-pointer transition-all duration-300 ease-in-out",
          active
            ? "text-black hover:text-black/80"
            : "text-black/40 hover:text-black/60"
        )}
        weight="800"
        onClick={() => handleFilter(filter)}
      >
        {label}
      </Typography>
      {active && <div className="w-4/5 h-1 rounded-full bg-[#980038] -mt-1" />}
    </CenteredElement>
  );
};

export default HeaderFilter;
