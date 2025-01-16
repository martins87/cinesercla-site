import React from "react";
import Link from "next/link";

import { links } from "../../constants/links";
import { Link as PageLink } from "../../types/Link";
import Typography from "../Typography";

const Links = () => {
  return (
    // for responsive navbar
    <div className="">
      <ul className="flex items-center gap-x-6">
        {links.map((link: PageLink) => (
          <li key={link.src}>
            <Link href={link.src}>
              <Typography
                className="text-base"
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
