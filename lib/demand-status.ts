/** One commercial/production vocabulary, while accepting saved legacy statuses. */
export const demandStatuses=['Primeiro contato','Em orçamento','Aprovado','Em execução','Em revisões','Projeto entregue','Pendente / aguardando retorno'];
export function demandStatus(value:any,fallback='Primeiro contato'):string{
 const text=String(value||'');if(demandStatuses.includes(text))return text;
 return ({'Em alinhamento':'Aprovado','Em ajustes':'Em revisões','Em aprovação':'Em revisões','Pendente do cliente / profissional':'Pendente / aguardando retorno','Entregue':'Projeto entregue','Concluído':'Projeto entregue','Finalizado':'Projeto entregue','A fazer':'Primeiro contato','Em andamento':'Em execução',Briefing:'Aprovado',Layout:'Em execução',Modelagem:'Em execução',Apresentação:'Em revisões',Detalhamento:'Em execução',Rascunho:'Em orçamento',Enviado:'Em orçamento'} as Record<string,string>)[text]||fallback;
}
export const delivered=(value:any)=>['Entregue','Concluído','Finalizado','Projeto entregue'].includes(String(value));
export function projectPhase(value:any){return delivered(value)?'Concluído':demandStatus(value)==='Pendente / aguardando retorno'?'Pendente do cliente / profissional':['Primeiro contato','Em orçamento','Aprovado'].includes(demandStatus(value))?'Briefing':'Modelagem';}
