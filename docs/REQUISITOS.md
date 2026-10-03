A plataforma será inicialmente para uso pessoal, mas quero uma arquitetura organizada que permita futuras ampliações.

**IMPORTANTE:** Não quero apenas um dashboard ilustrativo ou um protótipo com botões sem função. Quero um sistema real, com módulos integrados, persistência de dados, formulários editáveis, geração de documentos e funcionalidades efetivas.

## 1. REFERÊNCIA VISUAL

Minha principal referência é a plataforma Traço:

[https://arqlais.github.io/controle/#/inicio](https://arqlais.github.io/controle/#/inicio)

Gosto especialmente da diagramação, tipografia, menus, cores, espaçamentos, formulários, editores e pré-visualizações dos documentos.

Quero uma experiência visual de qualidade equivalente, porém desenvolvida com código próprio, identidade autoral e marca LN Gestão.

### Identidade visual desejada

- Estética editorial, minimalista, sofisticada e contemporânea.
- Visual limpo, com bastante respiro entre os elementos.
- Fundo off-white, bege ou tom de papel.
- Superfícies brancas e bordas discretas.
- Tipografia Poppins para textos, campos, botões e menus.
- Playfair Display para títulos e detalhes editoriais.
- Elementos arredondados, sem aparência infantil.
- Menu lateral elegante, organizado por categorias.
- Botão ou item ativo destacado.
- Ícones minimalistas e consistentes.
- Tabelas e formulários bem diagramados.
- Interface responsiva.

### Paleta inicial sugerida

| Aplicação       | Cor     |
| --------------- | ------- |
| Fundo principal | #F6F2EC |
| Superfícies     | #FFFFFF |
| Texto principal | #2A2A2A |
| Destaque escuro | #2F2F2F |
| Bege de apoio   | #CDB89C |
| Marrom de apoio | #9B8264 |
| Bordas          | #EAE1D4 |

Quero também uma área de personalização para alterar as cores principais, cores dos textos e elementos de destaque.

As alterações devem ser salvas e aplicadas automaticamente em toda a plataforma.

---

# 2. ESTRUTURA GERAL

Criar os seguintes módulos:

1. Início / Dashboard
2. Clientes
3. Projetos
4. Orçamentos
5. Contratos
6. Documentos
7. Briefings
8. Agenda
9. Financeiro
10. Demandas
11. Configurações e personalização

Todos os módulos devem compartilhar informações entre si.

O cadastro de um cliente, por exemplo, deve poder ser utilizado automaticamente em projetos, orçamentos, contratos e financeiro.

---

# 3. FUNCIONALIDADES DETALHADAS

## MÓDULO 01 — DASHBOARD

Desenvolver uma página inicial com visão geral do escritório.

Exibir:

- Projetos ativos.
- Projetos concluídos.
- Demandas pendentes.
- Próximas entregas.
- Compromissos da agenda.
- Receitas previstas.
- Valores recebidos.
- Despesas e pagamentos pendentes.
- Atalhos para criar cliente, projeto, orçamento, contrato e demanda.

Os indicadores devem utilizar dados reais dos demais módulos, e não valores fictícios.

## MÓDULO 02 — CLIENTES

Criar cadastro completo de clientes.

Campos:

- Nome completo ou razão social.
- CPF/CNPJ.
- E-mail.
- Telefone/WhatsApp.
- Endereço.
- Cidade e estado.
- Observações.

Funcionalidades:

- Criar, editar, pesquisar e excluir clientes.
- Visualizar histórico.
- Relacionar um cliente a vários projetos.
- Consultar contratos e orçamentos vinculados.
- Reaproveitar automaticamente os dados cadastrados nos documentos.

## MÓDULO 03 — PROJETOS

Criar uma área para gerenciamento de projetos de interiores.

Campos principais:

- Nome do projeto.
- Cliente.
- Endereço do imóvel.
- Tipo de serviço.
- Descrição.
- Data de início.
- Prazo de entrega.
- Status.
- Valor contratado.
- Observações.

Cada projeto deverá possuir uma página individual contendo:

- Informações gerais.
- Etapas de desenvolvimento.
- Demandas vinculadas.
- Orçamentos.
- Contratos.
- Briefings.
- Agenda e prazos.
- Movimentações financeiras relacionadas.

Permitir acompanhar o andamento de cada etapa do projeto.

## MÓDULO 04 — ORÇAMENTOS

Este é um dos módulos prioritários.

Quero um editor de propostas comerciais completo e visualmente sofisticado.

### Funcionalidades

- Criar novo orçamento.
- Selecionar cliente cadastrado.
- Vincular a um projeto.
- Definir título e descrição da proposta.
- Inserir escopo dos serviços.
- Adicionar itens e etapas.
- Informar entregáveis.
- Definir prazos.
- Adicionar valores individuais e totais.
- Aplicar descontos.
- Definir condições de pagamento.
- Informar quantidade de parcelas.
- Adicionar observações.
- Salvar como rascunho.
- Duplicar orçamento.
- Editar orçamento existente.
- Alterar status para enviado, aprovado, recusado etc.

### Editor e pré-visualização

Quero uma experiência semelhante à referência, com formulário de edição e pré-visualização do documento.

A proposta deve ser diagramada automaticamente conforme os campos preenchidos.

Permitir gerar um PDF profissional com a identidade da LN Interiores.

### Integração

Quando um orçamento for aprovado, quero a possibilidade de:

- Criar um projeto com os dados já preenchidos.
- Gerar um contrato com base no orçamento.
- Criar os lançamentos financeiros correspondentes.
- Registrar prazos na agenda.

## MÓDULO 05 — CONTRATOS

**Este é um dos módulos mais importantes de toda a plataforma.**

Quero um editor de contratos profissionais, não apenas uma página com uma caixa de texto.

### Funcionalidades

- Criar contrato do zero.
- Utilizar modelos previamente cadastrados.
- Selecionar cliente.
- Vincular contrato ao projeto.
- Importar informações de um orçamento aprovado.
- Preencher automaticamente os dados das partes.
- Informar objeto e escopo da contratação.
- Definir etapas, entregas e prazos.
- Informar valores e condições de pagamento.
- Definir número de rodadas de ajustes.
- Editar individualmente as cláusulas.
- Adicionar novas cláusulas.
- Excluir ou reorganizar cláusulas.
- Inserir observações específicas.
- Duplicar contratos.
- Salvar versões e rascunhos.

### Pré-visualização

Quero uma visualização do contrato em formato A4, com paginação e diagramação profissional.

Conforme eu editar os campos, a prévia deverá ser atualizada.

O contrato precisa ter:

- Cabeçalho com identidade LN.
- Título.
- Identificação das partes.
- Cláusulas numeradas.
- Formatação limpa e sofisticada.
- Espaço para data e assinaturas.
- Exportação em PDF.

Quero conseguir criar um contrato completo em poucos minutos, alterando apenas as informações específicas de cada contratação.

## MÓDULO 06 — DOCUMENTOS

Criar uma biblioteca de documentos profissionais.

Funcionalidades:

- Criar modelos personalizados.
- Editar conteúdos.
- Duplicar modelos.
- Organizar por categoria.
- Relacionar documentos aos clientes e projetos.
- Inserir automaticamente informações cadastradas.
- Visualizar antes da exportação.
- Gerar PDF.

Todos os documentos devem seguir uma identidade visual padronizada.

## MÓDULO 07 — BRIEFINGS

Criar um editor de formulários de briefing.

Quero conseguir montar formulários próprios e reutilizá-los com diferentes clientes.

### Modelos iniciais

- Briefing geral.
- Sala de estar.
- Sala de jantar.
- Cozinha.
- Dormitórios.
- Banheiros.
- Lavabo.
- Área de serviço.
- Varanda/terraço.
- Outros ambientes personalizáveis.

### Tipos de perguntas

- Resposta curta.
- Resposta longa.
- Múltipla escolha.
- Caixas de seleção.
- Sim ou não.
- Seleção de alternativas.
- Campo para observações.

As perguntas devem contemplar necessidades, preferências, estilo, cores, piso, revestimentos, iluminação, forro, mobiliário planejado ou solto, marcenaria e demais informações pertinentes ao projeto de interiores.

### Funcionalidades

- Criar e editar modelos.
- Adicionar e remover perguntas.
- Alterar a ordem das perguntas.
- Marcar perguntas obrigatórias.
- Duplicar briefings.
- Vincular respostas ao cliente e projeto.
- Consultar posteriormente as respostas.
- Gerar um resumo do briefing.

Desejo também poder compartilhar um formulário com o cliente para preenchimento.

## MÓDULO 08 — AGENDA

Criar calendário para organização do escritório.

Funcionalidades:

- Visualização mensal, semanal e diária.
- Cadastro de compromissos.
- Reuniões.
- Visitas técnicas.
- Entregas.
- Prazos de projetos.
- Eventos personalizados.
- Edição e exclusão de compromissos.
- Vinculação de eventos aos projetos.
- Identificação visual por categoria.

As datas registradas nos projetos e demandas devem poder aparecer automaticamente na agenda.

## MÓDULO 09 — FINANCEIRO

Criar uma área completa de controle financeiro do escritório.

### Funcionalidades

- Cadastrar receitas.
- Cadastrar despesas.
- Criar lançamentos parcelados.
- Informar vencimentos.
- Registrar pagamentos recebidos.
- Identificar pagamentos pendentes e atrasados.
- Categorizar movimentações.
- Vincular receitas a clientes e projetos.
- Pesquisar e filtrar lançamentos.
- Consultar histórico financeiro.

### Dashboard financeiro

Exibir:

- Total previsto.
- Total recebido.
- Total pendente.
- Despesas.
- Saldo.
- Próximos vencimentos.
- Resumo por período.

Os valores devem ser calculados automaticamente.

Ao aprovar um orçamento e definir as parcelas, quero poder criar os lançamentos financeiros sem precisar digitá-los novamente.

## MÓDULO 10 — DEMANDAS

Criar um gerenciador de tarefas para a rotina do escritório.

Campos:

- Nome da demanda.
- Descrição.
- Projeto vinculado.
- Prazo.
- Prioridade.
- Status.
- Observações.

Funcionalidades:

- Criar, editar e excluir tarefas.
- Visualização em lista.
- Visualização Kanban.
- Alterar status.
- Filtrar por projeto.
- Filtrar por prioridade.
- Consultar demandas vencidas e próximas do vencimento.
- Marcar tarefas como concluídas.

Exemplos de demandas: layout, modelagem 3D, renderização, ajustes, detalhamento, elaboração de caderno e entrega final.

## MÓDULO 11 — CONFIGURAÇÕES

Criar área administrativa com:

- Dados do escritório.
- Nome comercial.
- Informações de contato.
- Logotipo.
- Personalização de cores.
- Configurações de documentos.
- Preferências de visualização.
- Modelos reutilizáveis.

Quero conseguir alterar a aparência da plataforma sem precisar modificar o código.

---

# 4. INTEGRAÇÃO E AUTOMAÇÃO ENTRE MÓDULOS

Este requisito é fundamental.

Não quero onze páginas isoladas. Quero uma plataforma integrada.

### Exemplo de fluxo desejado

1. Cadastro um cliente.
2. Crio uma proposta comercial.
3. O cliente aprova a proposta.
4. O sistema permite gerar um contrato com os dados já preenchidos.
5. Crio ou ativo o projeto.
6. As parcelas são registradas no financeiro.
7. Os prazos são inseridos na agenda.
8. As etapas podem originar demandas.
9. Os documentos e briefings ficam relacionados ao mesmo projeto.

Evitar ao máximo o preenchimento repetitivo de informações.

---

# 5. REQUISITOS TÉCNICOS

Minha estrutura atual utiliza:

- React.
- Vite.
- Firebase Authentication.
- Cloud Firestore.
- Firebase Hosting.

Caso seja necessário utilizar outras bibliotecas para gerar documentos, calendários, gráficos e editores, escolha soluções adequadas e explique sua finalidade.

### Requisitos obrigatórios

- Login seguro.
- Persistência real dos dados.
- Dados organizados por coleções.
- Operações completas de criação, leitura, edição e exclusão.
- Validação dos formulários.
- Estados de carregamento.
- Mensagens de sucesso e erro.
- Confirmação antes de exclusões importantes.
- Interface responsiva.
- Componentes reutilizáveis.
- Código organizado e de fácil manutenção.
- Regras de segurança adequadas no Firestore.
- Não expor chaves privadas no frontend.
- Não utilizar informações fictícias como se fossem dados reais.

---

# 6. COMO QUERO QUE O DESENVOLVIMENTO SEJA FEITO

Não quero que você desenvolva uma plataforma genérica e depois apenas troque as cores.

Quero que estude primeiro a referência visual e compreenda a experiência de navegação, a hierarquia dos elementos, os formulários, os editores e as pré-visualizações.

Priorize a qualidade da interface tanto quanto as funcionalidades.

### Ordem sugerida de desenvolvimento

**Etapa 1 — Identidade e estrutura**

Desenvolver layout geral, menu lateral, cabeçalho, dashboard, tipografia, paleta e personalização.

**Etapa 2 — Cadastros e projetos**

Implementar clientes, projetos e persistência dos dados.

**Etapa 3 — Editores principais**

Desenvolver orçamentos e contratos, incluindo formulários completos, modelos, pré-visualização e exportação.

**Etapa 4 — Documentos e briefings**

Implementar editores, biblioteca de modelos e vinculação aos clientes.

**Etapa 5 — Gestão operacional**

Desenvolver agenda, demandas e financeiro.

**Etapa 6 — Integrações**

Conectar os módulos e automatizar os fluxos de trabalho.

**Etapa 7 — Revisão**

Testar as funcionalidades, corrigir erros, revisar responsividade e aprimorar a experiência visual.

---

# 7. ORIENTAÇÕES IMPORTANTES

- Não quero botões meramente decorativos.
- Não quero formulários que percam as informações após atualizar a página.
- Não quero módulos visualmente desconectados.
- Não quero documentos com aparência de formulários comuns.
- Não quero uma cópia direta do código proprietário da plataforma de referência.
- Não quero que alterações sejam publicadas sem minha autorização.
- Quero conseguir visualizar e aprovar cada etapa antes de avançar.
- Quero receber os arquivos completos e organizados.
- Quero instruções claras para executar e testar a plataforma.

**OBJETIVO FINAL:** Criar um sistema de gestão autoral, elegante e realmente funcional para a LN Interiores, que centralize clientes, projetos, propostas, contratos, documentos, briefings, agenda, demandas e financeiro, reduzindo o trabalho administrativo e automatizando tarefas repetitivas.