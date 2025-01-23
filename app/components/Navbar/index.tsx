import Container from "../ui/Container";
import Links from "../Links";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import UserActionMenu from "../UserActionMenu";
import CitySelector from "./CitySelector";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 h-24 z-10">
      <Container className="w-full flex flex-row items-center justify-between">
        <Logo />
        <div className="flex items-center justify-around gap-x-4">
          <Links />
          <CitySelector />
        </div>
        <SearchBar />
        <UserActionMenu />
      </Container>
    </div>
  );
};

export default Navbar;
