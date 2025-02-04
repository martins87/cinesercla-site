import Image from "next/image";

import HamburgerIcon from "../../assets/icons/hamburger.png";
import CenteredEl from "../ui/CenteredElement";

const MobileMenuIcon = () => {
  return (
    <CenteredEl className="lg:hidden w-fit">
      <Image src={HamburgerIcon} alt="hamburger icon" />
    </CenteredEl>
  );
};

export default MobileMenuIcon;
