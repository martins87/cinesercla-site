import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { MovieItemType } from "./MovieItem";

export type Trailer = {
  videoThumb: StaticImport;
  videoTitle: string;
  videoDuration: string;
  timestamp: string;
  name?: string;
  key?: string;
};

export type Movie = {
  id?: string;
  cover?: StaticImport;
  card?: StaticImport;
  title: string;
  description?: string;
  genre?: string;
  rating?: string;
  duration?: string;
  status?: MovieItemType;
  launchDate?: string;
  cast?: string;
  trailers?: Trailer[];
};

export type TMDBMovie = {
  _id?: string;
  tmdbId: number;
  cadastro: string;
  ativo: boolean;
  adult?: boolean;
  backdrop_path: string;
  genres: string; // Salvar como string
  original_language?: string;
  original_title: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  // production_companies: string,
  release_date: string;
  runtime: number;
  situacao: string;
  title: string;
  vote_average?: number;
  vote_count?: number;
  trailers?: Trailer[];
  cast: string;
};
