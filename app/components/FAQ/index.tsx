"use client";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItem } from "@/app/types/FAQItem";
import { FAQData } from "@/app/constants/faq";

const FAQ = () => {
  const ismobile = useMediaQuery({ query: "(max-width: 640px)" });
  const [itemIndex, setItemIndex] = useState<number>(-1);
  const faq = FAQData.filter((question) => question.mostAsked);

  const handleClick = (index: number) => {
    setItemIndex(index);

    if (index === itemIndex) setItemIndex(-1);
  };
  return (
    <div className="w-full flex gap-x-4">
      {ismobile ? (
        <Accordion
          className="w-full"
          type="single"
          collapsible
          value={`item-${itemIndex}`}
        >
          {faq.map((item: FAQItem, index: number) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              onClick={() => handleClick(index)}
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <>
          <Accordion
            className="w-full"
            type="single"
            collapsible
            value={`item-${itemIndex}`}
          >
            {faq.slice(0, 3).map((item: FAQItem, index: number) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                onClick={() => handleClick(index)}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion
            className="w-full"
            type="single"
            collapsible
            value={`item-${itemIndex}`}
          >
            {faq
              .slice(3, FAQData.length)
              .map((item: FAQItem, index: number) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 4}`}
                  onClick={() => handleClick(index + 4)}
                >
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </>
      )}
    </div>
  );
};

export default FAQ;
