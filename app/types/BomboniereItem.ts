import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type BomboniereItemType = "pipoca" | "bebida" | "doce" | "combo";

export type BomboniereItem = {
  id: string,
  description: string,
  price: string,
  type: BomboniereItemType;
  img: StaticImport,
}