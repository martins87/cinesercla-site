import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import CineserclaLogo from "../../assets/images/logo.png";

type LogoProps = {
  onClick?: () => void;
  className?: string;
};

const Logo: FC<LogoProps> = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <Link href="/">
        <Image
          className="w-28 lg:w-32 2xl:w-44"
          src={CineserclaLogo}
          alt="Cinesercla logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
