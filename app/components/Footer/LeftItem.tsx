import Image from "next/image";

import CenteredEl from "../ui/CenteredElement";
import Typography from "../Typography";
import Logo from "../Logo";

import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";

const LeftItem = () => (
  <CenteredEl className="h-full gap-y-6" direction="col" justify="start">
    <Logo className="mr-auto" />
    <Typography
      className="font-normal text-sm leading-[22px] tracking-[1.12px] text-black/80 dark:text-white/50"
      weight="400"
    >
      CINESERCLA é um dos mais tradicionais grupos de cinemas do Brasil e mantém
      uma política de crescimento, com qualidade e eficiência em todos os seus
      complexos.
    </Typography>
    <CenteredEl className="gap-y-2" direction="col">
      <Typography
        className="text-lg leading-[22px] text-black dark:text-white tracking-wide mr-auto"
        weight="800"
      >
        Redes sociais
      </Typography>
      <CenteredEl className="gap-x-2" justify="start">
        <Image
          className="transition-all ease-in-out hover:scale-110 hover:cursor-pointer duration-300"
          src={Facebook}
          alt="facebook logo"
        />
        <Image
          className="transition-all ease-in-out hover:scale-110 hover:cursor-pointer duration-300"
          src={Instagram}
          alt="instagram logo"
        />
      </CenteredEl>
    </CenteredEl>
  </CenteredEl>
);

export default LeftItem;
