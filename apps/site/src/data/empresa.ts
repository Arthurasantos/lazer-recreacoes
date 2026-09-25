/**
 * Fonte única dos dados públicos da Lazer Recreações.
 * Só entra aqui o que foi confirmado pelo Arthur ou pelo dono (ver CLAUDE.md → "Dados do negócio").
 */
export const empresa = {
  nome: "Lazer Recreações",
  slogan: "Brincando com Você",
  fundacao: "1995-01-01",
  cidade: "Recife",
  uf: "PE",
  whatsapp: {
    numero: "5581999762591",
    exibicao: "(81) 99976-2591",
    contato: "Paulino",
  },
  instagram: {
    usuario: "lazer.recreacoes",
    url: "https://www.instagram.com/lazer.recreacoes/",
  },
  precoAPartirDe: 350,
  pacoteBase: "1 recreador por 3 horas, no Recife",
} as const;

export type Servico = {
  id: string;
  titulo: string;
  resumo: string;
  /** Complemento da frase "quero um orçamento para ..." */
  pedido: string;
};

/** Tipos de evento vindos do site antigo; lista final ainda a confirmar com o dono. */
export const servicos: Servico[] = [
  {
    id: "aniversario",
    titulo: "Aniversários",
    resumo:
      "O dia mais esperado do ano, com a equipe conduzindo as brincadeiras do início ao fim da festa.",
    pedido: "um aniversário",
  },
  {
    id: "colonia",
    titulo: "Colônias de férias",
    resumo:
      "Dias de férias com programação completa: gincanas, jogos e atividades para cada idade.",
    pedido: "uma colônia de férias",
  },
  {
    id: "em-casa",
    titulo: "Brincadeiras em casa",
    resumo: "A festa vai até a sua casa ou condomínio, sem precisar de salão.",
    pedido: "um dia de brincadeiras em casa",
  },
  {
    id: "casamento",
    titulo: "Espaço kids em casamentos",
    resumo: "A criançada entretida e os pais livres para aproveitar a pista.",
    pedido: "espaço kids em um casamento",
  },
  {
    id: "corporativo",
    titulo: "Eventos corporativos",
    resumo: "Recreação para confraternizações e eventos de empresa com famílias.",
    pedido: "um evento corporativo",
  },
  {
    id: "especial",
    titulo: "Eventos especiais",
    resumo: "Festivais, escolas, feiras e datas comemorativas com muita criança junta.",
    pedido: "um evento especial",
  },
];
