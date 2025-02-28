export type FAQItem = {
  question: string;
  answer: string;
  mostAsked?: boolean;
  category:
    | "ingressos"
    | "meia-entrada"
    | "filmes-e-sessoes"
    | "promocoes-e-beneficios"
    | "bomboniere"
    | "salas-e-tecnologias"
    | "formas-de-pagamento"
    | "aplicativo"
    | "fidelidade";
};
