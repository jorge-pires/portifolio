# Jorge Pires — Frontend Developer Portfolio

Portfólio profissional voltado para oportunidades de Desenvolvedor Frontend Júnior, com foco em projetos reais de estudo, interface responsiva, acessibilidade, organização de código, testes, Git e workflow assistido por IA.

## Projetos apresentados

### Pokédex

- React
- Vite
- JavaScript
- Consumo de API
- Projeto publicado: `https://pokedex-tau-snowy.vercel.app/`

### TaskFlow

- Next.js
- React
- TypeScript
- Tailwind CSS
- Projeto em desenvolvimento: `https://projeto-kanban-pi.vercel.app/`

A seção **Stack demonstrada** do portfólio mostra somente tecnologias já utilizadas nesses dois projetos.

## Qualidade do próprio portfólio

O repositório também mantém ferramentas de qualidade e desenvolvimento sem apresentá-las como experiência dos projetos: ESLint, Prettier, Vitest, Testing Library, Playwright, axe-core, Husky, lint-staged, Commitlint, GitHub Actions, Cursor Project Rules e `AGENTS.md`.

## Estrutura

```text
src/
├── app/                 # Next.js App Router e boundaries
├── components/
│   ├── layout/          # Header e footer
│   ├── sections/        # Seções do portfólio
│   └── ui/              # Componentes reutilizáveis
├── data/                # Dados tipados dos projetos
└── lib/                 # Utilitários compartilhados
```

## Rodar localmente

Requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Comandos de qualidade

```bash
npm run lint
npm run typecheck
npm run test:run
npm run test:coverage
npm run test:e2e
npm run build
npm run quality
```

Na primeira execução do Playwright:

```bash
npx playwright install
```

## Conventional Commits

As mensagens são validadas pelo Commitlint. Exemplos:

```text
feat(portfolio): add project showcase
feat(contact): add professional contact links
test(a11y): add homepage accessibility coverage
fix(nav): improve mobile keyboard behavior
docs(readme): update project documentation
chore(tooling): configure cursor project rules
```

## Contato

- LinkedIn: `https://www.linkedin.com/in/jorge-pires-2020422ba`
- E-mail: `jpires.business@gmail.com`
- Telefone / WhatsApp: `(48) 98500-4407`
- GitHub: `https://github.com/jorge-pires`
