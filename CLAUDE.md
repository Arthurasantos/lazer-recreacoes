# Lazer Recreações: guia do projeto

Refatoração total da Lazer Recreações (recreação infantil, Recife, desde 01/01/1995, slogan "Brincando com Você").
Quem desenvolve e mantém: **Arthur**, recreador da equipe e estudante de Sistemas de Informação.
Dono da empresa: **Paulino**. O site está sendo feito **de surpresa** para ele: nada vai ao ar no domínio oficial nem muda o atendimento sem ele aprovar.

## Skills obrigatórias (carregar sempre, antes de qualquer trabalho)

- `lazer-produto`: contexto do negócio, módulos, modelo de dados, LGPD
- `lazer-operacao`: disponibilidade, escala sugerida, kits, fardas, financeiro
- `lazer-assistente-whatsapp`: persona, fluxo e regras da assistente
- `direcao-criativa-web`, `arquitetura-de-conversao`, `construcao-site-premium`: padrão de qualidade de todos os sites do Arthur (a regra de tema escuro delas tem exceção aqui, ver abaixo)

## Regras que não mudam

- **Site público em tema CLARO** (pedido explícito do Arthur em 26/09/2026: "o site é para crianças", o escuro ficou pesado). Creme como a farda branca, seções amarelo-sol e vermelho, confete e bandeirinhas. Amarelo nunca é cor de texto: textos de destaque usam `--realce` (vermelho). A assinatura continua: camada dupla do L, faixas da farda e bonequinho.
- Portal do recreador e painel: tema **a decidir com o Arthur** antes da fatia 3 (o padrão das skills é escuro).
- **Nada herdado do site antigo** (removido no commit que criou este arquivo; o original está no histórico, commit `5b8a841`).
- **Nunca inventar prova**: nada de depoimento, número, foto ou recreador fictício em página pública. Conteúdo que depende de material real usa o componente `<Pendente>` (buscar por `<Pendente` para listar).
- Recreadores e depoimentos do site antigo eram **fictícios**: nunca reaproveitar.
- Dados reais de clientes, crianças ou recreadores nunca vão para testes, seeds, demos ou prints.
- Código, nomes de variáveis e comentários em **português**, seguindo o estilo existente.
- Toda mudança passa por `pnpm format:check && pnpm check && pnpm test && pnpm build && pnpm e2e` antes do commit.

## Dados do negócio

**Confirmados (pode publicar)**

- Fundação em 01/01/1995. Os anos são calculados sozinhos (`src/lib/anos.ts`, atualizados também no navegador).
- Já levaram festa aos **EUA** (há como comprovar).
- WhatsApp comercial (81) 99976-2591 (Paulino, número pessoal usado pela empresa) e Instagram @lazer.recreacoes.
- Preço público: **a partir de R$ 350** = 1 recreador, 3 horas, no Recife. Existe tabela interna; não publicar além disso.
- Área atendida: qualquer lugar (o valor muda com o local). Todos os recreadores moram no Recife e na região metropolitana.
- Nome oficial **Lazer Recreações** (a farda do mockup com "Recreação" estava errada). O amarelo oficial é o do logo, `#FDF305`; o vermelho é `#E3050F`.
- O **bonequinho** da farda é ativo oficial da marca.
- Fotos do Instagram têm autorização dos responsáveis.
- Sinal: pago pelo cliente para reservar a data, geralmente por Pix, às vezes em dinheiro; a empresa aceita várias formas.

**Não publicar**

- "Maior empresa de recreação do Recife": não há como comprovar.
- 100 mil crianças, 20 mil eventos, 50 recreadores: sem confirmação.

**Pendentes (confirmar com o Arthur ou o Paulino)**

- Lista final de tipos de evento (`src/data/servicos.ts`) e de brincadeiras (`src/data/brincadeiras.ts`), ambas vindas do site antigo.
- **Revisão de recreador**: faixas de idade, espaço (pequeno/amplo) e descrições de cada brincadeira, e os textos das páginas de evento (`servicos.ts` → `pagina`), são uma proposta inicial do Claude. O Arthur revisa com a equipe.
- Se dá para estender a duração além de 3 h (a FAQ diz que sim).
- CNPJ e razão social (política de privacidade).
- **Fotos**: as 9 fotos em `src/assets/fotos/` são recortes de capturas de tela do Instagram (baixa resolução, 350 a 900 px). Trocar pelos originais quando alguém com acesso à conta exportar os arquivos (Instagram → Central de Contas → Suas informações → Baixar suas informações). Mantenha os mesmos nomes de arquivo e a troca é automática.
- **Vídeos**: sem originais ainda. Opção enquanto isso: incorporar Reels pelo link, com carregamento só no clique (sem rastreamento antes do consentimento). Pedir ao Arthur os links dos Reels.
- **Depoimento real** no Instagram (print de WhatsApp de uma cliente, "a equipe foi p... do início ao fim"): pedir o texto completo e a autorização para usar num bloco de depoimentos.
- Páginas sem foto real ainda: espaço kids em casamentos e eventos corporativos.
- Não há perfil no Google: criar o Perfil de Empresa no Google é prioridade de negócio (avaliações reais para o site).

## Decisões de arquitetura (aprovadas em 25/09/2026)

| Camada                       | Escolha                                                                                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Site público                 | **Astro 7** estático (`apps/site`) + CSS com tokens (sem framework de CSS)                                                               |
| Portal do recreador + painel | **Next.js** (App Router) + Tailwind + shadcn/ui tematizado escuro (`apps/app`, fatia 3)                                                  |
| Banco, login e arquivos      | **Supabase** (Postgres + Auth + Storage + PostGIS), migrações SQL versionadas, RLS para permissões                                       |
| Regras de negócio            | `packages/core` em TypeScript puro + Vitest (escala, conflitos de kit, preço)                                                            |
| Tokens visuais               | `packages/tokens/tokens.css`                                                                                                             |
| Testes                       | Vitest (unidade) + Playwright (ponta a ponta, celular e desktop)                                                                         |
| Monorepo                     | pnpm workspaces · Node 22                                                                                                                |
| Hospedagem                   | Site no Cloudflare Pages (grátis, uso comercial permitido). App na Vercel Pro (o plano Hobby proíbe uso comercial) ou Cloudflare Workers |

**Perfis de acesso**

- `admin` (Paulino): tudo, incluindo o financeiro. Opcional: `atendimento` (festas e leads, sem dinheiro). Login com e-mail + senha + TOTP.
- `recreador`: telefone + código de 6 dígitos, sessão longa, PWA. Vê só as próprias festas, com o mínimo de dados.
- Família: sem login no começo. Depois, um link único por festa (resumo, sinal, autorização de fotos).

**Modelo de dados inicial**: perfil, responsável, endereço (geocodificado), festa (status: lead → orçamento enviado → reservada → equipe confirmada → realizada → quitada | cancelada), pacote (+ especialidades e kits), brincadeira, especialidade, recreador (endereço residencial em tabela restrita), disponibilidade, alocação, kit, item de kit, material de consumo, farda, despacho, pagamento (forma: pix, dinheiro, cartão, transferência, outro), conversa e mensagem do WhatsApp, configuração, auditoria.

**Integrações**: WhatsApp Cloud API oficial (Meta, sem intermediário). Google Maps (geocodificar uma vez e guardar; rotas só para os melhores candidatos). Claude API na assistente (modelo a escolher com o Arthur depois de medir o custo com conversas de teste). Pix manual no início; Asaas ou Mercado Pago depois.

**Assistente de WhatsApp**: por enquanto **não** mexer no número do Paulino. O site só abre links `wa.me` para o número dele. A migração para a API (número novo ou coexistência) é decisão do Paulino depois da surpresa.

## Contas e custos (recomendação ao Arthur)

- Contas no nome **da empresa** (e-mail da Lazer, CNPJ, cartão da empresa): domínio no Registro.br, Cloudflare, Supabase, Meta Business, Google Cloud. O Arthur entra como administrador técnico.
- O Arthur cobra à parte o desenvolvimento e a manutenção; os serviços são pagos direto pela empresa. Evita o Arthur bancar custos em dólar e deixa a empresa dona dos próprios ativos.
- Até o Paulino aprovar, o site roda no subdomínio gratuito `*.pages.dev`. O domínio `.com.br` exige CNPJ ou CPF do titular: registrar com o CNPJ da Lazer depois da surpresa.
- Custos estimados: só o site, ≈ R$ 4/mês (domínio). Sistema completo enxuto, ≈ US$ 35–70/mês; recomendado, ≈ US$ 110–175/mês (confirmar nas tabelas oficiais antes de contratar).

## Estrutura

```
apps/site/            Astro: site das famílias
  src/data/           dados públicos (empresa, servicos, brincadeiras, faq): fonte única
  src/lib/            funções puras testadas (whatsapp.ts, anos.ts, brincadeiras.ts)
  src/components/     Logo, Bonequinho, Pendente, Cabecalho, Rodape, CtaFixo, CartaoBrincadeira
  src/components/home seções da home (várias reaproveitadas nas páginas de evento)
  src/pages/          index, [servico] (uma página por evento), brincadeiras, privacidade, 404,
                      sitemap.xml e robots.txt gerados no build
  src/scripts/        interações globais (sem biblioteca)
  e2e/                testes Playwright
  ferramentas/        gerador da imagem de compartilhamento (pnpm og)
packages/tokens/      tokens CSS da marca
docs/                 direção criativa e decisões
```

Comandos: ver `README.md`. Observações do ambiente:

- O `astro preview` do Astro 7 vai para segundo plano quando não há terminal interativo; o Playwright usa `--ignore-lock`.
- O `@astrojs/check` exige TypeScript 5 ou 6 (fixado em ^6).
- O Astro 7 remove o espaço entre um texto e uma tag inline na linha seguinte (o Prettier quebra linhas assim). Use `{" "}` no fim da linha de texto. Para conferir, busque no `dist/` por texto grudado em `<a`, `<strong>` e `<span>`.
- Nome acessível de link ou botão: use `aria-label` em vez de `<span class="sr-only">` com pontuação (o navegador insere espaço antes do ":").
- Novas páginas de evento: basta adicionar um item em `servicos.ts`. Página, rodapé, sitemap e testes (`e2e/fatia2.spec.ts`) se ajustam sozinhos.

## Fatias

| #   | Fatia                                                                                                              | Status                         |
| --- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| 0   | Fundação: monorepo, tokens, CI, remoção do site antigo                                                             | ✅ feita                       |
| 1   | Home do site: hero, credenciais, eventos, como funciona, "Monte sua festa", galeria, FAQ, privacidade, 404, SEO/OG | ✅ feita (com fotos pendentes) |
| 2   | Páginas por tipo de evento + catálogo de brincadeiras filtrável por idade e espaço                                 | ✅ feita (com fotos pendentes) |
| 3   | Painel: login admin, cadastro de clientes e festas, lista/calendário, status                                       | próxima                        |
| 4   | Pacotes e tabela oficial no painel alimentando o site                                                              |                                |
| 5   | Portal do recreador: login por código, PWA, disponibilidade                                                        |                                |
| 6   | Alocação manual + aceite/recusa + festa no portal com rota                                                         |                                |
| 7   | Escala sugerida (core + testes obrigatórios da skill de operação)                                                  |                                |
| 8   | Kits e fardas                                                                                                      |                                |
| 9   | Financeiro e cachês                                                                                                |                                |
| 10  | Assistente de WhatsApp (sandbox da Meta → produção, só com o Paulino)                                              |                                |
| 11  | Perfis de recreadores autorizados, galeria real, avaliações do Google                                              |                                |

## Próximo passo

1. **Arthur**:
   - publicar o preview no Cloudflare Pages (passos no README) e abrir no próprio celular;
   - enviar ~12 fotos do Instagram (1 vertical para o hero, 6 para a galeria e 1 por página de evento);
   - revisar com a equipe as faixas de idade e os espaços das brincadeiras e os textos das páginas de evento;
   - para a fatia 3: criar, com o e-mail da Lazer, uma conta no Supabase e um projeto na região São Paulo (plano grátis), e compartilhar comigo a URL do projeto e a chave `anon`, nunca a `service_role`.
2. **Claude**:
   - quando chegarem as fotos: trocar os `<Pendente>` de foto por imagens otimizadas (AVIF/WebP com `srcset`) e refazer a imagem OG com foto real;
   - **fatia 3**: criar `apps/app` (Next.js), as migrações SQL iniciais (perfil, responsável, endereço, festa, pacote, pagamento) com RLS, o login do admin (e-mail + senha + TOTP) e o cadastro e a lista/calendário de festas com status. Seeds só com dados fictícios marcados como tais.
