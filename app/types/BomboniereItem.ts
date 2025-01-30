import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type BomboniereItem = {
  id: string,
  description: string,
  price: string,
  img: StaticImport,
}