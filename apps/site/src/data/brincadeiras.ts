/**
 * Catálogo público de brincadeiras (fatia 2).
 * Nomes vindos do site antigo. Faixas de idade, espaço e descrições são uma proposta
 * inicial: o Arthur (recreador) revisa com a equipe (ver CLAUDE.md → Pendentes).
 *
 * espaco: "pequeno" = cabe em sala, apartamento ou salão pequeno;
 *         "amplo"   = precisa de área grande ou externa.
 */
export type Categoria = "classicas" | "movimento" | "musica" | "arte" | "aventura";
export type Espaco = "pequeno" | "amplo";

export type Brincadeira = {
  id: string;
  nome: string;
  descricao: string;
  categoria: Categoria;
  idadeMin: number;
  idadeMax: number;
  espaco: Espaco;
};

export const categorias: Record<Categoria, string> = {
  classicas: "Clássicas",
  movimento: "Movimento",
  musica: "Música e dança",
  arte: "Arte e teatro",
  aventura: "Gincana e aventura",
};

export const brincadeiras: Brincadeira[] = [
  {
    id: "gincana",
    nome: "Gincana",
    descricao: "Equipes disputam provas rápidas e divertidas, com muita torcida.",
    categoria: "aventura",
    idadeMin: 5,
    idadeMax: 12,
    espaco: "amplo",
  },
  {
    id: "caca-ao-tesouro",
    nome: "Caça ao tesouro",
    descricao: "Pistas escondidas pelo espaço levam a turma até o tesouro.",
    categoria: "aventura",
    idadeMin: 5,
    idadeMax: 12,
    espaco: "pequeno",
  },
  {
    id: "circuito-de-obstaculos",
    nome: "Circuito de obstáculos",
    descricao: "Um percurso para pular, rastejar e equilibrar, um de cada vez.",
    categoria: "aventura",
    idadeMin: 4,
    idadeMax: 12,
    espaco: "amplo",
  },
  {
    id: "pintura-facial",
    nome: "Pintura facial",
    descricao: "Cada criança escolhe o desenho e sai da festa com o rosto pintado.",
    categoria: "arte",
    idadeMin: 2,
    idadeMax: 12,
    espaco: "pequeno",
  },
  {
    id: "teatro-de-fantoches",
    nome: "Teatro de fantoches",
    descricao: "Histórias contadas com fantoches, com a plateia participando.",
    categoria: "arte",
    idadeMin: 2,
    idadeMax: 7,
    espaco: "pequeno",
  },
  {
    id: "espelho",
    nome: "Espelho",
    descricao: "Em duplas, um imita cada movimento do outro sem errar.",
    categoria: "arte",
    idadeMin: 4,
    idadeMax: 10,
    espaco: "pequeno",
  },
  {
    id: "danca-das-cadeiras",
    nome: "Dança das cadeiras",
    descricao: "A música para e todo mundo corre para sentar. Sobra um!",
    categoria: "musica",
    idadeMin: 4,
    idadeMax: 12,
    espaco: "pequeno",
  },
  {
    id: "estatua",
    nome: "Estátua",
    descricao: "Dança enquanto toca a música; quando ela para, ninguém se mexe.",
    categoria: "musica",
    idadeMin: 3,
    idadeMax: 10,
    espaco: "pequeno",
  },
  {
    id: "batata-quente",
    nome: "Batata quente",
    descricao: "A bola passa de mão em mão até a música parar.",
    categoria: "musica",
    idadeMin: 3,
    idadeMax: 10,
    espaco: "pequeno",
  },
  {
    id: "danca-criativa",
    nome: "Dança criativa",
    descricao: "Coreografias simples e passos inventados pela própria turma.",
    categoria: "musica",
    idadeMin: 3,
    idadeMax: 12,
    espaco: "pequeno",
  },
  {
    id: "cantigas-e-musicas",
    nome: "Cantigas e músicas",
    descricao: "Músicas com gestos para os menores cantarem e dançarem juntos.",
    categoria: "musica",
    idadeMin: 2,
    idadeMax: 6,
    espaco: "pequeno",
  },
  {
    id: "passa-o-anel",
    nome: "Passa o anel",
    descricao: "O anel passa escondido pelas mãos e alguém precisa adivinhar com quem ficou.",
    categoria: "classicas",
    idadeMin: 4,
    idadeMax: 12,
    espaco: "pequeno",
  },
  {
    id: "telefone-sem-fio",
    nome: "Telefone sem fio",
    descricao: "A frase passa de ouvido em ouvido e chega do outro lado toda trocada.",
    categoria: "classicas",
    idadeMin: 5,
    idadeMax: 12,
    espaco: "pequeno",
  },
  {
    id: "coelho-sai-da-toca",
    nome: "Coelho sai da toca",
    descricao: "Ao sinal, os coelhos trocam de toca, e quem ficar sem toca vai para o meio.",
    categoria: "classicas",
    idadeMin: 3,
    idadeMax: 8,
    espaco: "amplo",
  },
  {
    id: "corre-cutia",
    nome: "Corre cutia",
    descricao: "Roda sentada, um lencinho e muita corrida em volta da turma.",
    categoria: "classicas",
    idadeMin: 4,
    idadeMax: 10,
    espaco: "amplo",
  },
  {
    id: "amarelinha-gigante",
    nome: "Amarelinha gigante",
    descricao: "A amarelinha de sempre, em tamanho grande e com desafios extras.",
    categoria: "classicas",
    idadeMin: 4,
    idadeMax: 10,
    espaco: "amplo",
  },
  {
    id: "brincadeira-de-roda",
    nome: "Brincadeira de roda",
    descricao: "Cirandas e cantigas de roda para todo mundo de mãos dadas.",
    categoria: "classicas",
    idadeMin: 2,
    idadeMax: 8,
    espaco: "pequeno",
  },
  {
    id: "mestre-mandou",
    nome: "Mestre mandou",
    descricao: "Só vale fazer o que o mestre mandar. Atenção total!",
    categoria: "classicas",
    idadeMin: 3,
    idadeMax: 10,
    espaco: "pequeno",
  },
  {
    id: "cabo-de-guerra",
    nome: "Cabo de guerra",
    descricao: "Duas equipes, uma corda e muita força para puxar.",
    categoria: "movimento",
    idadeMin: 6,
    idadeMax: 12,
    espaco: "amplo",
  },
  {
    id: "corrida-do-saco",
    nome: "Corrida do saco",
    descricao: "Pulando dentro do saco até a linha de chegada.",
    categoria: "movimento",
    idadeMin: 5,
    idadeMax: 12,
    espaco: "amplo",
  },
  {
    id: "bambole",
    nome: "Bambolê",
    descricao: "Desafios de bambolê: quem gira por mais tempo?",
    categoria: "movimento",
    idadeMin: 4,
    idadeMax: 12,
    espaco: "pequeno",
  },
  {
    id: "boliche-humano",
    nome: "Boliche humano",
    descricao: "As crianças viram pinos e a bola vai rolando de mansinho.",
    categoria: "movimento",
    idadeMin: 5,
    idadeMax: 12,
    espaco: "amplo",
  },
  {
    id: "pega-pega-colorido",
    nome: "Pega-pega colorido",
    descricao: "Pega-pega com cores: só está salvo quem tocar a cor gritada.",
    categoria: "movimento",
    idadeMin: 4,
    idadeMax: 10,
    espaco: "amplo",
  },
  {
    id: "queimada",
    nome: "Queimada",
    descricao: "Duas equipes, uma bola leve e muita esquiva.",
    categoria: "movimento",
    idadeMin: 7,
    idadeMax: 12,
    espaco: "amplo",
  },
];
