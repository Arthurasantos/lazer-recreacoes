import { describe, expect, it } from "vitest";
import {
  formatarData,
  linkWhatsApp,
  mensagemGeral,
  mensagemOrcamento,
  mensagemServico,
} from "./whatsapp";

describe("linkWhatsApp", () => {
  it("usa o número comercial no formato internacional", () => {
    expect(linkWhatsApp()).toBe("https://wa.me/5581999762591");
  });

  it("codifica acentos, quebras de linha e símbolos", () => {
    const url = new URL(linkWhatsApp("Olá! Festa às 15h\n• 20 crianças & bolo"));
    expect(url.searchParams.get("text")).toBe("Olá! Festa às 15h\n• 20 crianças & bolo");
  });

  it("ignora mensagem vazia", () => {
    expect(linkWhatsApp("   ")).toBe("https://wa.me/5581999762591");
  });
});

describe("mensagens contextuais", () => {
  it("mensagem geral cita o site", () => {
    expect(mensagemGeral()).toBe(
      "Olá, Paulino! Vim pelo site da Lazer e quero um orçamento para uma festa.",
    );
  });

  it("mensagem por serviço", () => {
    expect(mensagemServico("um aniversário")).toBe(
      "Olá, Paulino! Vim pelo site da Lazer e quero um orçamento para um aniversário.",
    );
  });
});

describe("formatarData", () => {
  it("converte ISO para o formato brasileiro sem erro de fuso", () => {
    expect(formatarData("2026-01-01")).toBe("01/01/2026");
  });

  it("devolve o texto original se não for ISO", () => {
    expect(formatarData("sábado que vem")).toBe("sábado que vem");
  });
});

describe("mensagemOrcamento", () => {
  it("monta a mensagem completa", () => {
    expect(
      mensagemOrcamento({
        nome: "Ana",
        tipo: "Aniversário",
        data: "2026-10-12",
        local: "Boa Viagem, Recife",
        criancas: 20,
        idades: "de 4 a 8 anos",
      }),
    ).toBe(
      [
        "Olá, Paulino! Vim pelo site da Lazer. Meu nome é Ana e quero um orçamento:",
        "• Evento: Aniversário",
        "• Data: 12/10/2026",
        "• Local: Boa Viagem, Recife",
        "• Crianças (aprox.): 20",
        "• Idades: de 4 a 8 anos",
      ].join("\n"),
    );
  });

  it("omite campos vazios e funciona sem nome", () => {
    expect(mensagemOrcamento({ tipo: "Casamento", local: "  ", idades: "" })).toBe(
      "Olá, Paulino! Vim pelo site da Lazer e quero um orçamento:\n• Evento: Casamento",
    );
  });
});
