export type Kind='home'|'clients'|'projects'|'budgets'|'contracts'|'documents'|'briefings'|'agenda'|'finance'|'tasks'|'settings'|'templates'|'clientPanel'|'processes'|'manual';
export type Stage={id:string;title:string;status:'A iniciar'|'Em andamento'|'Concluída';deadline?:string;description?:string;includes?:string;days?:number;dayType?:string;payment?:number;startDate?:string};
export type Entry={id:string;kind:Kind;title:string;stages?:Stage[];revision?:number;deleted?:boolean;archived?:boolean;[key:string]:any};
export const defaultStages=()=>['Briefing e levantamento','Estudo de layout','Modelagem 3D e imagens','Apresentação e ajustes','Detalhamento e caderno','Entrega final'].map(title=>({id:crypto.randomUUID(),title,status:'A iniciar' as const,deadline:''}));
export const formatMoney=(v:any)=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(Number(v)||0);
export const formatDay=(v:string)=>v?new Date(v+'T12:00:00').toLocaleDateString('pt-BR'):'—';

export type Clause={id:string;title:string;body:string};
export type ServiceItem={id:string;title:string;description:string;deliverables:string;quantity:number;unitValue:number;term:string};
export type Question={id:string;label:string;type:string;required:boolean;options:string[]};
