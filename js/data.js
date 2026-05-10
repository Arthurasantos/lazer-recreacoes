
const RECREADORES = [
  { nome: "Pedro Alves", apelido: "Tio Pedrinho", esp: "Gincanas e Jogos" },
  { nome: "Maria Santos", apelido: "Tia Marinha", esp: "Pintura Facial" },
  { nome: "João Costa", apelido: "Tio Joãozinho", esp: "Mágica e Palhaçaria" },
  { nome: "Ana Paula Lima", apelido: "Tia Aninha", esp: "Danças e Coreografias" },
  { nome: "Rafael Souza", apelido: "Tio Rafa", esp: "Esportes Recreativos" },
  { nome: "Fernanda Rocha", apelido: "Tia Fer", esp: "Teatro e Dramatização" },
  { nome: "Lucas Oliveira", apelido: "Tio Lukinha", esp: "Gincanas e Jogos" },
  { nome: "Juliana Carvalho", apelido: "Tia Juju", esp: "Contação de Histórias" },
  { nome: "Marcos Ferreira", apelido: "Tio Marquinhos", esp: "Música e Percussão" },
  { nome: "Beatriz Ramos", apelido: "Tia Bia", esp: "Artesanato Criativo" },
  { nome: "André Rodrigues", apelido: "Tio Andrezão", esp: "Esportes Recreativos" },
  { nome: "Camila Freitas", apelido: "Tia Cami", esp: "Pintura Facial" },
  { nome: "Felipe Martins", apelido: "Tio Felippe", esp: "Mágica e Palhaçaria" },
  { nome: "Larissa Pereira", apelido: "Tia Lari", esp: "Danças e Coreografias" },
  { nome: "Bruno Araújo", apelido: "Tio Bruninho", esp: "Gincanas e Jogos" },
  { nome: "Priscila Barbosa", apelido: "Tia Pri", esp: "Teatro e Dramatização" },
  { nome: "Diego Lima", apelido: "Tio Diegão", esp: "Música e Percussão" },
  { nome: "Vanessa Medeiros", apelido: "Tia Vani", esp: "Artesanato Criativo" },
  { nome: "Gabriel Cavalcanti", apelido: "Tio Gabi", esp: "Esportes Recreativos" },
  { nome: "Patrícia Araújo", apelido: "Tia Pat", esp: "Contação de Histórias" },
  { nome: "Thiago Barreto", apelido: "Tio Thiaguinho", esp: "Gincanas e Jogos" },
  { nome: "Renata Vieira", apelido: "Tia Rê", esp: "Pintura Facial" },
  { nome: "Rodrigo Pinto", apelido: "Tio Rô", esp: "Mágica e Palhaçaria" },
  { nome: "Daniela Moura", apelido: "Tia Dani", esp: "Danças e Coreografias" },
  { nome: "Alexandre Brito", apelido: "Tio Xande", esp: "Esportes Recreativos" },
  { nome: "Gabriela Torres", apelido: "Tia Gabih", esp: "Teatro e Dramatização" },
  { nome: "Eduardo Bezerra", apelido: "Tio Dudu", esp: "Música e Percussão" },
  { nome: "Amanda Nascimento", apelido: "Tia Aman", esp: "Artesanato Criativo" },
  { nome: "Carlos Henrique", apelido: "Tio Carlão", esp: "Gincanas e Jogos" },
  { nome: "Natália Macedo", apelido: "Tia Nati", esp: "Contação de Histórias" },
  { nome: "Matheus Leão", apelido: "Tio Matheus", esp: "Esportes Recreativos" },
  { nome: "Isabela Andrade", apelido: "Tia Isa", esp: "Pintura Facial" },
  { nome: "Victor Moreira", apelido: "Tio Vic", esp: "Mágica e Palhaçaria" },
  { nome: "Leticia Monteiro", apelido: "Tia Leti", esp: "Danças e Coreografias" },
  { nome: "Patrick Cruz", apelido: "Tio Pat", esp: "Gincanas e Jogos" },
  { nome: "Rafaela Sousa", apelido: "Tia Rafa", esp: "Teatro e Dramatização" },
  { nome: "Guilherme Neves", apelido: "Tio Gui", esp: "Música e Percussão" },
  { nome: "Simone Pires", apelido: "Tia Simoninha", esp: "Artesanato Criativo" },
  { nome: "Leonardo Alves", apelido: "Tio Leo", esp: "Esportes Recreativos" },
  { nome: "Thais Cavalcante", apelido: "Tia Thaisinha", esp: "Contação de Histórias" },
  { nome: "Samuel Ramos", apelido: "Tio Sam", esp: "Gincanas e Jogos" },
  { nome: "Keila Barros", apelido: "Tia Keilinha", esp: "Pintura Facial" },
  { nome: "Henrique Sousa", apelido: "Tio Kiki", esp: "Mágica e Palhaçaria" },
  { nome: "Joyce Ferreira", apelido: "Tia Joycinha", esp: "Danças e Coreografias" },
  { nome: "Daniel Cavalcante", apelido: "Tio Dan", esp: "Esportes Recreativos" },
  { nome: "Tatiana Bezerra", apelido: "Tia Tati", esp: "Teatro e Dramatização" },
  { nome: "Nathan Vasconcelos", apelido: "Tio Natan", esp: "Música e Percussão" },
  { nome: "Viviane Amaral", apelido: "Tia Vi", esp: "Artesanato Criativo" },
  { nome: "Caio Machado", apelido: "Tio Cainho", esp: "Gincanas e Jogos" },
  { nome: "Elaine Carvalho", apelido: "Tia Elaininha", esp: "Contação de Histórias" }
];

const SERVICOS = [
  {
    icon: "🎂",
    titulo: "Festas de Aniversário",
    desc: "Transformamos o aniversário do seu filho em um dia mágico e inesquecível, com recreação personalizada e muita diversão!"
  },
  {
    icon: "🌊",
    titulo: "Colônias de Férias",
    desc: "Programas especiais nas férias escolares com atividades lúdicas, esportivas e criativas para crianças de todas as idades."
  },
  {
    icon: "🎪",
    titulo: "Eventos Especiais",
    desc: "Festivais, feiras, eventos corporativos e comemorações com recreação profissional e estrutura completa."
  },
  {
    icon: "🏠",
    titulo: "Dia de Brincadeiras",
    desc: "Levamos a festa até a sua casa! Uma tarde incrível de brincadeiras e gargalhadas sem você precisar sair do conforto do lar."
  },
  {
    icon: "💼",
    titulo: "Eventos Corporativos",
    desc: "Soluções de entretenimento infantil para eventos de empresas, garantindo que as crianças se divirtam enquanto os adultos trabalham."
  },
  {
    icon: "💍",
    titulo: "Casamentos",
    desc: "Espaço kids no seu casamento! As crianças ficam entretidas e felizes enquanto os noivos celebram o grande dia com tranquilidade."
  }
];

const BRINCADEIRAS = [
  { nome: "Gincana Animada", icon: "🏆", cat: "Competição" },
  { nome: "Dança da Cadeira", icon: "💃", cat: "Música" },
  { nome: "Caça ao Tesouro", icon: "🗺️", cat: "Aventura" },
  { nome: "Pintura Facial", icon: "🎨", cat: "Arte" },
  { nome: "Boliche Humano", icon: "🎳", cat: "Esporte" },
  { nome: "Passa o Anel", icon: "💍", cat: "Clássico" },
  { nome: "Cabo de Guerra", icon: "💪", cat: "Esporte" },
  { nome: "Bambolê", icon: "⭕", cat: "Clássico" },
  { nome: "Corrida do Saco", icon: "🏃", cat: "Esporte" },
  { nome: "Estátua", icon: "🗿", cat: "Clássico" },
  { nome: "Espelho", icon: "🪞", cat: "Teatro" },
  { nome: "Telefone sem Fio", icon: "📞", cat: "Clássico" },
  { nome: "Coelho Sai da Toca", icon: "🐰", cat: "Clássico" },
  { nome: "Corre Cutia", icon: "🐿️", cat: "Clássico" },
  { nome: "Pega-pega Colorido", icon: "🌈", cat: "Dinâmico" },
  { nome: "Amarelinha Gigante", icon: "🔢", cat: "Clássico" },
  { nome: "Queimada", icon: "🔥", cat: "Esporte" },
  { nome: "Batata Quente", icon: "🥔", cat: "Clássico" },
  { nome: "Dança Criativa", icon: "🕺", cat: "Música" },
  { nome: "Teatro de Fantoches", icon: "🎭", cat: "Teatro" },
  { nome: "Circuito de Obstáculos", icon: "🚧", cat: "Esporte" },
  { nome: "Brincadeira de Roda", icon: "🔄", cat: "Clássico" },
  { nome: "Jogo do Mestre Mandou", icon: "👑", cat: "Clássico" },
  { nome: "Cantadas e Músicas", icon: "🎵", cat: "Música" }
];

const DEPOIMENTOS = [
  {
    nome: "Amanda Figueiredo",
    evento: "Aniversário de 5 anos do Lorenzo",
    texto: "Contratei a Lazer Recreações para o aniversário do meu filho e foi a melhor decisão! As crianças adoraram cada segundo, os recreadores são incríveis e muito atenciosos. Já indiquei para todos os amigos!",
    nota: 5,
    avatar: "AF"
  },
  {
    nome: "Roberto Mendonça",
    evento: "Evento Corporativo - Natal das Crianças",
    texto: "Usamos a Lazer para o evento de fim de ano da empresa. As crianças dos funcionários ficaram totalmente entretidas por horas. Profissionalismo e alegria do início ao fim. Recomendo demais!",
    nota: 5,
    avatar: "RM"
  },
  {
    nome: "Carla Bezerra",
    evento: "Casamento na Praia",
    texto: "Colocamos o espaço kids no nosso casamento com a Lazer Recreações e foi perfeito! As crianças ficaram felizes e os pais puderam aproveitar a festa. Tia Aninha é um amor de pessoa!",
    nota: 5,
    avatar: "CB"
  },
  {
    nome: "Marcelo Guimarães",
    evento: "Colônia de Férias - Condomínio",
    texto: "Contratamos para a colônia de férias do nosso condomínio e superou todas as expectativas. As crianças pediram para contratar de novo nas próximas férias! Muito profissionais.",
    nota: 5,
    avatar: "MG"
  },
  {
    nome: "Patrícia Vilela",
    evento: "Festa de 7 anos da Sofia",
    texto: "Minha filha até hoje fala no Tio Pedrinho! A festinha foi mágica, cheia de energia e muito bem organizada. A equipe chegou no horário, montou tudo rapidinho e animou o tempo todo!",
    nota: 5,
    avatar: "PV"
  },
  {
    nome: "Tiago Albuquerque",
    evento: "Dia de Brincadeiras em Casa",
    texto: "Que experiência incrível! Fizemos um dia de brincadeiras em casa para os sobrinhos e foi um sucesso total. Simples de contratar, preço justo e resultado excepcional. Volta sempre!",
    nota: 5,
    avatar: "TA"
  }
];
