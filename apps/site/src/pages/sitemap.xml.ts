import type { APIRoute } from "astro";
import { servicos } from "../data/servicos";

/** Sitemap gerado no build a partir das páginas públicas. */
export const GET: APIRoute = ({ site }) => {
  const caminhos = ["/", ...servicos.map((s) => `/${s.slug}`), "/brincadeiras", "/privacidade"];
  const urls = caminhos.map((c) => `  <url><loc>${new URL(c, site).href}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
