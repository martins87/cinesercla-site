import Input from "@/app/components/Input";
import Button from "@/app/components/ui/Button";
import Centered from "@/app/components/ui/CenteredElement";

const className = { className: "bg-[#A3A3A3] px-2 py-1 rounded-2xl" };

const ContactForm = () => {
  return (
    <Centered className="gap-y-2" direction="col">
      <Centered className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Input {...className} placeholder="Nome*" />
        <Input {...className} placeholder="Sobrenome*" />
        <Input {...className} placeholder="E-Mail*" />
        <Input {...className} placeholder="Telefone*" />
        <Input {...className} placeholder="Unidade que frequenta*" />
        <Input {...className} placeholder="assunto*" />
        <Input {...className} placeholder="Sua mensagem" />
      </Centered>
      <Button className="w-full py-[18px]" label="ENVIAR" primary />
    </Centered>
  );
};

export default ContactForm;
