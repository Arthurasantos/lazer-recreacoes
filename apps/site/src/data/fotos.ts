/**
 * Fotos reais do Instagram da Lazer (@lazer.recreacoes), com autorização dos responsáveis.
 * Por enquanto são recortes de capturas de tela: trocar pelos arquivos originais assim que
 * forem exportados (ver CLAUDE.md → Pendentes). Nunca identificar crianças pelo nome no alt.
 */
import type { ImageMetadata } from "astro";
import lego from "../assets/fotos/lego-aniversario.jpg";
import senna from "../assets/fotos/senna-aniversario.jpg";
import equipeCarnaval from "../assets/fotos/equipe-carnaval.jpg";
import equipeBrasil from "../assets/fotos/equipe-brasil.jpg";
import futebolRecreadores from "../assets/fotos/futebol-recreadores.jpg";
import inflavelPraia from "../assets/fotos/inflavel-praia.jpg";
import harryPotter from "../assets/fotos/harry-potter.jpg";
import futebolTurma from "../assets/fotos/futebol-turma.jpg";
import risadas from "../assets/fotos/risadas.jpg";

export type Foto = { src: ImageMetadata; alt: string };

export const fotos = {
  lego: {
    src: lego,
    alt: "Dois recreadores da Lazer, de farda, fazem joinha com o aniversariante ao lado do bolo de tema Lego",
  },
  senna: {
    src: senna,
    alt: "Recreador da Lazer brinca com um menino vestido de piloto de Fórmula 1 numa festa à noite",
  },
  equipeCarnaval: {
    src: equipeCarnaval,
    alt: "Equipe de recreadores da Lazer, todos de farda, animada numa rua enfeitada de carnaval",
  },
  equipeBrasil: {
    src: equipeBrasil,
    alt: "Equipe da Lazer reunida com camisas do Brasil e placas de torcida",
  },
  futebolRecreadores: {
    src: futebolRecreadores,
    alt: "Dois recreadores da Lazer carregam um menino com camisa do Brasil num campo de futebol",
  },
  inflavelPraia: {
    src: inflavelPraia,
    alt: "Recreadores da Lazer fazem selfie numa festa na praia com brinquedo inflável ao fundo",
  },
  harryPotter: {
    src: harryPotter,
    alt: "Recreador da Lazer abraça a aniversariante fantasiada numa festa de tema bruxo",
  },
  futebolTurma: {
    src: futebolTurma,
    alt: "Turma de meninos posa com a bola depois de uma partida de futebol na recreação",
  },
  risadas: {
    src: risadas,
    alt: "Meninas dão risada com um recreador da Lazer numa festa",
  },
} satisfies Record<string, Foto>;

export type FotoId = keyof typeof fotos;
