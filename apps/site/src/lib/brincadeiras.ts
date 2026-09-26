import type { Brincadeira, Categoria, Espaco } from "../data/brincadeiras";

export type Faixa = { id: string; rotulo: string; min: number; max: number };

/** Faixas de idade do filtro do catálogo. */
export const faixas: Faixa[] = [
  { id: "2-4", rotulo: "2 a 4 anos", min: 2, max: 4 },
  { id: "5-7", rotulo: "5 a 7 anos", min: 5, max: 7 },
  { id: "8-12", rotulo: "8 a 12 anos", min: 8, max: 12 },
];

export type Filtro = {
  faixa?: string;
  espaco?: Espaco;
  categoria?: Categoria;
};

/** A brincadeira serve para a faixa se as idades se sobrepõem. */
export function serveParaFaixa(b: Brincadeira, faixa: Faixa): boolean {
  return b.idadeMin <= faixa.max && b.idadeMax >= faixa.min;
}

/**
 * Espaço pequeno mostra só o que cabe em espaço pequeno.
 * Espaço amplo mostra tudo, porque o que cabe no pequeno também cabe no amplo.
 */
export function serveParaEspaco(b: Brincadeira, espaco: Espaco): boolean {
  return espaco === "amplo" || b.espaco === "pequeno";
}

export function filtrarBrincadeiras(lista: Brincadeira[], filtro: Filtro): Brincadeira[] {
  const faixa = faixas.find((f) => f.id === filtro.faixa);
  return lista.filter(
    (b) =>
      (!faixa || serveParaFaixa(b, faixa)) &&
      (!filtro.espaco || serveParaEspaco(b, filtro.espaco)) &&
      (!filtro.categoria || b.categoria === filtro.categoria),
  );
}

export function descreverIdade(b: Brincadeira): string {
  return `${b.idadeMin} a ${b.idadeMax} anos`;
}

export function descreverEspaco(b: Brincadeira): string {
  return b.espaco === "pequeno" ? "cabe em espaço pequeno" : "pede espaço amplo";
}
