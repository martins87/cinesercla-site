import { AccordionData } from "./AccordionData";

export type FAQCategory =
  | "ingressos"
  | "meia-entrada"
  | "filmes-e-sessoes"
  | "promocoes-e-beneficios"
  | "bomboniere"
  | "salas-e-tecnologias"
  | "formas-de-pagamento"
  | "aplicativo"
  | "fidelidade";

export type FAQItem = AccordionData & {
  mostAsked?: boolean;
  category: FAQCategory;
};

export type Topic = {
  label: string;
  category: string;
};
