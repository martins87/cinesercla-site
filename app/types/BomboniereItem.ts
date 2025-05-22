import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type BomboniereItemType =
  | "pipocas"
  | "bebidas"
  | "doces"
  | "combos"
  | null;

export type BomboniereItem = {
  id: string;
  description: string;
  price: string;
  type: BomboniereItemType;
  img: StaticImport;
};
