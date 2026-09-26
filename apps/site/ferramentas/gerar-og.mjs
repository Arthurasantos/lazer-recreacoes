// Gera public/og.png a partir de ferramentas/og.html usando o Chromium do Playwright.
import { chromium } from "@playwright/test";
import { fileURLToPath } from "node:url";

const modelo = new URL("./og.html", import.meta.url);
const saida = fileURLToPath(new URL("../public/og.png", import.meta.url));

const navegador = await chromium.launch();
const pagina = await navegador.newPage({ viewport: { width: 1200, height: 630 } });
await pagina.goto(modelo.href);
await pagina.evaluate(() => document.fonts.ready);
await pagina.screenshot({ path: saida });
await navegador.close();
console.log(`Imagem gerada em ${saida}`);
