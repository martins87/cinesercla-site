import Link from "next/link";

import Typography from "../Typography";
import CenteredEl from "../ui/CenteredElement";

import { footerLinks } from "../../constants/footerLinks";

const CenterItem = () => {
  return (
    <CenteredEl
      className="h-full gap-y-6"
      direction="col"
      items="start"
      justify="start"
    >
      <Typography
        className="text-lg leading-[22px] text-black tracking-wide"
        weight="800"
      >
        Navegue
      </Typography>
      <CenteredEl className="gap-x-4">
        <CenteredEl className="gap-y-4" direction="col" items="start">
          {footerLinks.slice(0, footerLinks.length / 2).map((footerLink) => (
            <Link key={footerLink.src} href={footerLink.src}>
              <Typography
                className="font-normal text-lg leading-6 text-black"
                weight="400"
              >
                {footerLink.label}
              </Typography>
            </Link>
          ))}
        </CenteredEl>
        <CenteredEl className="gap-y-4" direction="col" items="start">
          {footerLinks
            .slice(footerLinks.length / 2, footerLinks.length)
            .map((footerLink) => (
              <Link key={footerLink.src} href={footerLink.src}>
                <Typography
                  className="font-normal text-lg leading-6 text-black"
                  weight="400"
                >
                  {footerLink.label}
                </Typography>
              </Link>
            ))}
        </CenteredEl>
      </CenteredEl>
    </CenteredEl>
  );
};

export default CenterItem;
