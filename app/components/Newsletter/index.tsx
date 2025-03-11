import Image from "next/image";

import MoviesPoster from "../../assets/images/movies-poster.png";
import Typography from "../Typography";
import NewsletterForm from "./NewsletterForm";
import CenteredElement from "../ui/CenteredElement";

const Newsletter = () => {
  return (
    <CenteredElement className="my-10" direction="col">
      <CenteredElement className="relative rounded-2xl overflow-hidden z-0 px-10 py-28">
        <Image
          className="absolute top-0 left-0 h-full"
          src={MoviesPoster}
          alt="movies poster"
        />
        <CenteredElement className="flex-col tablet:flex-row gap-y-10 text-white z-10">
          <CenteredElement
            className="items-center tablet:items-start tablet:w-1/2 leading-10"
            direction="col"
            justify="around"
          >
            <Typography
              className="text-[32px] md:text-4xl tablet:text-5xl"
              weight="800"
            >
              RECEBA NOSSA
            </Typography>
            <Typography
              className="text-[32px] md:text-4xl tablet:text-5xl text-[#D61E43]"
              weight="800"
            >
              PROGRAMAÇÃO
            </Typography>
          </CenteredElement>
          <NewsletterForm />
        </CenteredElement>
      </CenteredElement>
    </CenteredElement>
  );
};

export default Newsletter;
