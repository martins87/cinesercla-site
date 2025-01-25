import Typography from "./Typography";
import CenteredEl from "./ui/CenteredElement";
import Recaptcha from "../assets/images/recaptcha.png";
import Image from "next/image";

const Capcha = () => {
  return (
    <CenteredEl className="w-[302px] h-[74px] p-2 bg-[#FAFAFA] border border-[#D6D6D6] rounded-r-sm mr-auto">
      <CenteredEl className="gap-x-2 justify-start flex flex-1">
        <div className="w-6 aspect-square bg-white border-2 border-[#C1C1C1] rounded-sm"></div>
        <Typography className="text-black">I&apos;m not a robot</Typography>
      </CenteredEl>
      <Image src={Recaptcha} alt="recaptcha" />
    </CenteredEl>
  );
};

export default Capcha;
