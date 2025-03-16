import React, { FC } from "react";

import Container from "./ui/Container";
import PageInfo from "./PageInfo";
import { Info } from "../types/Info";

type GridPageInfoProps = {
  pageInfo: Info[];
};

const GridPageInfo: FC<GridPageInfoProps> = ({ pageInfo }) => {
  return (
    <Container className="h-fit bg-inherit mt-10">
      {pageInfo.map((info, index) => (
        <PageInfo
          key={info.title}
          title={info.title}
          description={info.description}
          img={info.img}
          btnLabel={info.btnLabel}
          orderInverted={index % 2 === 1}
        />
      ))}
    </Container>
  );
};

export default GridPageInfo;
