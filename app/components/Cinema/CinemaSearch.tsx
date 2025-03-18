import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import Input from "../Input";
import MagnifyingGlass from "@/app/assets/icons/magnifying-glass-white.png";

const CinemaSearch = () => {
  return (
    <CenteredElement
      className="gap-y-6"
      items="start"
      justify="start"
      direction="col"
    >
      <Typography
        className="text-2xl md:text-3xl tablet:text-4xl text-black/90 dark:text-white"
        weight="800"
      >
        Encontre um cinema
      </Typography>
      <Input
        placeholder="Procure por Cidade, Cinema ou Shopping"
        icon={MagnifyingGlass}
        big
      />
    </CenteredElement>
  );
};

export default CinemaSearch;
