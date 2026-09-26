import { empresa } from "./empresa";

export type Pergunta = { id?: string; pergunta: string; resposta: string };

/** Respostas só com informação confirmada. Pendências de conteúdo estão listadas no CLAUDE.md. */
export const faq: Pergunta[] = [
  {
    id: "preco",
    pergunta: "Quanto custa uma festa com a Lazer?",
    resposta: `As festas começam em R$ ${empresa.precoAPartirDe}, com ${empresa.pacoteBase}. O valor final depende do número de crianças, da duração, do local e do pacote. Mande os detalhes no WhatsApp e receba o orçamento da sua festa.`,
  },
  {
    id: "area",
    pergunta: "Vocês vão até onde a festa estiver?",
    resposta:
      "Vamos. A equipe é do Recife e da região metropolitana, e a Lazer já levou festa até os Estados Unidos. Para eventos fora do Recife, o deslocamento entra no orçamento.",
  },
  {
    id: "equipe",
    pergunta: "Quantos recreadores a minha festa precisa?",
    resposta:
      "Depende de quantas crianças vão brincar e das idades. Conte esses dois números no WhatsApp e a gente indica o tamanho certo da equipe.",
  },
  {
    id: "duracao",
    pergunta: "Quanto tempo dura a recreação?",
    resposta:
      "A festa básica tem 3 horas de recreação. Precisa de mais tempo? É só combinar no orçamento.",
  },
  {
    id: "espaco",
    pergunta: "Dá para fazer em casa, no condomínio ou em espaço pequeno?",
    resposta:
      "Dá. As brincadeiras se adaptam ao espaço: salão de festas, casa, condomínio, buffet ou área externa. Conte como é o local e a equipe monta a programação certa.",
  },
  {
    id: "reserva",
    pergunta: "Como eu reservo a data?",
    resposta:
      "Com o orçamento aprovado, a data fica reservada com o pagamento do sinal. Pix, dinheiro e outras formas de pagamento são combinados no atendimento.",
  },
  {
    id: "fotos",
    pergunta: "Vocês publicam fotos das crianças?",
    resposta:
      "Só com autorização dos responsáveis. As fotos do nosso Instagram são publicadas com a aprovação das famílias.",
  },
];

/** Perguntas gerais escolhidas pelo id (para as páginas de evento). */
export const perguntasPorId = (...ids: string[]) =>
  ids.map((id) => faq.find((f) => f.id === id)).filter((f) => f !== undefined);
