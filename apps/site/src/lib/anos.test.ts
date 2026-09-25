import { describe, expect, it } from "vitest";
import { anosDesde } from "./anos";

describe("anosDesde", () => {
  it("conta 31 anos em 2026 para fundação em 01/01/1995", () => {
    expect(anosDesde("1995-01-01", new Date(2026, 8, 25))).toBe(31);
  });

  it("vira o ano exatamente no aniversário da empresa", () => {
    expect(anosDesde("1995-01-01", new Date(2026, 11, 31))).toBe(31);
    expect(anosDesde("1995-01-01", new Date(2027, 0, 1))).toBe(32);
  });

  it("respeita aniversários no meio do ano", () => {
    expect(anosDesde("2000-06-15", new Date(2026, 5, 14))).toBe(25);
    expect(anosDesde("2000-06-15", new Date(2026, 5, 15))).toBe(26);
  });
});
