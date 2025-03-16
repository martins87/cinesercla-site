import Typography from "@/app/components/Typography";
import Centered from "@/app/components/ui/CenteredElement";
import Container from "@/app/components/ui/Container";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <Container className="mt-32 lg:mt-40">
      <Centered className="flex-1 flex-col tablet:flex-row gap-x-10">
        <Centered
          className="mb-10 tablet:mb-auto gap-y-6"
          direction="col"
          items="start"
          justify="start"
        >
          <Typography
            className="text-4xl text-black/90 dark:text-white"
            weight="800"
          >
            Trabalhe Conosco
          </Typography>
          <Centered className="flex-col sm:flex-row tablet:flex-col gap-x-6 gap-y-6">
            <Centered justify="start">
              <Typography
                className="text-lg text-black dark:text-white"
                weight="400"
              >
                Apaixonado por cinema? Candidate-se agora e venha crescer com a
                gente!
              </Typography>
            </Centered>
            <Centered direction="col" items="start">
              <Typography
                className="text-xl text-black dark:text-white"
                weight="400"
              >
                Colabore em um ambiente inovador
              </Typography>
              <Typography
                className="text-xl text-black dark:text-white"
                weight="400"
              >
                Desenvolva-se em um ambiente dinâmico
              </Typography>
              <Typography
                className="text-xl text-black dark:text-white"
                weight="400"
              >
                Trabalhe com paixão pelo cinema
              </Typography>
            </Centered>
          </Centered>
        </Centered>
        <ContactForm />
      </Centered>
    </Container>
  );
};

export default ContactPage;
