import { Cidade } from "./Cidade";

export type Estado = {
  id: string;
  estado: string;
  cidades: Cidade[];
};
