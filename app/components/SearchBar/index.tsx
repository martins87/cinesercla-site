import Image from "next/image";

import MagnifyingGlass from "../../assets/icons/magnifying-glass-light.svg";
import CenteredEl from "../ui/CenteredElement";

const SearchBar = () => {
  return (
    <CenteredEl className="w-fit hidden lg:flex">
      <Image src={MagnifyingGlass} alt="magnifying glass icon" />
    </CenteredEl>
  );
};

export default SearchBar;
