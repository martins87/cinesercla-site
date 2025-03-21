import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { MovieItemType } from "./MovieItem";

export type Trailer = {
  videoThumb: StaticImport;
  videoTitle: string;
  videoDuration: string;
  timestamp: string;
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
