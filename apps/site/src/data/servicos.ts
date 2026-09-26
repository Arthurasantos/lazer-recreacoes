/**
 * Tipos de evento e o conteúdo da página de cada um (fatia 2).
 * Lista vinda do site antigo: a confirmar com o dono (ver CLAUDE.md → Pendentes).
 * Regra: nada de promessa que a Lazer não cumpra. Na dúvida, ficar no genérico e verdadeiro.
 */
import type { Pergunta } from "./faq";
import type { FotoId } from "./fotos";

export type Servico = {
  id: string;
  /** Caminho da página: /{slug} */
  slug: string;
  titulo: string;
  resumo: string;
  /** Complemento da frase "quero um orçamento para ..." */
  pedido: string;
  /** Valor da opção correspondente no formulário "Monte sua festa" */
  tipoFormulario: string;
  pagina: {
    tituloSeo: string;
    descricaoSeo: string;
    /** Título da página; `destaque` recebe a camada dupla */
    h1: string;
    destaque: string;
    apoio: string;
    pontos: { titulo: string; texto: string }[];
    /** ids de data/brincadeiras.ts */
    brincadeiras: string[];
    perguntas: Pergunta[];
    /** Foto real da página; sem ela, aparece o marcador com a descrição em `foto` */
    fotoId?: FotoId;
    /** Descrição da foto ideal para esta página */
    foto: string;
  };
};

export const servicos: Servico[] = [
  {
    id: "aniversario",
    slug: "aniversarios",
    titulo: "Aniversários",
    resumo:
      "O dia mais esperado do ano, com a equipe conduzindo as brincadeiras do início ao fim da festa.",
    pedido: "um aniversário",
    tipoFormulario: "Aniversário",
    pagina: {
      tituloSeo: "Recreação para aniversário infantil no Recife · Lazer Recreações",
      descricaoSeo:
        "Recreadores fardados para o aniversário do seu filho, com brincadeiras pela idade dos convidados. A partir de R$ 350. Peça o orçamento pelo WhatsApp.",
      h1: "O aniversário que as crianças",
      destaque: "vão lembrar.",
      apoio:
        "A equipe da Lazer chega fardada, organiza as brincadeiras pela idade dos convidados e mantém a criançada animada enquanto você recebe a família.",
      pontos: [
        {
          titulo: "Programação pela idade",
          texto:
            "As brincadeiras são escolhidas pela idade do aniversariante e dos convidados, dos pequenininhos aos maiores.",
        },
        {
          titulo: "Do jeito do seu espaço",
          texto: "Salão, buffet, casa ou condomínio: a programação se adapta ao lugar da festa.",
        },
        {
          titulo: "Você livre para receber",
          texto:
            "Enquanto a equipe comanda a brincadeira, você dá atenção aos convidados e aproveita o dia.",
        },
      ],
      brincadeiras: [
        "gincana",
        "caca-ao-tesouro",
        "danca-das-cadeiras",
        "pintura-facial",
        "estatua",
        "batata-quente",
      ],
      perguntas: [
        {
          pergunta: "Quanto custa a recreação de um aniversário?",
          resposta:
            "A partir de R$ 350, com 1 recreador por 3 horas no Recife. O valor final depende do número de crianças, da duração e do local.",
        },
        {
          pergunta: "E se as crianças tiverem idades bem diferentes?",
          resposta:
            "Conte as idades no orçamento. A equipe monta a programação pensando em todas as faixas de idade da festa.",
        },
      ],
      fotoId: "senna",
      foto: "Recreador fardado animando um aniversário",
    },
  },
  {
    id: "colonia",
    slug: "colonias-de-ferias",
    titulo: "Colônias de férias",
    resumo:
      "Dias de férias com programação completa: gincanas, jogos e atividades para cada idade.",
    pedido: "uma colônia de férias",
    tipoFormulario: "Colônia de férias",
    pagina: {
      tituloSeo: "Colônia de férias com recreadores no Recife · Lazer Recreações",
      descricaoSeo:
        "Monte a colônia de férias do seu condomínio, escola ou grupo com a equipe da Lazer: gincanas, jogos e atividades para cada idade.",
      h1: "Férias com",
      destaque: "programação de verdade.",
      apoio:
        "Monte a colônia de férias do seu condomínio, escola ou grupo com a equipe da Lazer: dias cheios de gincanas, jogos e atividades para cada idade.",
      pontos: [
        {
          titulo: "Programação por dia",
          texto:
            "Cada dia com atividades diferentes, alternando brincadeiras de movimento, música e criatividade.",
        },
        {
          titulo: "Grupos por idade",
          texto: "As atividades são pensadas para a faixa de idade das crianças inscritas.",
        },
        {
          titulo: "Equipe fardada",
          texto:
            "Pais e organizadores reconhecem os recreadores de longe, pela farda vermelha, amarela e branca.",
        },
      ],
      brincadeiras: [
        "gincana",
        "circuito-de-obstaculos",
        "caca-ao-tesouro",
        "queimada",
        "danca-criativa",
        "corrida-do-saco",
      ],
      perguntas: [
        {
          pergunta: "Por quantos dias pode ser a colônia?",
          resposta:
            "Você define os dias e o horário, e o orçamento é montado a partir disso. Conte no WhatsApp quantas crianças e quais idades.",
        },
      ],
      fotoId: "futebolTurma",
      foto: "Grupo de crianças em atividade de colônia de férias",
    },
  },
  {
    id: "em-casa",
    slug: "brincadeiras-em-casa",
    titulo: "Brincadeiras em casa",
    resumo: "A festa vai até a sua casa ou condomínio, sem precisar de salão.",
    pedido: "um dia de brincadeiras em casa",
    tipoFormulario: "Brincadeiras em casa",
    pagina: {
      tituloSeo: "Recreação infantil em casa e no condomínio no Recife · Lazer Recreações",
      descricaoSeo:
        "Recreadores da Lazer na sua casa ou condomínio, com brincadeiras que cabem no seu espaço. A partir de R$ 350 no Recife.",
      h1: "A festa vai",
      destaque: "até a sua casa.",
      apoio:
        "Sem salão e sem complicação: a equipe da Lazer leva as brincadeiras para a sua casa, apartamento ou área de lazer do condomínio.",
      pontos: [
        {
          titulo: "Cabe no seu espaço",
          texto:
            "Tem brincadeira para sala de apartamento e para área externa. Conte como é o local e a programação se ajusta.",
        },
        {
          titulo: "Ótimo para poucos convidados",
          texto:
            "Um encontro com os primos, os amigos da escola ou a turma do prédio já vira festa.",
        },
        {
          titulo: "Sem complicação",
          texto:
            "Data, horário e número de crianças combinados pelo WhatsApp. No dia, a equipe chega e comanda.",
        },
      ],
      brincadeiras: [
        "pintura-facial",
        "teatro-de-fantoches",
        "estatua",
        "mestre-mandou",
        "telefone-sem-fio",
        "batata-quente",
      ],
      perguntas: [
        {
          pergunta: "Dá para fazer em apartamento?",
          resposta:
            "Dá. Várias brincadeiras cabem em espaço pequeno. No catálogo, filtre por “espaço pequeno” para ver ideias.",
        },
      ],
      fotoId: "risadas",
      foto: "Crianças brincando em casa ou no salão do condomínio",
    },
  },
  {
    id: "casamento",
    slug: "espaco-kids-casamentos",
    titulo: "Espaço kids em casamentos",
    resumo: "A criançada entretida e os pais livres para aproveitar a pista.",
    pedido: "espaço kids em um casamento",
    tipoFormulario: "Casamento",
    pagina: {
      tituloSeo: "Espaço kids e recreação para casamentos no Recife · Lazer Recreações",
      descricaoSeo:
        "Recreadores para o espaço kids do seu casamento: crianças entretidas e convidados livres para celebrar. Orçamento pelo WhatsApp.",
      h1: "Crianças felizes,",
      destaque: "pais na pista.",
      apoio:
        "Com a Lazer cuidando do espaço kids, as crianças se divertem com a equipe e os convidados aproveitam a cerimônia e a festa.",
      pontos: [
        {
          titulo: "Cerimônia tranquila",
          texto:
            "Com as crianças entretidas, os pais conseguem assistir à cerimônia e aproveitar a recepção.",
        },
        {
          titulo: "Brincadeiras para o traje de festa",
          texto:
            "Dá para priorizar atividades mais calmas, como pintura facial, música e teatro, para ninguém sair amarrotado.",
        },
        {
          titulo: "Combinado com o cerimonial",
          texto:
            "Horários, espaço e número de crianças são acertados antes, para a equipe entrar no ritmo do evento.",
        },
      ],
      brincadeiras: [
        "pintura-facial",
        "teatro-de-fantoches",
        "cantigas-e-musicas",
        "danca-criativa",
        "estatua",
        "passa-o-anel",
      ],
      perguntas: [
        {
          pergunta: "A equipe fica o casamento todo?",
          resposta:
            "O tempo de recreação é definido no orçamento, de acordo com o horário do evento e o número de crianças.",
        },
      ],
      foto: "Espaço kids montado em casamento",
    },
  },
  {
    id: "corporativo",
    slug: "eventos-corporativos",
    titulo: "Eventos corporativos",
    resumo: "Recreação para confraternizações e eventos de empresa com famílias.",
    pedido: "um evento corporativo",
    tipoFormulario: "Evento corporativo",
    pagina: {
      tituloSeo: "Recreação infantil para eventos de empresa no Recife · Lazer Recreações",
      descricaoSeo:
        "Recreadores para confraternizações, dia da família e eventos de empresa com crianças. Orçamento pelo WhatsApp.",
      h1: "O evento da empresa",
      destaque: "com a família junto.",
      apoio:
        "Confraternizações, dia da família e festas de fim de ano ficam melhores quando as crianças também têm programação. A Lazer cuida disso.",
      pontos: [
        {
          titulo: "Para grupos grandes",
          texto: "O tamanho da equipe é definido pelo número de crianças esperado e pelas idades.",
        },
        {
          titulo: "Equipe identificada",
          texto:
            "Recreadores fardados, fáceis de achar no meio do evento pelos pais e pela organização.",
        },
        {
          titulo: "Programação sob medida",
          texto: "Gincanas, música e atividades criativas encaixadas no cronograma do seu evento.",
        },
      ],
      brincadeiras: [
        "gincana",
        "cabo-de-guerra",
        "circuito-de-obstaculos",
        "pintura-facial",
        "danca-das-cadeiras",
        "caca-ao-tesouro",
      ],
      perguntas: [
        {
          pergunta: "Vocês atendem eventos fora do Recife?",
          resposta:
            "Atendemos onde o evento estiver. A equipe sai do Recife e da região metropolitana, e o deslocamento entra no orçamento.",
        },
      ],
      foto: "Recreação em evento de empresa",
    },
  },
  {
    id: "especial",
    slug: "eventos-especiais",
    titulo: "Eventos especiais",
    resumo: "Festivais, escolas, feiras e datas comemorativas com muita criança junta.",
    pedido: "um evento especial",
    tipoFormulario: "Outro evento",
    pagina: {
      tituloSeo: "Recreação para festivais, escolas e datas especiais · Lazer Recreações",
      descricaoSeo:
        "Recreadores para Dia das Crianças, festivais, feiras e eventos em escolas. A Lazer anima eventos no Recife desde 1995.",
      h1: "Muita criança junta?",
      destaque: "A gente anima.",
      apoio:
        "Dia das Crianças, festivais, eventos de escola e datas comemorativas: a Lazer leva recreação para eventos com muita criança ao mesmo tempo.",
      pontos: [
        {
          titulo: "Datas que lotam",
          texto:
            "Dia das Crianças, férias e fim de ano enchem a agenda. Quanto antes o contato, melhor.",
        },
        {
          titulo: "Estações de brincadeira",
          texto:
            "Com equipe maior, dá para ter várias atividades acontecendo ao mesmo tempo, em áreas diferentes.",
        },
        {
          titulo: "Na estrada desde 1995",
          texto: "Experiência de sobra em eventos de todos os tamanhos, no Recife e fora dele.",
        },
      ],
      brincadeiras: [
        "gincana",
        "pintura-facial",
        "amarelinha-gigante",
        "bambole",
        "circuito-de-obstaculos",
        "pega-pega-colorido",
      ],
      perguntas: [
        {
          pergunta: "Qual o tamanho da equipe para um evento grande?",
          resposta:
            "Depende do número de crianças, das idades e da duração. Conte esses dados no WhatsApp e a equipe monta a proposta.",
        },
      ],
      fotoId: "equipeCarnaval",
      foto: "Evento com muitas crianças e várias estações de brincadeira",
    },
  },
];

export const servicoPorSlug = (slug: string) => servicos.find((s) => s.slug === slug);
