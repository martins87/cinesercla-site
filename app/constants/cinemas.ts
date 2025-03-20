import { Estado } from "../types/Estado";

export const cinemaData: Estado[] = [
  {
    id: "ba",
    preposition: "na",
    estado: "Bahia",
    cidades: [
      {
        id: "feira-de-santana",
        cidade: "Feira de Santana",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-america-outlet",
            cinema: "AMÉRICA OUTLET",
            address:
              "Av. Deputado Luis Eduardo Magalhães, s/n - BR 324 - Limoeiro, Feira de Santana - BA, CEP: 44135-00",
            capacity: "5 salas - FECHADO",
            contact: "(75) 3022-9954",
            opening: "15/11/2017",
          },
          {
            id: "cinesercla-shopping-avenida",
            cinema: "SHOPPING AVENIDA",
            address:
              "Avenida Nóide Ferreira De Cerqueira, 5710 - Feira De Santana/BA CEP:44085-052",
            capacity:
              "5 salas - sendo 2 salas 3D e 1 sala VIP - 778 lugares numerados",
            contact: "(75) 3022-9927",
            opening: "07/11/2019",
          },
        ],
      },
      {
        id: "salvador",
        cidade: "Salvador",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-cajazeiras",
            cinema: "SHOPPING CAJAZEIRAS",
            address:
              "Estrada do Coqueiro Grande s/n, loja 229 - Bairro Cajazeiras - Salvador-BA - CEP: 41.343-855",
            capacity: "4 salas - 516 lugares numerados",
            contact: "(71) 3500-5540",
            opening: "21/04/2016",
          },
        ],
      },
      {
        id: "teixeira-de-freitas",
        cidade: "Teixeira de Freitas",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-teixeira-de-freitas",
            cinema: "PÁTIOMIX TEIXEIRA DE FREITAS",
            address:
              "Avenida São Paulo, nº 2575, Loja 1024 - Bairro Vila Verde, Teixeira de Freitas/BA - CEP 45.990-678",
            capacity: "4 salas - 645 lugares numerados",
            contact: "(73) 3311-1056 / (73) 3610-1500",
            opening: "23/10/2014",
          },
        ],
      },
    ],
  },
  {
    id: "es",
    preposition: "no",
    estado: "Espírito Santo",
    cidades: [
      {
        id: "linhares",
        cidade: "Linhares",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-linhares",
            cinema: "SHOPPING PÁTIOMIX LINHARES",
            address:
              "Shopping Pátio Mix Linhares - Avenida Cerejeiras, 300 - Bairro Movelar - Linhares - ES",
            capacity: "4 salas - 640 lugares numerados",
            contact: "(27) 3048-0530",
            opening: "12/07/2013",
          },
        ],
      },
      {
        id: "serra",
        cidade: "Serra",
        preposition: "na",
        cinemas: [
          {
            id: "cinesercla-montserrat",
            cinema: "SHOPPING MONTSERRAT",
            address:
              "Avenida Eldes Scherrer de Souza, 2162 - Bairro Colina de Laranjeiras - Serra - ES",
            capacity: "5 salas - 977 lugares numerados",
            contact: "(27) 3221-5240",
            opening: "17/01/2014",
          },
        ],
      },
    ],
  },
  {
    id: "mg",
    estado: "Minas Gerais",
    preposition: "em",
    cidades: [
      {
        id: "belo-horizonte",
        cidade: "Belo Horizonte",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-norte",
            cinema: "SHOPPING NORTE",
            address:
              "Av. Vilarinho, 1300 - Lojas 88-89-90 - Venda Nova - Belo Horizonte - MG - CEP 31615-250",
            capacity: "5 salas - 629 lugares numerados",
            contact: "(31) 3451-1626",
            opening: "26/01/1998",
          },
        ],
      },
      {
        id: "contagem",
        cidade: "Contagem",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-big",
            cinema: "BIG SHOPPING",
            address:
              "Av. João César de Oliveira, 1275 - Loja 227 - Jardim Eldorado - Contagem - MG - CEP 32315-000",
            capacity: "5 salas - 832 lugares numerados",
            contact: "(31) 3565-2283",
            opening: "15/10/1994",
          },
        ],
      },
      {
        id: "governador-valadares",
        cidade: "Governador Valadares",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-gv",
            cinema: "GV SHOPPING",
            address:
              "Av. Sete de Setembro 3500 - loja 145 - Bairro Centro - Governador Valadares - MG - CEP 35010-171",
            capacity: "4 salas - 554 lugares numerados",
            contact: "(33) 3021-1480",
            opening: "12/07/2013",
          },
        ],
      },
      {
        id: "ribeirao-das-neves",
        cidade: "Ribeirão das Neves",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-justinopolis",
            cinema: "SHOPPING JUSTINÓPOLIS",
            address:
              "Av. Denise Cristina da Rocha, 807 - São Januário (Justinópolis), Ribeirão das Neves - MG, 33900-020",
            capacity: "4 salas - Em Instalação",
            contact: "(31) 3213-6888",
            opening: "Em breve",
          },
        ],
      },
    ],
  },
  {
    id: "pb",
    preposition: "na",
    estado: "Paraíba",
    cidades: [
      {
        id: "campina-grande",
        cidade: "Campina Grande",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-campina-grande",
            cinema: "PARTAGE CAMPINA GRANDE",
            address:
              "Av. Prefeito Severino Bezerra Cabral, 1050 - Loja 3001 - Piso L01 - Bairro Catolé - Campina Grande - PB - CEP: 58410-185",
            capacity: "5 salas - 1134 lugares numerados",
            contact: "(83) 3113-9224",
            opening: "01/07/2000",
          },
        ],
      },
      {
        id: "joao-pessoa",
        cidade: "João Pessoa",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-tambia",
            cinema: "SHOPPING TAMBIA",
            address:
              "Rua Deputado Odon Bezerra, 184, Piso Ipê - Loja 260 - Bairro Tambiá - João Pessoa - PB - CEP 58020-500",
            capacity: "6 salas - 824 lugares numerados",
            contact: "(83) 3578-7408",
            opening: " 12/12/2003",
          },
        ],
      },
    ],
  },
  {
    id: "rj",
    preposition: "no",
    estado: "Rio de Janeiro",
    cidades: [
      {
        id: "itaguai",
        cidade: "Itaguaí",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-itaguai",
            cinema: "SHOPPING PÁTIOMIX COSTA VERDE",
            address:
              "RODOVIA RIO SANTOS, S/N - LOJA 1061 - SHOPPING PÁTIOMIX - ITAGUAÍ - RJ",
            capacity: "4 salas - 581 lugares numerados",
            contact: "(21) 3781-8694",
            opening: "08/12/2010",
          },
        ],
      },
      {
        id: "nilopolis",
        cidade: "Nilópolis",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-nilopolis",
            cinema: "SHOPPING NILÓPOLIS SQUARE",
            address:
              "Rua Professor Alfredo Gonçalves Figueiras, 100 - Centro - Nilópolis - RJ - CEP 26525-060",
            capacity: "3 salas - 404 lugares numerados",
            contact: "(21) 2692-9121",
            opening: "30/11/1999",
          },
        ],
      },
    ],
  },
  {
    id: "sp",
    preposition: "em",
    estado: "São Paulo",
    cidades: [
      {
        id: "osasco",
        cidade: "Osasco",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-osasco",
            cinema: "OSASCO PLAZA SHOPPING",
            address:
              "Rua Antônio Agú, 300 - Loja 11/160 - Centro - Osasco - SP - CEP 06093-000",
            capacity: "4 salas - 597 lugares numerados",
            contact: "(11) 4624-5088",
            opening: "25/08/2012",
          },
        ],
      },
    ],
  },
  {
    id: "se",
    preposition: "em",
    estado: "Sergipe",
    cidades: [
      {
        id: "aracaju",
        cidade: "Aracaju",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-aracaju",
            cinema: "SHOPPING PRAIA SUL",
            address:
              "Av. Melicio Machado nº 4880 - Bairro Aruana - Aracaju/SE - CEP 49038-443",
            capacity: "5 salas - Em Instalação",
            contact: "(31) 3213-6888",
            opening: "Em Breve - Outubro - 2025",
          },
        ],
      },
      {
        id: "nossa-senhora-do-socorro",
        cidade: "Nossa Senhora do Socorro",
        preposition: "em",
        cinemas: [
          {
            id: "cinesercla-premio",
            cinema: "SHOPPING PREMIO",
            address:
              "Avenida Coletora A, s/n Loja 122 - Conjunto Marcos Freire I - Nossa Senhora do Socorro - SE - CEP 49155-890",
            capacity: "4 salas - 807 lugares numerados",
            contact: "(79) 3256-8545",
            opening: "25/01/2013",
          },
        ],
      },
    ],
  },
];
