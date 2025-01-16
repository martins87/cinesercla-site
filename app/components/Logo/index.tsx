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
      <Link className="flex flex-col items-center" href="/">
        <Image className="w-auto" src={CineserclaLogo} alt="Cinesercla logo" />
      </Link>
    </div>
  );
};

export default Logo;
