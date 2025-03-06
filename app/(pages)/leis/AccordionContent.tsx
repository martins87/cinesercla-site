import Typography from "@/app/components/Typography";
import Button from "@/app/components/ui/Button";
import CenteredElement from "@/app/components/ui/CenteredElement";
import Link from "next/link";

const ClassificacaoIndicativa = () => {
  return (
    <CenteredElement className="gap-y-10" direction="col">
      <Typography weight="400">
        Clique em &quot;Veja mais&quot; para mais informações sobre a
        Classificação indicativa, e &quot;Imprimir&quot; para ter acesso ao
        relatório de responsabilidade, para o caso de pais e/ou responsáveis que
        desejam permitir o acesso de crianças e adolescentes ao conteúdo
        classificado como inapropriado.
      </Typography>
      <CenteredElement className="gap-x-4" justify="start">
        <Button label="VEJA MAIS" />
        <Button label="IMPRIMIR" secondary />
      </CenteredElement>
    </CenteredElement>
  );
};

const CriancasAte2Anos = () => {
  return (
    <CenteredElement className="gap-y-10" direction="col">
      <Typography weight="400">
        Apesar de não haver legislação que garanta aos bebês a gratuidade, na
        Rede Cinesercla, crianças até 2 anos de idade (2 anos, 11 meses e 30
        dias) não pagam entrada desde que assistam ao filme sentadas no colo do
        responsável. Limitado a uma criança com entrada gratuita por
        responsável. Crianças que já completaram 3 anos pagam meia entrada.
      </Typography>
      <CenteredElement className="gap-x-4" justify="start">
        <Button label="VEJA MAIS" />
        <Button label="IMPRIMIR" secondary />
      </CenteredElement>
    </CenteredElement>
  );
};

const LeiDaMeiaEntrada = () => {
  return (
    <CenteredElement className="gap-y-4" items="start" direction="col">
      <Link
        href="http://legislacao.planalto.gov.br/legisla/legislacao.nsf/Viw_Identificacao/lei%2012.933-2013?OpenDocument"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Typography className="text-blue-300" weight="400">
          LEI Nº 12.933, DE 26 DE DEZEMBRO DE 2013
        </Typography>
      </Link>
      <Link
        href="http://legislacao.planalto.gov.br/legisla/legislacao.nsf/Viw_Identificacao/DEC%208.537-2015?OpenDocument"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Typography className="text-blue-300" weight="400">
          DECRETO Nº 8.537, DE 5 DE OUTUBRO DE 2015
        </Typography>
      </Link>
      <Typography weight="400">
        Dispõe sobre o benefício do pagamento de meia-entrada para estudantes,
        idosos, pessoas com deficiência (incluindo seu acompanhante) e jovens de
        15 a 29 anos comprovadamente carentes em espetáculos artístico-culturais
        e esportivos, e revoga a Medida Provisória no 2.208, de 17 de agosto de
        2001.
      </Typography>
      <CenteredElement className="gap-x-4" justify="start">
        <Button label="VEJA MAIS" />
        <Button label="IMPRIMIR" secondary />
      </CenteredElement>
    </CenteredElement>
  );
};

const AlimentosNaoSimilares = () => {
  return (
    <CenteredElement className="gap-y-4" items="start" direction="col">
      <Typography weight="400">
        O cinema é um espaço particular e, portanto, estabelecemos normas
        próprias para seu acesso. A atividade principal de um cinema é a
        exibição de filmes, não podendo ser uma extensão da praça de alimentação
        (a praça possui estrutura própria para alimentação). Informamos que é
        permitida a entrada de alimentos similares aos comercializados pela Rede
        Cinesercla, comprados ou não em nossas bombonieres, como refrigerantes,
        pipocas, água, sucos, balas e chocolates. Não configurando assim venda
        casada. Tal norma é exclusivamente em função da higienização do local,
        aromatização do ambiente e segurança. Restringimos a entrada de
        determinados alimentos incompatíveis com o local, como sanduíches,
        sorvetes, pizzas, pasteis, comidas gordurosas, bebidas alcoólicas ou
        qualquer outro alimento ou bebida em recipiente inadequado (como exemplo
        garrafas de vidro). Determinados tipos de alimentos quando caem nas
        poltronas ou no chão demandam uma limpeza mais atenciosa, às vezes com a
        utilização de produtos específicos, o que, além de elevar o custo da
        limpeza, não daria para ser feito no curto intervalo entre as sessões e
        deixaria suja a nossa a sala de exibição. Alguns alimentos possuem
        fortes odores que prejudicam o sistema de ar condicionado. A restrição
        do consumo de certos alimentos e bebidas é necessária para o bom
        funcionamento do cinema. É de direito dos clientes poderem adentrar em
        uma sala higienizada, sem correr risco de se aborrecer pelo consumo de
        produtos inadequados ou então acondicionados de maneira imprópria. Temos
        como princípio o conforto e bem-estar de todos os clientes.
      </Typography>
      <Link
        href="http://presrepublica.jusbrasil.com.br/legislacao/91585/codigo-de-defesa-do-consumidor-lei-8078-90"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Typography className="text-blue-300" weight="400">
          CÓDIGO DE DEFESA DO CONSUMIDOR
        </Typography>
      </Link>
      <CenteredElement className="gap-x-4" justify="start">
        <Button label="VEJA MAIS" />
        <Button label="IMPRIMIR" secondary />
      </CenteredElement>
    </CenteredElement>
  );
};

export {
  AlimentosNaoSimilares,
  ClassificacaoIndicativa,
  CriancasAte2Anos,
  LeiDaMeiaEntrada,
};
