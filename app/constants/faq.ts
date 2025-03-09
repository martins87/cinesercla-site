import { FAQItem, Topic } from "../types/FAQ";

export const topics: Topic[] = [
  { label: "Ingressos", category: "ingressos" },
  { label: "Meia-Entrada", category: "meia-entrada" },
  { label: "Filmes e Sessões", category: "filmes-e-sessoes" },
  { label: "Promoções e Benefícios", category: "promocoes-e-beneficios" },
  { label: "Bomboniere", category: "bomboniere" },
  { label: "Salas e Tecnologias", category: "salas-e-tecnologias" },
  { label: "Formas de Pagamento", category: "formas-de-pagamento" },
  // { label: "Aplicativo", category: "aplicativo" },
  // { label: "Fidelidade", category: "fidelidade" },
];

export const FAQData: FAQItem[] = [
  {
    title: "Como funciona a venda de ingressos na bilheteria?",
    content:
      "A venda de ingressos na bilheteria funciona 30 minutos antes da sessão e até 10 minutos após o início da sessão. Após esse tempo, o nosso sistema é programado para encerrar as vendas automaticamente e iniciar a comercialização de bilhetes para próxima sessão do dia.",
    mostAsked: true,
    category: "ingressos",
  },
  {
    title: "Posso alterar o horário do filme comprado?",
    content:
      "Não é permitido alterar o horário do filme comprado. Deverá solicitar o estorno e efetuar uma nova compra. Estorno de ingressos comprados na web => através de um e-mail enviado a ingressos@ingressoplus.com.br Estorno de ingressos comprados na bilheteria e ATM => presencialmente no cinema",
    mostAsked: true,
    category: "ingressos",
  },
  {
    title:
      "Comprei o ingresso pela internet, mas não pude comparecer na sessão. Como faço para ter o dinheiro de volta?",
    content: `
      A venda online de ingressos é feita pelo Ingresso Plus.
      Para solicitar o estorno é preciso que envie um e-mail para ingressos@ingressoplus.com.br com os dados do voucher (data da sessão e número da reserva) e aguardar um retorno da mesma com a confirmação do reembolso.
    `,
    category: "ingressos",
  },
  {
    title: "Como funciona a venda de ingresso na Web?",
    content:
      "O serviço de venda de ingressos na web é de inteira responsabilidade da empresa INGRESSO PLUS, a qual cobra uma taxa de serviço pela venda. As regras e forma de utilização estão disponiveis no campo ATENDIMENTO do link abaixo: www.ingressoplus.com.br/site/",
    mostAsked: true,
    category: "ingressos",
  },
  {
    title: "Quem tem direito a meia entrada?",
    content: `
      Estudantes, idosos, pessoas com deficiência (incluindo seu acompanhante) e jovens de 15 a 29 anos comprovadamente carentes.
      Mais informações: http://www.cinesercla.com.br/Home/Leis
    `,
    mostAsked: true,
    category: "meia-entrada",
  },
  {
    title:
      "Quais são os documentos que devo apresentar para ter direito a meia entrada?",
    content: `
      LEI Nº 12.933, DE 26 DE DEZEMBRO DE 2013 - Art. 1º paragráfo 2º : 
      "Terão direito ao benefício os estudantes regularmente matriculados nos níveis e modalidades de educação e ensino previstos no Título V da Lei nº 9.394, de 20 de dezembro de 1996, que comprovem sua condição de discente, mediante a apresentação, no momento da aquisição do ingresso e na portaria do local de realização do evento, da Carteira de Identificação Estudantil (CIE), emitida pela Associação Nacional de Pós-Graduandos (ANPG), pela União Nacional dos Estudantes (UNE), pela União Brasileira dos Estudantes Secundaristas (Ubes), pelas entidades estaduais e municipais filiadas àquelas, pelos Diretórios Centrais dos Estudantes (DCEs) e pelos Centros e Diretórios Acadêmicos, com prazo de validade renovável a cada ano, conforme modelo único nacionalmente padronizado e publicamente disponibilizado pelas entidades nacionais antes referidas e pelo Instituto Nacional de Tecnologia da Informação (ITI), com certificação digital deste, podendo a carteira de identificação estudantil ter 50% (cinquenta por cento) de características locais". 
    `,
    mostAsked: true,
    category: "meia-entrada",
  },
  {
    title: "Qual o valor dos ingressos corporativos?",
    content: `
      Temos valores e ingressos diferenciados para cada unidade. Caso tenha interesse, informe a unidade e solicite os valores pelo e-mail: marketing@cinesercla.com.br 
    `,
    category: "promocoes-e-beneficios",
  },
  {
    title:
      "Crianças abaixo da classificação indicativa do filme podem entrar na sessão?",
    content: `
      Crianças ou adolescentes que possuem idade abaixo da classificação indicativa do filme podem entrar na sessão desde que o responsável legal pela criança ou adolescente seja maior de idade, o acompanhe na sessão e assine um termo de responsabilidade que fica disponível em nosso site (https://www.cinesercla.com.br/Uploads/upload/classificacao-indicativa.pdf) ou na bilheteria do cinema.
      Essa regra vale para filmes com classificação indicativa até 16 anos. Caso o filme tenha a classificação indicativa de 18 anos, em hipótese alguma será permitia a entrada da crianças mesmo que o responsável legal tenha assinado o termo de responsabilidade.
      Para filmes de classificação indicativa de 18 anos, jovens de 16 e 17 anos de idade podem entrar na sessão desde que o responsável legal o acompanhe e assine o tal termo de responsabilidade.
      Mais informações: http://www.cinesercla.com.br/Home/Leis
    `,
    category: "filmes-e-sessoes",
  },
  {
    title: "Crianças até 2 anos de idade pagam ingresso?",
    content: `
      Apesar de não haver legislação que garanta aos bebês a gratuidade, na Rede Cinesercla, criança até 2 anos de idade (2 anos, 11 meses e 30 dias) não paga entrada desde que assista ao filme sentada no colo do responsável. Limitado a uma criança com entrada gratuita por responsável. Crianças que já completaram 3 anos pagam meia entrada.
    `,
    category: "filmes-e-sessoes",
  },
  {
    title:
      "Quais alimentos são permitidos e quais não são permitidos nas salas do Cinesercla?",
    content: `
      Permitimos a entrada de balas, chocolates, pipocas, água, sucos e refrigerantes comprados ou não em nossa bomboniere.
      Não permitimos bandeja de comida, marmitas, pizzas, sanduíches, sorvetes, milk shakes, batatas frita, chips, bebidas alcoólicas, entre outros.
      Mais informações: http://www.cinesercla.com.br/Home/Leis
    `,
    category: "bomboniere",
  },
  {
    title: "Por que um filme é lançado em uma unidade e em outra não?",
    content: `
      Os lançamentos de filmes nos cinemas são definidos pelas distribuidoras e não pelos exibidores. Com base em estratégias e planejamentos, as distribuidoras escolhem as cidades e locais para lançarem seus filmes.
    `,
    category: "filmes-e-sessoes",
  },
  {
    title: "Por que há mais sessões dubladas na programação?",
    content: `
      A maioria do público que frequenta a Rede Cinesercla tem preferência por filmes dublados. 
    `,
    category: "filmes-e-sessoes",
  },
  {
    title:
      "Por que a data de lançamento de um filme é alterada repentinamente?",
    content: `
      São as distribuidoras quem determinam as datas de lançamento de seus filmes. Portanto, são elas quem também alteram as datas de estreia, muitas vezes, sem prévio aviso. Confira em nossa seção EM BREVE e fique ligado nas próximas atrações.
    `,
    category: "filmes-e-sessoes",
  },
  {
    title: "Aniversariante tem gratuidade?",
    content: `
    Aniversariante tem a gratuidade e ganha pipoca pequena e refrigerante 500ml, se levar para a mesma sessão 24 convidados ( todos pagarão MEIA ENTRADA).
    Além disso, poderá usar o benefício de comprar o COMBO DUPLO 500 para seus convidados.
    Confira na tabela de preços da unidade que você frequenta.
    `,
    mostAsked: true,
    category: "promocoes-e-beneficios",
  },
  {
    title: "Por quanto tempo um filme fica em cartaz?",
    content: `
      Não sabemos por quanto tempo um filme ficará em cartaz. Isso depende de diversos fatores, entre eles, a demanda e novos lançamentos. Para que um novo filme entre em cartaz, um outro deverá sair. Essa troca de filmes você pode acompanhar toda quinta-feira, data em que a programação é atualizada e será válida até quarta-feira na semana seguinte.
    `,
    category: "filmes-e-sessoes",
  },
  {
    title:
      "Por que a programação da unidade que frequento foi alterada sem prévio aviso?",
    content: `
      Infelizmente, imprevistos acontecem e isso pode provocar cancelamentos de ingresso e mudanças na programação. Como temos acordos comerciais com as distribuidoras ou quando há uma grande demanda por um longa, mudanças na programação são feitas sem prévio aviso para que determinado filme não deixe de ser exibido.
    `,
    category: "filmes-e-sessoes",
  },
  {
    title: "Os óculos 3D são higienizados?",
    content: `
      Sim, todos os óculos 3D usados por clientes após as sessões são higienizados. Seguimos o procedimento de limpeza recomendado pelo fabricante dos óculos. A higienização é realizada por uma máquina especial que utilza água filtrada em alta temperatura e um produto específico que ajuda na remoção de sujeiras. O mesmo equipamento realiza a secagem deixando os óculos higienizados e prontos para serem reutilizado por outros clientes.
    `,
    category: "salas-e-tecnologias",
  },
  {
    title: "Quais são as formas de pagamento?",
    content: `
      Aceitamos cartões de débito e crédito (nas bandeiras Visa, Mastercard, Elo e Hypercard) além de dinheiro.
      Para compras via cartões, você pode adquirir ingressos nas bilheteria e auto atendimentos ou por meio do nosso site (verifique no Ingresso Plus as bandeiras aceitas e a taxa de administração cobrada pela mesma).
      Para compras em dinheiro, somente nas bilheterias.
    `,
    category: "formas-de-pagamento",
  },
  {
    title: "O Cinesercla aceita Vale Cultura?",
    content: `
      No momento, não aceitamos nenhuma bandeira de Vale Cultura.
    `,
    category: "formas-de-pagamento",
  },
  {
    title: "Como verifico o preço do ingresso?",
    content: `
      No menu superior, vá em PROGRAMAÇÃO, em seguida clique em CINEMAS, escolha a unidade Cinesercla desejada e clique no botão VER PREÇO.
    `,
    category: "formas-de-pagamento",
  },
  {
    title:
      "Como faço para realizar uma sessão exclusiva em uma das salas do Cinesercla?",
    content: `
      Acesse a seção CORPORATIVO (http://www.cinesercla.com.br/Home/Leis), clique em eventos empresariais, preencha o formulário, envie sua mensagem e aguarde nosso contato. 
    `,
    category: "filmes-e-sessoes",
  },
];
