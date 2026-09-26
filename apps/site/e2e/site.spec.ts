import { expect, test } from "@playwright/test";

const NUMERO = "https://wa.me/5581999762591";

test.describe("home", () => {
  test("tem um único h1, título e descrição", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/Lazer Recreações/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /R\$ 350/);
  });

  test("todos os links de WhatsApp apontam para o número comercial", async ({ page }) => {
    await page.goto("/");
    const links = await page
      .locator('a[href*="wa.me"]')
      .evaluateAll((as) => as.map((a) => (a as HTMLAnchorElement).href));
    expect(links.length).toBeGreaterThan(8);
    for (const href of links) expect(href.startsWith(NUMERO)).toBe(true);
  });

  test("cada tipo de evento tem mensagem contextual", async ({ page }) => {
    await page.goto("/");
    const href = await page
      .locator('[data-evento="whatsapp_servico_casamento"]')
      .getAttribute("href");
    expect(decodeURIComponent(href!)).toContain("espaço kids em um casamento");
  });

  test("não tem rolagem horizontal", async ({ page }) => {
    await page.goto("/");
    const [scroll, largura] = await page.evaluate(() => [
      document.documentElement.scrollWidth,
      window.innerWidth,
    ]);
    expect(scroll).toBeLessThanOrEqual(largura);
  });

  test("mostra os anos de tradição calculados a partir de 1995", async ({ page }) => {
    await page.goto("/");
    const anos = new Date().getFullYear() - 1995;
    await expect(page.locator("[data-anos]").first()).toHaveText(String(anos));
  });

  test("fotos reais têm texto alternativo e a do topo carrega primeiro, em AVIF", async ({
    page,
  }) => {
    await page.goto("/");
    const semAlt = await page.locator("main img:not([alt]), main img[alt='']").count();
    expect(semAlt).toBe(0);
    const topo = page.locator("[data-hero] img.foto");
    await expect(topo).toHaveAttribute("fetchpriority", "high");
    await expect(topo).toHaveAttribute("loading", "eager");
    await expect(page.locator("[data-hero] picture source[type='image/avif']")).toHaveCount(1);
    expect(
      await topo.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0),
    ).toBe(true);
  });

  test("não há erros no console", async ({ page }) => {
    const erros: string[] = [];
    page.on("pageerror", (e) => erros.push(String(e)));
    page.on("console", (m) => m.type() === "error" && erros.push(m.text()));
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(erros).toEqual([]);
  });
});

test.describe("monte sua festa", () => {
  test("valida os obrigatórios antes de abrir o WhatsApp", async ({ page }) => {
    await page.goto("/#monte-sua-festa");
    await page.getByRole("button", { name: "Enviar pelo WhatsApp" }).click();
    await expect(page.locator("#erro-tipo")).toBeVisible();
    await expect(page.locator("#erro-data")).toBeVisible();
    await expect(page.locator("#erro-local")).toBeVisible();
  });

  test("gera a mensagem completa e abre o WhatsApp", async ({ page, context }) => {
    await page.goto("/#monte-sua-festa");
    await page.getByRole("radio", { name: "Aniversário" }).check();
    await page.locator('input[name="data"]').fill("2030-10-12");
    await page.locator('input[name="local"]').fill("Boa Viagem, Recife");
    await page.getByRole("button", { name: "Mais 5 crianças" }).click();
    await page.locator('input[name="idades"]').fill("de 4 a 8 anos");
    await page.locator('input[name="nome"]').fill("Ana");

    const previa = page.locator("[data-monte-previa]");
    await expect(previa).toContainText("• Data: 12/10/2030");
    await expect(previa).toContainText("• Crianças (aprox.): 20");

    // Intercepta a abertura para não depender de rede externa
    await context.route("https://wa.me/**", (rota) => rota.fulfill({ body: "ok" }));
    const [aba] = await Promise.all([
      context.waitForEvent("page"),
      page.getByRole("button", { name: "Enviar pelo WhatsApp" }).click(),
    ]);
    const url = new URL(aba.url());
    expect(`${url.origin}${url.pathname}`).toBe(NUMERO);
    const texto = url.searchParams.get("text")!;
    expect(texto).toContain("Meu nome é Ana");
    expect(texto).toContain("• Evento: Aniversário");
    expect(texto).toContain("• Local: Boa Viagem, Recife");
  });
});

test.describe("outras páginas", () => {
  test("política de privacidade existe e cita a LGPD", async ({ page }) => {
    await page.goto("/privacidade");
    await expect(page.locator("h1")).toHaveText("Política de privacidade");
    await expect(page.getByText("Lei 13.709/2018")).toBeVisible();
  });

  test("404 tem caminho de volta", async ({ page }) => {
    const resposta = await page.goto("/nao-existe");
    expect(resposta?.status()).toBe(404);
    await expect(page.getByRole("link", { name: "Voltar para a página inicial" })).toBeVisible();
  });
});
