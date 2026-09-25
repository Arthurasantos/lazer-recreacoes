// @ts-check
import { defineConfig } from "astro/config";

// Enquanto não houver domínio próprio, o site roda no subdomínio gratuito do Cloudflare Pages.
// Quando o domínio for registrado, basta trocar a variável SITE_URL no painel de deploy.
export default defineConfig({
  site: process.env.SITE_URL ?? "https://lazer-recreacoes.pages.dev",
  trailingSlash: "never",
  build: { format: "file" },
});
