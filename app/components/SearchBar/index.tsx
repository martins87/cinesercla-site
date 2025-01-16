import Image from "next/image";

import MagnifyingGlass from "../../assets/icons/magnifying-glass.png";

const SearchBar = () => {
  return (
    <div>
      <Image src={MagnifyingGlass} alt="magnifying glass icon" />
    </div>
  );
};

export default SearchBar;
