# Guia simples do projeto

Este arquivo resume a função das principais partes do portfólio.

## Raiz e configurações

- `package.json` — dependências, scripts e lint-staged.
- `tsconfig.json` — TypeScript estrito e alias `@/`.
- `next.config.ts` — configuração do Next.js.
- `postcss.config.mjs` — integração do Tailwind CSS.
- `eslint.config.mjs` — análise estática.
- `prettier.config.mjs` — formatação consistente.
- `vitest.config.ts` e `vitest.setup.ts` — testes unitários/componentes.
- `playwright.config.ts` — testes reais em navegador.
- `commitlint.config.mjs` — Conventional Commits.
- `components.json` — convenções de componentes no padrão shadcn/ui.
- `AGENTS.md` — regras gerais para agentes de IA.
- `.cursor/rules/` — regras versionadas para o Cursor.
- `.vscode/` — configurações e extensões recomendadas do editor.
- `.husky/` — verificações antes dos commits.
- `.github/workflows/quality.yml` — CI com lint, tipos, testes, build e E2E.

## `src/app`

- `layout.tsx` — layout raiz, fontes, SEO e idioma.
- `page.tsx` — monta as seções da página e o skip link de acessibilidade.
- `globals.css` — Tailwind e estilos globais.
- `error.tsx` — tratamento visual de erros inesperados.
- `not-found.tsx` — página 404.
- `robots.ts` — configuração para buscadores.

## `src/components/layout`

- `site-header.tsx` — navegação responsiva e acessível.
- `site-footer.tsx` — rodapé.

## `src/components/sections`

- `hero.tsx` — apresentação principal e CTAs.
- `about.tsx` — forma de trabalho e contatos profissionais.
- `projects.tsx` — Pokédex e TaskFlow.
- `stack.tsx` — somente tecnologias realmente presentes nesses dois projetos.
- `contact.tsx` — LinkedIn, e-mail, telefone, WhatsApp e GitHub.

## `src/components/ui`

- `button.tsx`, `badge.tsx`, `card.tsx` — componentes reutilizáveis.
- `skeleton.tsx` — componente disponível para futuros estados de carregamento.

## `src/data`

- `projects.ts` — fonte tipada dos dados da Pokédex e do TaskFlow.

## `src/lib`

- `utils.ts` — função `cn()` para combinar classes Tailwind.

## `tests/e2e`

- `portfolio.spec.ts` — conteúdo principal, menu mobile e acessibilidade com axe.

## Stack apresentada ao recrutador

A seção visual **Stack demonstrada** mostra apenas tecnologias já usadas nos projetos enviados:

- Pokédex: React, Vite, JavaScript e API.
- TaskFlow: Next.js, React, TypeScript e Tailwind CSS.

Ferramentas como testes, lint, CI e configurações de IA continuam no repositório como práticas de engenharia do próprio portfólio, mas não são apresentadas como tecnologias dominadas nos projetos anteriores.
