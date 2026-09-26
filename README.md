# Lazer Recreações

Sistema da Lazer Recreações, recreação infantil no Recife desde 1995: site para as famílias, portal do recreador, painel administrativo e assistente de WhatsApp.

> Decisões, regras e próximo passo: [`CLAUDE.md`](CLAUDE.md). Direção visual: [`docs/direcao-criativa.md`](docs/direcao-criativa.md).

## Rodando localmente

Requisitos: Node 22 e pnpm 10 (`corepack enable`).

```bash
pnpm install
pnpm dev            # site em http://localhost:4321
pnpm test           # testes unitários (Vitest)
pnpm check          # tipos (astro check)
pnpm build          # build de produção em apps/site/dist
pnpm e2e            # testes de ponta a ponta (Playwright; rode `pnpm build` antes)
pnpm format         # formata o código (Prettier)
```

## Deploy do site (Cloudflare Pages)

1. Em Cloudflare → Workers & Pages → Create → Pages → conectar este repositório.
2. Build command: `pnpm --filter @lazer/site build` · Output directory: `apps/site/dist`.
3. Variáveis: `NODE_VERSION=22` e, quando houver domínio, `SITE_URL=https://seu-dominio`.

Cada push gera um link de preview; o branch principal vira o site oficial.
