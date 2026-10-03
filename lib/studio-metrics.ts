export interface StudioRecord {kind:string;archived?:boolean;deleted?:boolean;status?:string;type?:string;value?:number|string;discount?:number|string;deadline?:string;date?:string;[key:string]:unknown}
export function studioMetrics(records:StudioRecord[]){
 const active=records.filter(r=>!r.archived&&!r.deleted&&!(r.kind==='finance'&&r.scope==='personal'));
 const sum=(kind:string,test:(r:StudioRecord)=>boolean,amount:(r:StudioRecord)=>number=r=>Number(r.value)||0)=>active.filter(r=>r.kind===kind&&test(r)).reduce((total,r)=>total+amount(r),0);
 return {
  projects:active.filter(r=>r.kind==='projects'&&!['Concluído','Entregue'].includes(r.status||'')).length,
  completed:active.filter(r=>r.kind==='projects'&&r.status==='Concluído').length,
  proposals:sum('budgets',r=>['Rascunho','Enviado'].includes(r.status||''),r=>Math.max(0,(Number(r.value)||0)-(Number(r.discount)||0))),
  pendingTasks:active.filter(r=>r.kind==='tasks'&&!['Concluído','Entregue'].includes(r.status||'')).length,
  receivable:sum('finance',r=>r.type==='Receita'&&r.status!=='Pago'),
  received:sum('finance',r=>r.type==='Receita'&&r.status==='Pago'),
  expenses:sum('finance',r=>r.type==='Despesa'&&r.status==='Pago'),
  payable:sum('finance',r=>r.type==='Despesa'&&r.status!=='Pago')
 };
}
