import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Movie = {
  id: string,
  cover: StaticImport,
  title: string,
  description?: string,
  genre?: string;
  imdbRate: string,
  rtRate?: string,
  rating: string,
  duration?: string,
}