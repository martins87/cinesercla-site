import React, { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import CenteredElement from "@/app/components/ui/CenteredElement";
import Typography from "@/app/components/Typography";
import ticketRed from "@/app/assets/images/ticket-red.svg";
import ticketBlack from "@/app/assets/images/ticket-black.svg";

type TicketProps = {
  today?: boolean;
  weekDay: string;
  monthDay: string;
};

const Ticket: FC<TicketProps> = ({ today, weekDay, monthDay }) => {
  return (
    <div className="relative hover:cursor-pointer">
      <Image src={today ? ticketRed : ticketBlack} alt="ticket image" />
      <CenteredElement className="absolute top-[2px]">
        <Typography
          className={twMerge(
            "text-sm",
            today ? "text-[#FCFCFE]" : "text-white/75"
          )}
        >
          {weekDay}
        </Typography>
      </CenteredElement>
      <CenteredElement className="absolute bottom-3">
        <Typography
          className={twMerge(
            "text-2xl",
            today ? "text-[#FCFCFE]" : "text-white/75"
          )}
        >
          {monthDay}
        </Typography>
      </CenteredElement>
    </div>
  );
};

export default Ticket;
