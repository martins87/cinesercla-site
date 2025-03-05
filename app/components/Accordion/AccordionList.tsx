import React, { FC } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionData } from "@/app/types/AccordionData";

type AccordionListProps = {
  list: AccordionData[];
  itemIndex: number;
  secondColumn?: boolean;
  handleClick: (index: number) => void;
};

const AccordionList: FC<AccordionListProps> = ({
  list,
  itemIndex,
  secondColumn,
  handleClick,
}) => {
  const value = secondColumn ? list.length / 2 + 1 : 0;

  return (
    <Accordion
      className="w-full"
      type="single"
      collapsible
      value={`item-${itemIndex}`}
    >
      {list.map((item: AccordionData, index: number) => (
        <AccordionItem
          key={index}
          value={`item-${index + value}`}
          onClick={() => handleClick(index + value)}
        >
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionList;
