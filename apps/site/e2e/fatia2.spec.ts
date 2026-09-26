import { expect, test } from "@playwright/test";
import { servicos } from "../src/data/servicos";

test.describe("páginas de evento", () => {
  for (const s of servicos) {
    test(`/${s.slug} fala do evento em todos os CTAs`, async ({ page }) => {
      const resposta = await page.goto(`/${s.slug}`);
      expect(resposta?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("h1")).toContainText(s.pagina.destaque);

      // Hero, cabeçalho e CTA final levam a mensagem do evento
      for (const seletor of [
        `[data-evento="whatsapp_pagina_${s.id}"]`,
        '[data-evento="whatsapp_cabecalho"]',
        '[data-evento="whatsapp_cta_final"]',
      ]) {
        const href = await page.locator(seletor).getAttribute("href");
        expect(new URL(href!).searchParams.get("text")).toContain(s.pedido);
      }

      // Formulário já vem com o tipo do evento marcado
      await expect(page.getByRole("radio", { name: s.tipoFormulario })).toBeChecked();
    });
  }

  test("o card da home leva à página do evento", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /Ver como funciona: aniversários/i }).click();
    await expect(page).toHaveURL(/\/aniversarios$/);
  });

  test("o formulário da página de evento envia o tipo marcado", async ({ page, context }) => {
    await page.goto("/espaco-kids-casamentos#monte-sua-festa");
    await page.locator('input[name="data"]').fill("2030-05-20");
    await page.locator('input[name="local"]').fill("Olinda");
    await context.route("https://wa.me/**", (rota) => rota.fulfill({ body: "ok" }));
    const [aba] = await Promise.all([
      context.waitForEvent("page"),
      page.getByRole("button", { name: "Enviar pelo WhatsApp" }).click(),
    ]);
    expect(new URL(aba.url()).searchParams.get("text")).toContain("• Evento: Casamento");
  });
});

test.describe("catálogo de brincadeiras", () => {
  test("filtra por idade e espaço e guarda na URL", async ({ page }) => {
    await page.goto("/brincadeiras");
    const visiveis = page.locator("[data-brincadeira]:visible");
    const total = await visiveis.count();
    expect(total).toBe(24);

    await page.getByRole("radio", { name: "2 a 4 anos" }).check();
    await page.getByRole("radio", { name: "Espaço pequeno" }).check();
    const filtradas = await visiveis.count();
    expect(filtradas).toBeGreaterThan(0);
    expect(filtradas).toBeLessThan(total);
    await expect(page.locator("[data-contagem]")).toHaveText(
      `${filtradas} de ${total} brincadeiras`,
    );
    await expect(page).toHaveURL(/idade=2-4/);
    await expect(page).toHaveURL(/espaco=pequeno/);
    // Queimada pede espaço amplo e é para maiores
    await expect(page.locator('[data-brincadeira="queimada"]')).toBeHidden();
  });

  test("aplica filtros vindos de um link compartilhado", async ({ page }) => {
    await page.goto("/brincadeiras?idade=8-12&espaco=pequeno&tipo=movimento");
    await expect(page.getByRole("radio", { name: "8 a 12 anos" })).toBeChecked();
    await expect(page.locator('[data-brincadeira="bambole"]')).toBeVisible();
    await expect(page.locator('[data-brincadeira="queimada"]')).toBeHidden();
  });

  test("mostra estado vazio e permite limpar", async ({ page }) => {
    // Gincana e aventura para 2 a 4 anos em espaço pequeno: nenhuma no catálogo
    await page.goto("/brincadeiras?idade=2-4&espaco=pequeno&tipo=aventura");
    await expect(page.locator("[data-vazio]")).toBeVisible();
    await page.getByRole("button", { name: "Limpar filtros" }).click();
    await expect(page.locator("[data-brincadeira]:visible")).toHaveCount(24);
  });

  test("monta a lista e envia pelo WhatsApp", async ({ page }) => {
    await page.goto("/brincadeiras");
    await page.getByRole("button", { name: "Quero na festa: Gincana" }).click();
    await page.getByRole("button", { name: "Quero na festa: Pintura facial" }).click();
    await expect(page.locator("[data-lista-texto]")).toContainText("2 brincadeiras");

    const href = await page.locator("[data-lista-enviar]").getAttribute("href");
    const texto = new URL(href!).searchParams.get("text")!;
    expect(texto).toContain("• Gincana");
    expect(texto).toContain("• Pintura facial");

    // Desmarcar tira da lista
    await page.getByRole("button", { name: "Quero na festa: Gincana" }).click();
    await expect(page.locator("[data-lista-texto]")).toContainText("1 brincadeira");
  });
});

test("sitemap lista todas as páginas públicas", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  for (const s of servicos) expect(xml).toContain(`/${s.slug}</loc>`);
  expect(xml).toContain("/brincadeiras</loc>");
  expect(xml).toContain("/privacidade</loc>");
});
