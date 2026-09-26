import { describe, expect, it } from "vitest";
import { brincadeiras, type Brincadeira } from "../data/brincadeiras";
import { servicos } from "../data/servicos";
import { faixas, filtrarBrincadeiras, serveParaEspaco, serveParaFaixa } from "./brincadeiras";

const exemplo = (parcial: Partial<Brincadeira>): Brincadeira => ({
  id: "x",
  nome: "X",
  descricao: "",
  categoria: "classicas",
  idadeMin: 4,
  idadeMax: 8,
  espaco: "pequeno",
  ...parcial,
});

describe("serveParaFaixa", () => {
  const [pequenos, meio, maiores] = faixas;

  it("aceita sobreposição parcial de idades", () => {
    expect(serveParaFaixa(exemplo({ idadeMin: 4, idadeMax: 8 }), pequenos)).toBe(true);
    expect(serveParaFaixa(exemplo({ idadeMin: 4, idadeMax: 8 }), maiores)).toBe(true);
  });

  it("recusa quando não há idade em comum", () => {
    expect(serveParaFaixa(exemplo({ idadeMin: 7, idadeMax: 12 }), pequenos)).toBe(false);
    expect(serveParaFaixa(exemplo({ idadeMin: 2, idadeMax: 4 }), meio)).toBe(false);
  });
});

describe("serveParaEspaco", () => {
  it("espaço pequeno só aceita o que cabe em espaço pequeno", () => {
    expect(serveParaEspaco(exemplo({ espaco: "pequeno" }), "pequeno")).toBe(true);
    expect(serveParaEspaco(exemplo({ espaco: "amplo" }), "pequeno")).toBe(false);
  });

  it("espaço amplo aceita tudo", () => {
    expect(serveParaEspaco(exemplo({ espaco: "pequeno" }), "amplo")).toBe(true);
    expect(serveParaEspaco(exemplo({ espaco: "amplo" }), "amplo")).toBe(true);
  });
});

describe("filtrarBrincadeiras", () => {
  it("sem filtro devolve tudo", () => {
    expect(filtrarBrincadeiras(brincadeiras, {})).toHaveLength(brincadeiras.length);
  });

  it("combina idade, espaço e categoria", () => {
    const r = filtrarBrincadeiras(brincadeiras, {
      faixa: "2-4",
      espaco: "pequeno",
      categoria: "musica",
    });
    expect(r.length).toBeGreaterThan(0);
    for (const b of r) {
      expect(b.categoria).toBe("musica");
      expect(b.espaco).toBe("pequeno");
      expect(b.idadeMin).toBeLessThanOrEqual(4);
    }
  });

  it("ignora faixa desconhecida", () => {
    expect(filtrarBrincadeiras(brincadeiras, { faixa: "99" })).toHaveLength(brincadeiras.length);
  });
});

describe("integridade do catálogo", () => {
  it("ids são únicos e as idades fazem sentido", () => {
    const ids = brincadeiras.map((b) => b.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const b of brincadeiras) expect(b.idadeMin).toBeLessThanOrEqual(b.idadeMax);
  });

  it("toda brincadeira recomendada nas páginas de evento existe no catálogo", () => {
    const ids = new Set(brincadeiras.map((b) => b.id));
    for (const s of servicos) for (const id of s.pagina.brincadeiras) expect(ids).toContain(id);
  });

  it("slugs das páginas de evento são únicos", () => {
    const slugs = servicos.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
