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
