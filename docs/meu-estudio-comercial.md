# Uso atual: pessoal

Atualizado em 04/10/2026: comercialização pausada. Somente a conta responsável é aceita no app (`multiUserEnabled: false`). Nenhum plano ou cobrança ativado. O texto abaixo fica como planejamento futuro.

# Meu Estúdio — preparação comercial

## Estado desta entrega

- Marca pública: Meu Estúdio.
- Google autentica a pessoa; o UID permanente identifica seu espaço.
- A conta original de Lara permanece no mesmo caminho no Firestore. Nenhuma migração ou renomeação dos registros existentes.
- Nova conta: solicita nome da pessoa e do estúdio; cadastra apenas configurações. Sem clientes, projetos, orçamentos, anexos, finanças, preços ou processos copiados da Lara.
- Rascunhos, tema e visibilidade de valores separados por UID no navegador. Rascunhos antigos da responsável são mantidos.
- Regras por UID preparadas em firebase/firestore.rules. A publicação do site NÃO publica essas regras no Firebase.
- Google disponível na hospedagem atual. E-mail/senha, confirmação por e-mail e recuperação preparados, mas desativados no GitHub Pages.
- Nenhuma assinatura, cobrança ou restrição de plano ativada nesta entrega.

## Ação necessária para novos estúdios

No projeto Firebase ln-gestao, abrir Firestore Database → Regras. Publicar o conteúdo de firebase/firestore.rules. Manter `request.auth.uid == userId`, nunca liberar leitura/escrita pública. Isso conserva a conta original e permite que cada nova conta leia e escreva somente sua pasta.

Depois de publicar, validar com duas contas reais: criar um cliente em cada uma, alternar contas e verificar anexos, listas e rascunhos. A entrega automatizada testa essa separação com servidor simulado; não substitui a verificação das regras publicadas.

Para ativar e-mail/senha: primeiro migrar para hospedagem adequada; habilitar o provedor em Firebase Authentication → Método de login e adicionar o domínio autorizado. Ativar `passwordAuthEnabled` no novo endereço. O app exige confirmação do e-mail antes de iniciar o estúdio. Não remover a verificação no servidor.

## Proposta de oferta — preços a validar, não publicados

| Oferta | Mensalidade sugerida | Escopo inicial |
|---|---:|---|
| Essencial | R$ 39,90 | Clientes, projetos, agenda, lembretes, checklists, financeiro básico e orçamento em PDF com modelo padrão. |
| Profissional | R$ 69,90 | Essencial + calculadora por horas/ambientes, contratos, propostas personalizadas, processos de trabalho e automações de orçamento aprovado para demanda e parcelas. |

Teste de 14 dias do Profissional. Sem plano gratuito permanente neste primeiro lançamento. Limites de armazenamento e projetos ativos precisam ser definidos depois de medir o piloto. Não anunciar usuários, projetos ou arquivos ilimitados antes disso. Colaboração em equipe ainda não existe: cada login hoje corresponde a um estúdio independente.

Privacidade, isolamento de contas, acesso aos próprios dados e exportação não são diferenciais pagos. Ao encerrar ou reduzir o plano, preservar o histórico e permitir consulta/exportação; bloquear novas operações além do plano, sem apagar dados.

## Antes de cobrar

1. Mover a hospedagem do aplicativo para Firebase Hosting ou outro provedor que aceite SaaS; manter GitHub para versionamento. GitHub Pages proíbe SaaS comercial.
2. Substituir arquivos divididos em documentos Firestore por armazenamento próprio para arquivos, com permissões por conta, quotas e monitoramento de uso. Anexos de 15 MB consomem muitas operações na implementação atual.
3. Paginador de registros/histórico e conciliação incremental. O app atual lê todas as coleções para algumas operações.
4. Backend confiável para assinatura e permissões. Checkout pelo processador de pagamentos; webhook validado atualiza subscriptions/{uid}. O navegador não pode escolher seu plano pago. As regras preparadas já negam escrita de assinaturas pelo cliente.
5. Definir limites, cancelamento, prazo de teste, suporte e rotina de recuperação de dados. Termos e aviso de privacidade específicos do serviço devem ser revisados antes do lançamento.
6. Pilotar com poucas contas reais e medir armazenamento, operações, impostos, tarifas de pagamento e suporte. As mensalidades sugeridas não representam margem garantida.

Fontes consultadas em 03/10/2026:
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- https://firebase.google.com/docs/rules/basics
- https://firebase.google.com/pricing
- https://firebase.google.com/docs/auth/web/password-auth
