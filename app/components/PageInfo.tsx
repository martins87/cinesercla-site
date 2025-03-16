import { FC } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import CenteredElement from "@/app/components/ui/CenteredElement";
import Typography from "@/app/components/Typography";
import { twMerge } from "tailwind-merge";
import Button from "./ui/Button";

type PageInfoProps = {
  title: string;
  description: string;
  img: StaticImport;
  btnLabel?: string;
  orderInverted?: boolean;
};

const PageInfo: FC<PageInfoProps> = ({
  title,
  description,
  img,
  btnLabel,
  orderInverted,
}) => {
  return (
    <CenteredElement className="flex-col md:flex-row gap-y-8 mt-10 mb-16 md:mb-0 gap-x-20">
      <CenteredElement className="h-96 tablet:h-[512px] rounded-2xl overflow-hidden">
        <Image className="w-full h-full" src={img} alt="cover" />
      </CenteredElement>
      <CenteredElement
        className={twMerge(
          "h-max rounded-lg gap-y-4",
          orderInverted ? "md:order-first" : ""
        )}
        items="start"
        direction="col"
      >
        <Typography
          className="text-3xl tablet:text-4xl text-black dark:text-white uppercase"
          weight="800"
        >
          {title}
        </Typography>
        <Typography
          className="text-xl tablet:text-2xl text-black dark:text-white"
          weight="400"
        >
          {description}
        </Typography>
        {btnLabel && <Button label={btnLabel} />}
      </CenteredElement>
    </CenteredElement>
  );
};

export default PageInfo;
