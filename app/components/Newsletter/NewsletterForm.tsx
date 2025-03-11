import CenteredEl from "../ui/CenteredElement";
import Input from "../Input";
import Capcha from "../Capcha";
import Button from "../ui/Button";

const NewsletterForm = () => {
  return (
    <CenteredEl className="tablet:w-1/2 gap-y-2" direction="col">
      <CenteredEl className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Input placeholder="Nome*" />
        <Input placeholder="Email*" />
        <Input placeholder="Unidade que frequenta*" />
        <Capcha />
      </CenteredEl>
      <Button className="w-full" label="CADASTRE-SE" />
    </CenteredEl>
  );
};

export default NewsletterForm;
