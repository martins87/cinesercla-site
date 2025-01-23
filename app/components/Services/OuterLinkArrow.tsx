import Image from "next/image";

import CenteredEl from "../ui/CenteredElement";
import DiagonalArrow from "../../assets/icons/outer-link-arrow.svg";

const OuterLinkArrow = () => {
  return (
    <CenteredEl className="w-12 aspect-square rounded-full bg-[#980038] group-hover:bg-red-900 z-10">
      <Image src={DiagonalArrow} alt="diagonal arrow" />
    </CenteredEl>
  );
};

export default OuterLinkArrow;
