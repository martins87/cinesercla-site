import Typography from "../Typography";
import CenteredEl from "../ui/CenteredElement";
import Container from "../ui/Container";
import CenterItem from "./CenterItem";
import HorizontalLine from "./HorizontalLine";
import LeftItem from "./LeftItem";
import RightItem from "./RightItem";

const Footer = () => {
  return (
    <Container className="mt-20">
      <HorizontalLine />
      <CenteredEl className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20 my-10">
        <LeftItem />
        <CenterItem />
        <RightItem />
      </CenteredEl>
      <HorizontalLine />
      <Typography
        className="text-black/50 dark:text-white/50 font-normal text-xs my-4"
        weight="400"
      >
        © 2024 Cinesercla. All Rights Reserved
      </Typography>
    </Container>
  );
};

export default Footer;
