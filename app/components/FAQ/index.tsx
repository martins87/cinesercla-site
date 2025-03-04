"use client";

import React, { FC, useState } from "react";
import { useMediaQuery } from "react-responsive";

import FAQList from "./FAQList";
import { FAQItem } from "@/app/types/FAQ";

type FAQProps = {
  faqList: FAQItem[];
};

const FAQ: FC<FAQProps> = ({ faqList }) => {
  const ismobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [itemIndex, setItemIndex] = useState<number>(-1);

  const handleClick = (index: number) => {
    setItemIndex(index);

    if (index === itemIndex) setItemIndex(-1);
  };

  return (
    <div className="w-full flex gap-x-4">
      {ismobile ? (
        <FAQList
          faqArray={faqList}
          handleClick={handleClick}
          itemIndex={itemIndex}
        />
      ) : (
        <>
          <FAQList
            faqArray={faqList.slice(0, faqList.length / 2)}
            handleClick={handleClick}
            itemIndex={itemIndex}
          />
          <FAQList
            faqArray={faqList.slice(faqList.length / 2, faqList.length)}
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
