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
    // for responsive navbar
    <div className="">
      <ul className="flex items-center gap-x-6">
        {links.map((link: PageLink) => (
          <li key={link.src}>
            <Link href={link.src}>
              <Typography
                className={twMerge(
                  "text-base tracking-wide",
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
    </div>
  );
};

export default Links;
