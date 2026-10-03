# Executar e testar

Código completo, sem credenciais ou dados dos clientes. Requer Node.js 22.13+ e pnpm (versão indicada no package.json).

## Instalação e desenvolvimento
```sh
pnpm install
pnpm run build
pnpm run dev
```
Abra o endereço indicado no terminal. O projeto usa o perfil Sites managed-linux. Em outro ambiente, configure o perfil portable conforme a documentação do Sites.

## Banco local
Após compilar, aplique as migrações versionadas no banco local. Execute cada arquivo uma única vez, na ordem 0000, 0001 e 0002:
```sh
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_mushy_hellion.sql
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0001_famous_sir_ram.sql
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0002_chief_sage.sql
```
Não modifique migrações já aplicadas. Novas alterações de schema devem usar `pnpm exec drizzle-kit generate` e uma nova migração.

## Verificações
```sh
node tests/records.test.cjs
node tests/documents.test.cjs
node tests/operations.test.cjs
pnpm exec tsc --noEmit
pnpm run build
```
Os testes usam SQLite em memória, sem acesso ao banco de produção. Os PDFs usam jsPDF e fontes TTF locais, sem depender de serviços externos. As fontes originais têm licença SIL Open Font License (ver os arquivos LICENSE em public/fonts).

## Publicação e arquitetura
O projeto existente é reutilizado. Lara autorizou a conclusão e publicação de todos os recursos. A plataforma Sites aplica as migrações e vincula D1/R2 na publicação. A autenticação é controlada pelo acesso privado do Site; não exponha os mesmos endpoints fora desse acesso sem implementar autorização equivalente. Nunca inclua tokens de publicação no código.

Firebase não está configurado. Os registros são organizados pelo campo kind na tabela records; histórico e versões têm tabelas próprias. O upload de logo usa R2. Consulte GUIA.md e ETAPAS.md para uso e limites funcionais.
