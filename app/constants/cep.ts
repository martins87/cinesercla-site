import { Location } from "../types/Location";

export const estados: Location[] = [
  { id: "ba", label: "Bahia", preposition: "na" },
  { id: "es", label: "Espírito Santo", preposition: "no" },
  { id: "mg", label: "Minas Gerais", preposition: "em" },
  { id: "pb", label: "Paraíba", preposition: "na" },
  { id: "rj", label: "Rio de Janeiro", preposition: "no" },
  { id: "sp", label: "São Paulo", preposition: "em" },
  { id: "se", label: "Sergipe", preposition: "em" },
];

export const cidades: Location[] = [
  { id: "joao-pessoa", label: "João Pessoa/PB", preposition: "em" },
  { id: "campina-grande", label: "Campina Grande/PB", preposition: "em" },
  { id: "aracaju", label: "Aracaju/SE", preposition: "em" },
  {
    id: "nossa-senhora-do-socorro",
    label: "N. Sra. Socorro/SE",
    preposition: "em",
  },
  { id: "salvador", label: "Salvador/BA", preposition: "em" },
  { id: "feira-de-santana", label: "Feira de Santana/BA", preposition: "em" },
  {
    id: "teixeira-de-freitas",
    label: "Teixeira De Freitas/BA",
    preposition: "em",
  },
  { id: "belo-horizonte", label: "Belo Horizonte/MG", preposition: "em" },
  { id: "contagem", label: "Contagem/MG", preposition: "em" },
  { id: "ribeirao-das-neves", label: "Rib. Neves/MG", preposition: "em" },
  { id: "governador-valadares", label: "Gov. Valadares/MG", preposition: "em" },
  { id: "serra", label: "Serra/ES", preposition: "na" },
  { id: "linhares", label: "Linhares/ES", preposition: "em" },
  { id: "itaguai", label: "Itaguaí/RJ", preposition: "em" },
  { id: "nilopolis", label: "Nilópolis/RJ", preposition: "em" },
  { id: "osasco", label: "Osasco/SP", preposition: "em" },
];
