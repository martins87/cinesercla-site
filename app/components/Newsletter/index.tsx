import Image from "next/image";

import MoviesPoster from "../../assets/images/movies-poster.png";
import Typography from "../Typography";
import NewsletterForm from "./NewsletterForm";
import CenteredEl from "../ui/CenteredElement";

const Newsletter = () => {
  return (
    <CenteredEl className="my-10" direction="col">
      <CenteredEl className="relative rounded-2xl overflow-hidden z-0 px-10 py-28">
        <Image
          className="absolute top-0 left-0"
          src={MoviesPoster}
          alt="movies poster"
        />
        <CenteredEl className="text-white z-10">
          <CenteredEl
            className="w-1/2"
            items="start"
            direction="col"
            justify="around"
          >
            <Typography className="text-5xl" weight="800">
              RECEBA NOSSA
            </Typography>
            <Typography className="text-5xl text-[#D61E43]" weight="800">
              PROGRAMAÇÃO
            </Typography>
          </CenteredEl>
          <CenteredEl className="w-1/2" direction="col">
            <NewsletterForm />
          </CenteredEl>
        </CenteredEl>
      </CenteredEl>
    </CenteredEl>
  );
};

export default Newsletter;
