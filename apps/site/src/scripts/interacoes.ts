/**
 * Interações globais do site (leves, sem biblioteca):
 * - revelação ao rolar (.revela)
 * - cabeçalho com fundo depois de rolar
 * - CTA fixo no celular (aparece depois do hero, some perto de outro CTA)
 * - anos de tradição sempre atualizados ([data-anos])
 * - pupilas do bonequinho seguindo o ponteiro ([data-boneco-olhar])
 * - bonequinho pula ao ser tocado ([data-boneco-pula])
 */
import { anosDesde } from "../lib/anos";
import { empresa } from "../data/empresa";

const reduzMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Anos de tradição
const anos = String(anosDesde(empresa.fundacao));
document.querySelectorAll<HTMLElement>("[data-anos]").forEach((el) => (el.textContent = anos));

// Revelação ao rolar
const revelaveis = document.querySelectorAll<HTMLElement>(".revela");
if ("IntersectionObserver" in window && !reduzMovimento) {
  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visivel");
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );
  revelaveis.forEach((el) => io.observe(el));
} else {
  revelaveis.forEach((el) => el.classList.add("is-visivel"));
}

// Cabeçalho
const cabecalho = document.querySelector<HTMLElement>("[data-cabecalho]");
const atualizaCabecalho = () => cabecalho?.classList.toggle("is-rolado", scrollY > 12);
atualizaCabecalho();
addEventListener("scroll", atualizaCabecalho, { passive: true });

// CTA fixo: visível quando o hero saiu da tela e nenhum CTA grande está visível
const ctaFixo = document.querySelector<HTMLElement>("[data-cta-fixo]");
const hero = document.querySelector<HTMLElement>("[data-hero]");
const escondeCta = document.querySelectorAll<HTMLElement>("[data-esconde-cta-fixo]");
if (ctaFixo && "IntersectionObserver" in window) {
  const visiveis = new Set<Element>();
  const io = new IntersectionObserver((entradas) => {
    for (const e of entradas) e.isIntersecting ? visiveis.add(e.target) : visiveis.delete(e.target);
    ctaFixo.classList.toggle("is-visivel", visiveis.size === 0);
  });
  if (hero) io.observe(hero);
  escondeCta.forEach((el) => io.observe(el));
  if (!hero) ctaFixo.classList.add("is-visivel");
}

// Pupilas seguindo o ponteiro
const olhadores = document.querySelectorAll<SVGSVGElement>("[data-boneco-olhar]");
if (olhadores.length && matchMedia("(pointer: fine)").matches && !reduzMovimento) {
  let pendente = false;
  let px = 0;
  let py = 0;
  addEventListener(
    "pointermove",
    (ev) => {
      px = ev.clientX;
      py = ev.clientY;
      if (pendente) return;
      pendente = true;
      requestAnimationFrame(() => {
        pendente = false;
        olhadores.forEach((svg) => {
          const r = svg.getBoundingClientRect();
          const dx = px - (r.left + r.width * 0.72);
          const dy = py - (r.top + r.height * 0.4);
          const dist = Math.hypot(dx, dy) || 1;
          const alcance = Math.min(1, dist / 300) * 7;
          svg.style.setProperty("--olho-x", `${(dx / dist) * alcance}px`);
          svg.style.setProperty("--olho-y", `${(dy / dist) * alcance}px`);
        });
      });
    },
    { passive: true },
  );
}

// Toque faz o bonequinho pular
document.querySelectorAll<HTMLElement>("[data-boneco-pula]").forEach((alvo) => {
  const boneco = alvo.querySelector("svg.boneco");
  if (!boneco) return;
  const pula = () => {
    boneco.classList.remove("is-pulando");
    void boneco.getBoundingClientRect();
    boneco.classList.add("is-pulando");
  };
  alvo.addEventListener("pointerdown", pula);
  boneco.addEventListener("animationend", () => boneco.classList.remove("is-pulando"));
});
