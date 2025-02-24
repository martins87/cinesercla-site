import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type MovieItemType = "em-cartaz" | "em-breve" | "pre-venda";

export type MovieItem = {
  id: string;
  description: string;
  price: string;
  type: MovieItemType;
  img: StaticImport;
};
