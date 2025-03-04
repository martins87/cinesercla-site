"use client";

import React, { FC, useState } from "react";
import { useMediaQuery } from "react-responsive";

import AccordionList from "./AccordionList";
import { AccordionData } from "@/app/types/AccordionData";

type AccordionProps = { list: AccordionData[] };

const Accordion: FC<AccordionProps> = ({ list }) => {
  const ismobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [itemIndex, setItemIndex] = useState<number>(-1);

  const handleClick = (index: number) => {
    setItemIndex(index);

    if (index === itemIndex) setItemIndex(-1);
  };

  return (
    <div className="w-full flex gap-x-4">
      {ismobile ? (
        <AccordionList
          list={list}
          handleClick={handleClick}
          itemIndex={itemIndex}
        />
      ) : (
        <>
          <AccordionList
            list={list.slice(0, list.length / 2)}
            handleClick={handleClick}
            itemIndex={itemIndex}
          />
          <AccordionList
            list={list.slice(list.length / 2, list.length)}
            handleClick={handleClick}
            itemIndex={itemIndex}
            secondColumn
          />
        </>
      )}
    </div>
  );
};

export default Accordion;
