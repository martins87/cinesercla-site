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
  principalDuvida?: boolean;
  category: FAQCategory;
};

export type Topic = {
  label: string;
  category: string;
};

export type Faq = {
  _id: string;
  pergunta: string;
  resposta: string;
  cadastro: string;
  cliques: string;
  ordem: string;
  categoria: FAQCategory;
  principalDuvida: boolean;
  ordemPrincipalDuvida: string;
  ativa: boolean;
};
