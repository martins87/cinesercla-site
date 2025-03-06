import Image from "next/image";

import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import like from "@/app/assets/icons/like.svg";

const MovieInfo = () => {
  return (
    <CenteredElement className="gap-y-8" direction="col">
      <CenteredElement className="flex-col md:flex-row items-start md:items-between justify-between">
        <Typography className="md:w-1/2 text-3xl text-black/90" weight="800">
          Deadpool & Wolverine
        </Typography>
        <CenteredElement className="md:w-1/2 gap-x-2 justify-start md:justify-end">
          <Typography className="text-lg text-black/90" weight="700">
            Em Seus Favoritos
          </Typography>
          <Image className="scale-[70%]" src={like} alt="like icon" />
        </CenteredElement>
      </CenteredElement>
      <CenteredElement className="flex-col md:flex-row gap-y-10 items-start justify-between">
        <CenteredElement
          className="md:w-1/2 gap-y-2 mb-auto"
          direction="col"
          items="start"
        >
          <Typography className="text-lg text-black/65" weight="400">
            Duração: 2h 7min{" "}
          </Typography>
          <Typography className="text-lg text-black/65" weight="400">
            Gênero: Ação, Comédia
          </Typography>
          <Typography className="text-lg text-black/65" weight="400">
            Data de Lançamento: 25/07/2024
          </Typography>
          <Typography className="text-lg text-black/65" weight="400">
            Elenco: Ryan Reynolds, Hugh Jackman, Morena Baccarin, Emma Corrin
          </Typography>
          <Typography className="text-lg text-black/65" weight="400">
            IMDB
          </Typography>
        </CenteredElement>
        <CenteredElement className="tablet:w-1/2">
          <Typography className="text-xl text-black/90" weight="400">
            Deadpool & Wolverine reúne Wade Wilson e Wolverine em uma aventura
            cheia de ação e humor. Após momentos de tranquilidade, seus destinos
            se cruzam, formando uma improvável aliança para enfrentar um inimigo
            comum. Repleta de reviravoltas, essa jornada promete ser uma
            experiência épica com referências aos quadrinhos.
          </Typography>
        </CenteredElement>
      </CenteredElement>
    </CenteredElement>
  );
};

export default MovieInfo;
