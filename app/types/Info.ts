import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Info = {
  title: string;
  description: string;
  img: StaticImport;
  btnLabel?: string;
}