import { empresa } from "../data/empresa";

/** Monta o link oficial do WhatsApp (wa.me) com mensagem pré-preenchida. */
export function linkWhatsApp(mensagem?: string): string {
  const base = `https://wa.me/${empresa.whatsapp.numero}`;
  const texto = mensagem?.trim();
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}

const saudacao = `Olá, ${empresa.whatsapp.contato}! Vim pelo site da Lazer`;

/** Mensagem padrão de quem clica num CTA geral. */
export function mensagemGeral(): string {
  return `${saudacao} e quero um orçamento para uma festa.`;
}

/** Mensagem contextual de cada tipo de evento. */
export function mensagemServico(pedido: string): string {
  return `${saudacao} e quero um orçamento para ${pedido}.`;
}

export type DadosFesta = {
  tipo?: string;
  /** Data no formato do <input type="date">: AAAA-MM-DD */
  data?: string;
  local?: string;
  criancas?: number | string;
  idades?: string;
  nome?: string;
};

/** Converte AAAA-MM-DD em DD/MM/AAAA sem passar por Date (evita erro de fuso). */
export function formatarData(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  return m ? `${m[3]}/${m[2]}/${m[1]}` : iso.trim();
}

/** Mensagem do mini-formulário "Monte sua festa": só inclui o que foi preenchido. */
export function mensagemOrcamento(d: DadosFesta): string {
  const nome = d.nome?.trim();
  const linhas = [
    nome
      ? `${saudacao}. Meu nome é ${nome} e quero um orçamento:`
      : `${saudacao} e quero um orçamento:`,
  ];
  const campo = (rotulo: string, valor?: string | number) => {
    const v = String(valor ?? "").trim();
    if (v) linhas.push(`• ${rotulo}: ${v}`);
  };
  campo("Evento", d.tipo);
  campo("Data", d.data ? formatarData(d.data) : undefined);
  campo("Local", d.local);
  campo("Crianças (aprox.)", d.criancas);
  campo("Idades", d.idades);
  return linhas.join("\n");
}
