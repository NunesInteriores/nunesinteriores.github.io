# Usar a LN Gestão

1. Abra o endereço do estúdio e entre com a conta proprietária.
2. Em **Configurações**, confirme os contatos, cores, fontes e logotipo. Clique em salvar.
3. Cadastre seus clientes. Abra a ficha para consultar projetos e documentos relacionados.
4. Em **Orçamentos**, selecione o cliente, adicione serviços, valores, prazos, desconto e parcelas. A prévia mostra o PDF A4. Salve como rascunho ou altere a situação.
5. Quando a proposta for aprovada, clique em **Aprovar e integrar proposta**. O sistema salva a proposta e gera projeto (ou usa o projeto vinculado), contrato, receitas parceladas e demandas. Quando houver prazo de entrega, cria também o compromisso. Repetir a integração preserva o que já foi gerado.
6. Abra o contrato gerado para revisar as cláusulas, partes e condições. Adicione, remova ou reordene cláusulas. Exporte o PDF para enviar ao cliente. A exportação não equivale a salvar: salve suas alterações também.
7. Use **Salvar como modelo** para reutilizar propostas, contratos, documentos e briefings. Escolha o modelo em um novo editor. Os vínculos de cliente/projeto e as respostas não são copiados para o modelo.
8. Use **Histórico de versões** para carregar uma versão anterior no editor. Salve para efetivar a restauração.
9. Em documentos, use `{{cliente}}`, `{{projeto}}`, `{{estudio}}`, `{{email}}`, `{{endereco}}`, `{{cpf}}` e `{{data}}` para inserir os dados cadastrados.
10. Em briefings, escolha um ambiente, ajuste as perguntas, tipos e obrigatoriedade. Salve o briefing antes de enviar. Clique em **Baixar formulário para cliente** e envie o arquivo HTML. O cliente abre o arquivo no navegador, preenche e baixa as respostas JSON. Importe esse JSON no mesmo briefing e salve. Você também pode preencher respostas diretamente no editor.
11. Na agenda, mude entre mês, semana e dia. Clique em um dia para criar compromisso. Prazos de projetos e demandas aparecem automaticamente e abrem seus registros de origem.
12. No financeiro, registre receitas/despesas, vencimentos e categorias. Para um lançamento parcelado, informe o valor TOTAL, quantidade de parcelas e primeiro vencimento; clique em **Salvar e dividir em parcelas**. Os centavos são distribuídos para manter o total exato. Registrar pagamento usa a data de hoje, que pode ser ajustada no editor.
13. Em demandas, alterne lista/Kanban e filtre projeto, prioridade e atraso. Alterar a situação salva diretamente.
14. Exclusões movem o registro para a lixeira, após confirmação. Os vínculos são preservados. Restaure pela aba Lixeira. Modelos têm sua própria área em Configurações.
15. Faça backups em Configurações. A importação adiciona registros que ainda não existem e preserva os identificadores já presentes. O backup JSON contém os registros; os arquivos de logotipo permanecem no armazenamento do estúdio.

## Dados e privacidade
Os registros ficam no banco privado do estúdio. Não há clientes fictícios inseridos. Rascunhos temporários são recuperados no mesmo navegador. Fechar o editor descarta seu rascunho; salvar grava no banco.

O formulário enviado ao cliente funciona como arquivo independente, sem abrir acesso ao estúdio. As cláusulas e condições devem ser revisadas antes do envio. Não há integração com Firebase, WhatsApp ou assinatura digital nesta entrega.

## Demandas, agenda, financeiro e painel privado
- **Demandas:** o quadro reúne rascunhos e propostas enviadas, seguidos de alinhamento, execução, ajustes, aprovação e entrega. As fichas de projeto mostram progresso das etapas e pagamentos. A lista também inclui demandas geradas pelas etapas dos projetos. As situações antigas continuam compatíveis.
- **Agenda:** selecione um dia para consultar a coluna lateral; use + para preencher um compromisso no formulário lateral. Ative/desative prazos, pagamentos e compromissos. Mês, semana e dia continuam disponíveis.
- **Financeiro:** os indicadores e o gráfico seguem o mês selecionado. Recebimentos usam a data efetiva de pagamento (ou o vencimento, se um registro antigo não tiver essa data). O saldo realizado subtrai despesas pagas. As abas separam recebimentos, despesas e relatórios. CSV exporta os lançamentos filtrados.
- **Painel do cliente:** conforme a escolha de Lara, é uma área exclusivamente privada. Clique em criar painel para reunir projetos, etapas, prazos, pagamentos, contratos, briefings e documentos daquele cliente. Não há link público nem acesso do cliente nesta configuração. Desativar um painel não exclui seus registros.
- A busca superior abre com Ctrl K e pesquisa registros e módulos.

### Destinatário e entrega do orçamento
No início do orçamento, escolha **cliente final** ou **freelancer · escritório parceiro**. Revise **Formatos e arquivos entregues** para definir o combinado de cada proposta. Esse texto aparece na prévia e no PDF e acompanha o contrato gerado pelo orçamento aprovado. Textos personalizados são preservados ao trocar a opção.

### Sair de um editor
Use **Voltar / fechar editor**, o botão **voltar** ou outro módulo. Escolha **Salvar e sair**, **Não salvar e sair** ou **Continuar editando**. A escolha aparece mesmo sem alterações. Sair sem salvar mantém o registro anterior; se houver falha ao salvar, o editor permanece aberto.

### Página inicial e exemplos
A página inicial reúne ações, lembretes, prioridades, próximos sete dias e resultados financeiros. Use **Ver exemplo preenchido** para visualizar atividades fictícias. Neste modo, alterações ficam temporárias e separadas dos registros reais. Use **Voltar para meus dados** para retomar o trabalho.

### Profissão e perfil do cliente
Cadastre a profissão, a empresa e o perfil de contratação na ficha do cliente. A profissão identifica quem procurou o estúdio; o perfil define a linha de trabalho: cliente final, freelancer/parceiro ou estudante.

### Processos e propostas em slides
Configure os modelos em **Etapas de trabalho**. A divisão do pagamento deve somar 100%. Escolha o processo no orçamento; a proposta conserva uma cópia. Na integração de uma proposta aprovada, os prazos geram etapas e entregas na agenda, e os percentuais geram parcelas. O início de cada etapa define seu vencimento previsto. Dias úteis consideram segunda a sexta-feira; feriados e dependências de aprovação devem ser revisados no projeto. A apresentação em slides está disponível na prévia e no PDF.

### Situação financeira
Use **Marcar pago**, **Atrasado** e **Em dia**. Vencimentos anteriores à data atual são automaticamente classificados como atrasados enquanto não forem quitados. Use **Reagendar** para registrar uma nova data acordada. A classificação não substitui a confirmação do pagamento.

O manual completo está em **Manual** e pode ser baixado nessa página.

### Pagamentos dentro da demanda
Abra a demanda / projeto e consulte **Pagamentos acordados** na visão geral ou na aba Financeiro. Adicione uma parcela, descreva a condição (sinal, aprovação ou entrega), informe valor, vencimento previsto e forma de pagamento. Use **Salvar no financeiro**: a parcela fica vinculada ao cliente e ao projeto e aparece no controle financeiro. Use **Marcar pago** após confirmar o recebimento; para corrigir a data, edite a parcela. **Reabrir pagamento** desfaz a quitação. Alterações feitas no financeiro aparecem na mesma demanda. Parcelas geradas pela proposta aprovada são reaproveitadas: não cadastre o mesmo pagamento novamente.
