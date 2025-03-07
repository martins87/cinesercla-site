import Image from "next/image";

import CenteredElement from "./ui/CenteredElement";
import ellipse from "@/app/assets/icons/ellipse.svg";

const Dot = () => {
  return (
    <CenteredElement className="w-fit mx-2">
      <Image src={ellipse} alt="ellipse" />
    </CenteredElement>
  );
};

export default Dot;
