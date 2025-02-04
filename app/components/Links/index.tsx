import { FC } from "react";
import Link from "next/link";

import { links } from "../../constants/links";
import { Link as PageLink } from "../../types/Link";
import Typography from "../Typography";
import { twMerge } from "tailwind-merge";
import CenteredEl from "../ui/CenteredElement";

type LinksProps = {
  isOnTop: boolean;
};

const Links: FC<LinksProps> = ({ isOnTop }) => {
  return (
    <CenteredEl className="hidden lg:flex">
      <ul className="flex items-center gap-x-6">
        {links.map((link: PageLink) => (
          <li key={link.src}>
            <Link href={link.src}>
              <Typography
                className={twMerge(
                  "text-sm tracking-wide",
                  isOnTop ? "text-black" : "text-white"
                )}
                font="proxima-nova"
                weight="700"
              >
                {link.label}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </CenteredEl>
  );
};

export default Links;
