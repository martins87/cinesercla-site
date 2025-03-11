import { FC } from "react";
import Link from "next/link";

import { links } from "../../constants/links";
import { Link as PageLink } from "../../types/Link";
import Typography from "../Typography";
import { twMerge } from "tailwind-merge";

type LinksProps = {
  isOnTop: boolean;
};

const Links: FC<LinksProps> = ({ isOnTop }) => {
  return (
    <ul className="flex items-center justify-center gap-x-8">
      {links.map((link: PageLink) => (
        <li key={link.src}>
          <Link href={link.src}>
            <Typography
              className={twMerge(
                "text-sm tracking-wide",
                isOnTop ? "text-black" : "text-white"
              )}
              weight="700"
            >
              {link.label}
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
