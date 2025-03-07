import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { MovieItemType } from "./MovieItem";

export type Movie = {
  id?: string;
  cover?: StaticImport;
  card?: StaticImport;
  title: string;
  description?: string;
  genre?: string;
  imdbRate: string;
  rtRate?: string;
  rating?: string;
  duration?: string;
  status?: MovieItemType;
  launchDate?: string;
  cast?: string;
};
