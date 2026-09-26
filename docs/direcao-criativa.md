# Direção criativa: Camada Dupla

> **Atualização de 26/09/2026: versão "dia de festa" (tema claro).** O Arthur achou o site escuro demais para um público de crianças e pediu explicitamente para clarear. A direção Camada Dupla continua (L em camadas, faixas da farda, bonequinho, Fraunces itálico), agora sobre creme (a farda branca), com seções em amarelo-sol e vermelho, confete e bandeirinhas de festa no topo das seções coloridas. Regras: amarelo só como fundo ou botão (nunca texto); destaques de texto em vermelho com camada amarela e contorno preto, como o logo; fotos reais do Instagram no hero, na galeria e nas páginas de evento. Tokens em `packages/tokens/tokens.css`.

Aprovada pelo Arthur em 25/09/2026. Skills: `direcao-criativa-web` → `arquitetura-de-conversao` → `construcao-site-premium`.

## Briefing

- **Oferta e conversão**: orçamento de recreação infantil pelo WhatsApp (hoje o número pessoal do Paulino, (81) 99976-2591).
- **Público**: pais e mães do Recife que compram **segurança** ("meu filho vai estar bem cuidado") e **alegria** ("a festa vai ser inesquecível").
- **Nível de consciência**: consciente do produto. A Lazer é muito conhecida no Recife; o site não precisa educar, precisa **confirmar a confiança e facilitar o pedido**. Página média, oferta ("a partir de R$ 350") visível desde o hero.
- **Tráfego**: Instagram (@lazer.recreacoes) e indicação → quase tudo celular.
- **Marca**: tradicional, alegre, confiável. Ativos: logo do L em camada dupla, farda (vermelho, amarelo, branco), bonequinho da farda.

## Tese

> Para pais do Recife que querem ter certeza de que o filho vai estar bem cuidado, o site deve parecer **a equipe que você reconhece de longe pela farda**: confiança e alegria na mesma medida, levando ao orçamento no WhatsApp.

## Direção escolhida: B, Camada Dupla

O "L" do logo (vermelho na frente, amarelo atrás, contorno preto, deslocado para baixo e à esquerda) vira o sistema visual inteiro.

- **Referências**: camisa retrô de futebol (a própria farda), embalagem de brinquedo dos anos 90, pôster tipográfico de circo.
- **Tipografia**: Fraunces Variable itálico 850 (variante `standard`: peso + tamanho óptico automático, 81 KB), de alto contraste como o "azer" do logo, nos títulos; Figtree Variable no texto.
- **Cores**: vinho profundo derivado do vermelho (fundo), amarelo reservado para ação, vermelho em formas grandes. Tokens em `packages/tokens/tokens.css`.

### Elemento assinatura

1. **Camada dupla**: cards, molduras de foto e botões têm uma camada deslocada atrás (amarela, ou vermelha quando a frente é amarela), feita com `box-shadow` duplo (cor + contorno). No hover, a frente sobe e a camada se afasta.
2. **Faixas da farda** (vermelho, amarelo, branco) como divisores, no rodapé e na borda do CTA fixo.
3. **Bonequinho** (ativo oficial, redesenhado em traço SVG em `Bonequinho.astro`):
   - hero: desenha-se sozinho, acena, as pupilas seguem o mouse e ele pula ao ser tocado;
   - "Como funciona": anda pela trilha conforme a rolagem e só "caminha" enquanto a página rola;
   - "Monte sua festa": reage ao preenchimento com falas e pula quando o formulário fica completo;
   - CTA fixo no celular, cartão "31 anos", CTA final e página 404.
4. **Montagem do logo** no carregamento: a camada amarela do L sai de trás da vermelha.

Todo movimento respeita `prefers-reduced-motion`.

## Mapa da home

| Seção           | Objetivo                         | Mensagem-chave                                           | Prova                                                          | CTA                              |
| --------------- | -------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------- |
| Hero            | Entender em 5 s e agir           | "Seu filho brincando. Você curtindo a festa."            | Desde 1995 · selo de anos · a partir de R$ 350                 | WhatsApp + "Montar minha festa"  |
| Credenciais     | Confiança imediata               | Anos de tradição, EUA, preço de entrada                  | Números confirmados                                            | —                                |
| Por que a Lazer | Segurança antes das brincadeiras | "Você cuida dos convidados. A gente cuida da criançada." | Farda, idade/espaço, combinado antes, fotos só com autorização | —                                |
| Eventos         | Roteador por tipo de evento      | "Tem criança? Tem Lazer."                                | —                                                              | WhatsApp com mensagem por evento |
| Como funciona   | Reduzir a incerteza              | Três passos, sinal reserva a data                        | —                                                              | —                                |
| Repertório      | Desejo                           | Das clássicas às que pedem de novo                       | Lista de brincadeiras                                          | —                                |
| Monte sua festa | Lead qualificado                 | "Sua festa em 30 segundos"                               | Nada fica salvo no site                                        | Envia a mensagem estruturada     |
| Galeria         | Prova real                       | "A festa de verdade está no Instagram"                   | Fotos reais (pendente)                                         | Instagram                        |
| Dúvidas         | Objeções                         | Preço, área, equipe, duração, espaço, reserva, fotos     | —                                                              | WhatsApp para dúvidas            |
| CTA final       | Fechamento                       | "Chama a Lazer."                                         | —                                                              | WhatsApp                         |

### Variações de headline (4U)

1. **Seu filho brincando. Você curtindo a festa.** (escolhida: o pai ou a mãe é o herói; responde ao medo de passar a festa cuidando das crianças)
2. Desde 1995, o Recife chama a Lazer quando a festa é de criança.
3. 31 anos brincando com o Recife.
4. Pode chamar a Lazer: a brincadeira é com a gente.
5. A festa é deles. O cuidado é nosso.

### Hipóteses de teste A/B (quando houver medição)

1. Headline 1 × headline 2 (benefício × tradição).
2. Hero com foto real × hero com o bonequinho em destaque.
3. CTA "Quero um orçamento" × "Montar minha festa" como botão principal.

### Medição (a definir)

Os links já carregam `data-evento` (ex.: `whatsapp_hero`, `whatsapp_servico_aniversario`, `whatsapp_formulario`). Quando o Paulino aprovar, ligar uma ferramenta de análise sem cookies (ex.: Cloudflare Web Analytics) e contar os cliques por origem.
