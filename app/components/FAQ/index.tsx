"use client";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { FAQData } from "@/app/constants/faq";
import FAQList from "./FAQList";

const FAQ = () => {
  const ismobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [itemIndex, setItemIndex] = useState<number>(-1);
  const faq = FAQData.filter((question) => question.mostAsked);

  const handleClick = (index: number) => {
    setItemIndex(index);

    if (index === itemIndex) setItemIndex(-1);
  };
  return (
    <div className="w-full flex gap-x-4">
      {ismobile ? (
        <FAQList
          faqArray={faq}
          handleClick={handleClick}
          itemIndex={itemIndex}
        />
      ) : (
        <>
          <FAQList
            faqArray={faq.slice(0, 3)}
            handleClick={handleClick}
            itemIndex={itemIndex}
          />
          <FAQList
            faqArray={faq.slice(3, faq.length)}
            handleClick={handleClick}
            itemIndex={itemIndex}
            secondColumn
          />
        </>
      )}
    </div>
  );
};

export default FAQ;
