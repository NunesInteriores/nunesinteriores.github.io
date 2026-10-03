# Publicação da NUNES INTERIORES no GitHub

O projeto contém duas formas de execução. A publicação atual usa o servidor do Site. A versão GitHub Pages usa o mesmo aplicativo React, com autenticação e dados privados no Firebase. O endereço desejado é `https://nunesinteriores.github.io`.

## O que está pronto

- Compilação estática: `pnpm build:github`.
- Aplicativo e fontes locais, exportados em `dist-github`.
- Fluxo GitHub Actions em `.github/workflows/github-pages.yml`.
- Login de e-mail/senha, restrito ao UID da responsável.
- Adaptador Firebase para clientes, orçamentos, projetos, parcelas, configurações, auditoria e versões.
- Aprovação cria os registros vinculados em uma operação atômica do Firestore, com condições de versão.
- Arquivos privados preservados em blocos no Firestore e abertos após autenticação; não se geram links públicos de PDFs.
- Regras de acesso em `firebase/firestore.rules`.

## Configuração necessária antes da publicação

1. Criar no GitHub da NunesInteriores o repositório `nunesinteriores.github.io`. O código pode ficar público; dados dos clientes e PDFs permanecem no Firebase, com acesso restrito.
2. No projeto Firebase existente, habilitar Authentication → E-mail/senha. Criar a conta da Lara por lá, se ainda não existir, e copiar seu UID. Não compartilhar a senha.
3. Habilitar Cloud Firestore. Em Regras, substituir `PREENCHER_UID` pelo UID da Lara e publicar o arquivo de regras incluído. Nenhuma regra deve liberar acesso anônimo.
4. Em Configurações do projeto → Seus aplicativos → aplicativo Web, copiar `apiKey` e `projectId`. Preencher `public/firebase-config.json`, também com `ownerUid`. Esses são identificadores de configuração do aplicativo, não uma chave privada de conta de serviço.
5. Adicionar `nunesinteriores.github.io` aos domínios autorizados de Authentication.
6. Subir o código para `main`. Em Settings → Pages, escolher GitHub Actions como origem. O fluxo faz a compilação e a publicação.
7. Conferir o login, salvar e reabrir um cadastro, aprovar um orçamento de teste e anexar/baixar um PDF original. A preparação local e os testes de protocolo não substituem a conferência com o Firebase real.

## Transferência dos dados já cadastrados

Na plataforma atual, Configurações → Dados → Exportar backup. Na versão GitHub, após entrar, importar o JSON em Configurações → Dados. Baixar separadamente o logo, as fotos e os PDFs existentes e reenviá-los na nova plataforma. Os endereços privados dos anexos da publicação antiga não funcionam no Firebase novo.

A versão atual continua disponível durante a preparação. Não apagar seus registros antigos até concluir a transferência e conferir os totais.

## Limites

Cada registro tem limite de conteúdo; propostas com grandes volumes de tarefas podem precisar de divisão por projeto. Os arquivos são enviados em blocos de 64 KB e respeitam os limites da interface (4 MB para imagens e 15 MB para PDF). Esses blocos são dados privados no Firestore e consomem o armazenamento e operações desse serviço. A versão estática não usa o banco da publicação anterior.

## Referências técnicas

- https://firebase.google.com/docs/reference/rest/auth
- https://firebase.google.com/docs/firestore/use-rest-api
- https://firebase.google.com/docs/firestore/reference/rest/v1/Precondition
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
