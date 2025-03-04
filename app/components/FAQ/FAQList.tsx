import React, { FC } from "react";

import { FAQItem } from "@/app/types/FAQ";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQListProps = {
  faqArray: FAQItem[];
  itemIndex: number;
  secondColumn?: boolean;
  handleClick: (index: number) => void;
};

const FAQList: FC<FAQListProps> = ({
  faqArray,
  itemIndex,
  secondColumn,
  handleClick,
}) => {
  const value = secondColumn ? faqArray.length / 2 : 0;

  return (
    <Accordion
      className="w-full"
      type="single"
      collapsible
      value={`item-${itemIndex}`}
    >
      {faqArray.map((item: FAQItem, index: number) => (
        <AccordionItem
          key={index}
          value={`item-${index + value}`}
          onClick={() => handleClick(index + value)}
        >
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQList;
