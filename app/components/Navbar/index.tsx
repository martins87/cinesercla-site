import Container from "../Container";
import Links from "../Links";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import UserActionMenu from "../UserActionMenu";
import CitySelector from "./CitySelector";

const Navbar = () => {
  return (
    <Container className="h-24">
      <div className="w-full flex items-center justify-between">
        <Logo />
        <div className="flex items-center justify-around gap-x-4">
          <Links />
          <CitySelector />
        </div>
        <SearchBar />
        <UserActionMenu />
      </div>
    </Container>
  );
};

export default Navbar;
