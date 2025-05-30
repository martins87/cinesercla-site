import { Movie } from "../types/Movie";
import Movie0 from "../assets/images/movie-0.png";
import Movie1 from "../assets/images/movie-1.png";
import Movie2 from "../assets/images/movie-2.png";
import Movie3 from "../assets/images/movie-3.png";
import wolverine_cover from "@/app/assets/images/movies/covers/wolverine.png";
import wolverine_card from "@/app/assets/images/movies/movie-5.png";
import trailer1 from "@/app/assets/images/movies/trailers/thumb1.png";
import trailer2 from "@/app/assets/images/movies/trailers/thumb2.png";

export const movies: Movie[] = [
  {
    id: "7046d8ec-992c-44ce-8cad-848c15ce60d9",
    cover: Movie0,
    title: "Transformers O Início",
    description:
      "A história de origem de Optimus Prime e Megatron, os maiores rivais da franquia, mas que um dia foram amigos tão ligados quanto irmãos e que mudaram o destino de Cybertron para sempre.",
    rating: "10",
    duration: "1h50min",
    genre: "Animação",
  },
  {
    id: "90ac9647-8093-48ea-88ab-b70d697ce45f",
    cover: Movie1,
    title: "É Assim Que Acaba",
    description:
      "Lily acredita que encontrou o amor verdadeiro com Ryle, mas quando um incidente doloroso desencadeia um trauma do passado, ela deve decidir se apenas o amor pode levar seu casamento adiante. As coisas ficam complicadas quando seu primeiro amor retorna à sua vida.",
    rating: "14",
    duration: "2h03min",
    genre: "Romance",
  },
  {
    id: "15f3189a-51db-4547-966b-2122f9a55f26",
    cover: Movie2,
    title: "A Menina e o Dragão",
    description:
      "Na China antiga, dragões eram aliados dos homens, mas a cobiça e o desejo de poder dos humanos destruíram essa união. Anos depois, Ping, uma jovem escrava, forma uma amizade com Long Danzi, o último dragão imperial. Juntos, fogem do cativeiro e viajam pelo Império, aprendendo o poder do Qi e sendo perseguidos.",
    rating: "L",
    duration: "1h38min",
    genre: "Animação",
  },
  {
    id: "b5e164c5-06ad-4267-8ade-735b48227787",
    cover: Movie3,
    title: "Coringa: Delírio A Dois",
    description:
      "Em Coringa 2, seguimos Arthur Fleck após os eventos do primeiro filme. Agora, desempregado e marcado por sua complexa condição mental e origem familiar difícil, ele se transforma em Coringa, o maior símbolo de uma revolta popular contra a elite de Gotham City.",
    rating: "16",
    duration: "2h18min",
    genre: "Drama",
  },
];

export const movie: Movie = {
  title: "Deadpool & Wolverine",
  description: `
    Deadpool & Wolverine reúne Wade Wilson e Wolverine em uma aventura cheia de ação e humor. Após momentos de tranquilidade, seus destinos se cruzam, formando uma improvável aliança para enfrentar um inimigo comum. Repleta de reviravoltas, essa jornada promete ser uma experiência épica com referências aos quadrinhos.
  `,
  duration: "2h7min",
  genre: "Ação, Comédia",
  launchDate: "25/07/2024",
  cast: "Ryan Reynolds, Hugh Jackman, Morena Baccarin, Emma Corrin",
  cover: wolverine_cover,
  card: wolverine_card,
  trailers: [
    {
      videoThumb: trailer1,
      videoTitle: "Deadpool & Wolverine | Teaser Oficial Dublado",
      videoDuration: "2:25",
      timestamp: "6 Meses Atrás",
    },
    {
      videoThumb: trailer2,
      videoTitle: "Deadpool & Wolverine | Trailer 3 Oficial Legendado",
      videoDuration: "2:02",
      timestamp: "1 Mês Atrás",
    },
  ],
};
