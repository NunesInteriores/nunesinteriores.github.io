# LN Gestão — entrega integrada

Lara autorizou a conclusão e a publicação de todas as etapas, dispensando aprovações intermediárias.

## Recursos implementados
- Identidade editorial, fontes locais, cores editáveis, tema, logotipo e dados do estúdio.
- Dashboard calculado a partir dos registros salvos, sem dados de demonstração.
- Clientes e projetos com fichas individuais, histórico, etapas e vínculos.
- Propostas com itens, entregáveis, descontos, parcelas, modelos e status.
- Contratos com cláusulas editáveis e reordenáveis, modelos, importação de proposta aprovada e versões recuperáveis.
- Documentos reutilizáveis, categorias e campos automáticos.
- Prévia paginada e PDF A4 com fontes incorporadas, cabeçalho e assinaturas.
- Briefings com seis tipos de perguntas, modelos por ambiente, respostas e resumo.
- Formulário HTML para envio ao cliente e importação do JSON de respostas.
- Calendário mensal, semanal e diário, com prazos automáticos.
- Demandas em lista e Kanban, filtros e atraso.
- Financeiro com filtros, pagamentos, datas, parcelamento e valores calculados.
- Integração transacional de proposta aprovada, sem duplicar os registros gerados.
- Exclusão reversível, revisões concorrentes, backup e rascunhos temporários recuperáveis.

## Estrutura
React, Vinext/Vite, banco Cloudflare D1, armazenamento de logotipo em R2 e acesso privado da plataforma Sites. Firebase não foi configurado ou migrado. O acesso permanece privado para a proprietária.

## Limites da entrega
- O compartilhamento de briefing usa arquivos HTML/JSON; não é um formulário público hospedado.
- Assinaturas em contratos são espaços para assinatura; não há serviço de assinatura eletrônica.
- Os modelos de contrato são textos editáveis, que precisam refletir cada contratação.
- A integração gera os registros uma vez. Alterações posteriores são feitas nos módulos correspondentes; repetir a integração não sobrescreve esses registros.
- Rascunhos não salvos ficam temporariamente no dispositivo; registros salvos ficam no banco do estúdio.
