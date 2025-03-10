import Typography from "../Typography";
import CenteredEl from "../ui/CenteredElement";
import Input from "../Input";
import Capcha from "../Capcha";

const NewsletterForm = () => {
  return (
    <CenteredEl className="gap-y-2" direction="col">
      <CenteredEl className="gap-x-2">
        <Input placeholder="Nome*" />
        <Input placeholder="Email*" />
      </CenteredEl>
      <CenteredEl className="py-4 rounded-xl bg-[#980038]">
        <Typography className="text-2xl" font="gellix">
          CADASTRE-SE
        </Typography>
      </CenteredEl>
      <Capcha />
    </CenteredEl>
  );
};

export default NewsletterForm;
