import {paymentPlanError} from './payment-plan';
import {processError,WorkProcess} from './work-processes';
export const recordKinds=['clients','projects','budgets','contracts','documents','briefings','agenda','finance','tasks','settings','templates'] as const;
export type ValidationRecord={id?:unknown;kind?:unknown;title?:unknown;[key:string]:unknown};
export function validateRecord(r:ValidationRecord):string|null{
 if(!recordKinds.includes(r.kind as any))return 'Módulo inválido.';
 if(typeof r.id!=='string'||!r.id||r.id.length>100)return 'Identificador inválido.';
 if(typeof r.title!=='string'||!r.title.trim()||r.title.length>500)return 'Preencha o nome ou título (até 500 caracteres).';
 if(r.paymentPlan!==undefined){const error=paymentPlanError(r.paymentPlan,Number(r.value)||0);if(error)return error;}
 if(r.kind==='clients'){
  if(r.email&&(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(r.email))||String(r.email).length>254))return 'Confira o endereço de e-mail.';
  if(r.tax&&!/^\d{11}$|^\d{14}$/.test(String(r.tax).replace(/\D/g,'')))return 'O CPF deve ter 11 dígitos e o CNPJ, 14.';
  if(r.state&&!/^[A-Z]{2}$/i.test(String(r.state)))return 'Informe o estado com duas letras, como SP.';
 }
 for(const key of ['value','discount','area'])if(r[key]!==undefined&&r[key]!==''&&(!Number.isFinite(Number(r[key]))||Number(r[key])<0))return 'Valores e áreas devem ser números iguais ou maiores que zero.';
 for(const key of ['date','startDate','deadline','validity','paidDate','firstDue'])if(r[key]){const value=String(r[key]);if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return 'Confira as datas informadas.';const [year,month,day]=value.split('-').map(Number);const date=new Date(Date.UTC(year,month-1,day));if(date.getUTCFullYear()!==year||date.getUTCMonth()!==month-1||date.getUTCDate()!==day)return 'Confira as datas informadas.';}
 if(r.kind==='projects'&&r.startDate&&r.deadline&&String(r.deadline)<String(r.startDate))return 'A entrega deve ocorrer na data de início ou depois dela.';
 if(r.stages!==undefined){if(!Array.isArray(r.stages)||r.stages.length>100)return 'Use até 100 etapas por projeto.';for(const s of r.stages){if(!s||typeof s!=='object'||typeof s.id!=='string'||typeof s.title!=='string'||!s.title.trim()||!['A iniciar','Em andamento','Concluída'].includes(s.status))return 'Confira o nome e a situação das etapas.';}}
 if(r.audience!==undefined&&!['Cliente final','Freelancer','Estudante'].includes(String(r.audience)))return 'Escolha cliente final, freelancer ou estudante.';
 if(r.processSnapshot){const err=processError(r.processSnapshot as WorkProcess);if(err)return err;}
 if(r.kind==='settings'){
 for(const key of ['color','supportColor','italicColor','backgroundColor','cardColor','textColor'])if(r[key]!==undefined&&!/^#[0-9a-fA-F]{6}$/.test(String(r[key])))return 'Use cores no formato #RRGGBB.';
 if(r.cornerRadius!==undefined&&(!Number.isFinite(Number(r.cornerRadius))||Number(r.cornerRadius)<0||Number(r.cornerRadius)>24))return 'Use cantos entre 0 e 24 px.';
 const pricing:any=r.pricingRules; if(pricing){for(const [key,value] of Object.entries(pricing))if(!Number.isFinite(Number(value))||Number(value)<0||Number(value)>10000)return 'Confira as regras de preço.';if(Number(pricing.studentDiscount)>100)return 'O desconto deve estar entre 0 e 100%.';}
 const services:any=r.services;if(services!==undefined){if(!Array.isArray(services)||services.length>100)return 'Use até 100 serviços.';for(const s of services)if(!s.id||!s.title?.trim()||!s.category?.trim()||!s.unit||['value','fixed','minimum','packageQuantity','packageValue'].some(key=>!Number.isFinite(Number(s[key]))||Number(s[key])<0))return 'Confira os nomes e valores dos serviços.';}
 const doc:any=r.documentDefaults;if(doc&&((doc.cardFee!==undefined&&(!Number.isFinite(Number(doc.cardFee))||Number(doc.cardFee)<0||Number(doc.cardFee)>100))||(doc.adjustments!==undefined&&(!Number.isInteger(Number(doc.adjustments))||Number(doc.adjustments)<0))||(doc.numberStart!==undefined&&(!Number.isInteger(Number(doc.numberStart))||Number(doc.numberStart)<1))))return 'Confira taxa, numeração e rodadas de ajustes.';
 const goals:any=r.goals;if(goals&&Object.values(goals).some(v=>!Number.isFinite(Number(v))||Number(v)<0))return 'Confira os valores das metas.';
 }
 if(r.kind==='settings'&&r.processes!==undefined){if(!Array.isArray(r.processes)||r.processes.length>50)return 'Use até 50 processos.';for(const p of r.processes){if(!p||!Array.isArray(p.steps)||p.steps.length>100)return 'Confira as etapas do processo.';const err=processError(p);if(err)return err;}}
 if(r.deliveryFormats!==undefined&&(typeof r.deliveryFormats!=='string'||r.deliveryFormats.length>20000))return 'Confira os formatos de entrega.';
 if(r.templateKind&&!['budgets','contracts','documents','briefings'].includes(String(r.templateKind)))return 'Tipo de modelo inválido.';
 if(r.items!==undefined&&(!Array.isArray(r.items)||r.items.length>100||r.items.some(i=>!i||!i.title?.trim()||!Number.isFinite(Number(i.quantity))||Number(i.quantity)<0||!Number.isFinite(Number(i.unitValue))||Number(i.unitValue)<0)))return 'Confira os serviços, quantidades e valores.';
 if(r.clausesList!==undefined&&(!Array.isArray(r.clausesList)||r.clausesList.length>100||r.clausesList.some(c=>!c?.title?.trim()||typeof c.body!=='string')))return 'Confira o título e texto das cláusulas.';
 if(r.questionsList!==undefined&&(!Array.isArray(r.questionsList)||r.questionsList.length>100||r.questionsList.some(q=>!q?.id||!q.label?.trim()||!['short','long','radio','checkbox','yesno','select'].includes(q.type)||!Array.isArray(q.options))))return 'Confira as perguntas do briefing.';
 if(r.installments!==undefined&&r.installments!==''&&(Number(r.installments)<1||Number(r.installments)>60||!Number.isInteger(Number(r.installments))))return 'Use de 1 a 60 parcelas.';
 if(r.deleted!==undefined&&typeof r.deleted!=='boolean')return 'Situação da lixeira inválida.';
 return null;
}
export function historyAction(previous:ValidationRecord|null,next:ValidationRecord){if(!previous)return 'criado';if(!previous.deleted&&next.deleted)return 'excluído';if(previous.deleted&&!next.deleted)return 'restaurado';if(!previous.archived&&next.archived)return 'arquivado';if(previous.archived&&!next.archived)return 'desarquivado';return 'editado';}
export function changedFields(previous:ValidationRecord|null,next:ValidationRecord){if(!previous)return [];return Object.keys(next).filter(k=>!['revision','mutationId','updatedAt','createdAt'].includes(k)&&JSON.stringify(previous[k])!==JSON.stringify(next[k]));}
