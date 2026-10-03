# NUNES INTERIORES

Plataforma pessoal do estúdio da Lara Nunes. Usa o mesmo aplicativo de gestão da versão anterior, com GitHub Pages e Firebase privado.

## Executar

`corepack enable`

`pnpm install --frozen-lockfile`

`pnpm build:github`

A pasta `dist-github` contém a versão estática.

## Publicar

Configure Settings → Pages → GitHub Actions. O fluxo de publicação é iniciado manualmente em Actions → Publicar NUNES INTERIORES → Run workflow.

Antes de publicar, configure Authentication (e-mail/senha), o domínio nunesinteriores.github.io e as regras em [firebase/firestore.rules](firebase/firestore.rules).

Guia completo em [docs/GITHUB-PAGES.md](docs/GITHUB-PAGES.md). Dados e anexos não são incluídos neste repositório.
