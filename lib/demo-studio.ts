import {Entry} from './studio-types';
import {defaultProcesses,scheduledSteps} from './work-processes';
export function studioExamples():Entry[]{const date=new Date().toLocaleDateString('en-CA',{timeZone:'America/Sao_Paulo'}),d=(n:number)=>{const x=new Date(date+'T12:00:00Z');x.setUTCDate(x.getUTCDate()+n);return x.toISOString().slice(0,10)},process=defaultProcesses()[0];const shared={client:'demo-client',project:'demo-project',revision:1,demo:true};return [
{id:'demo-client',kind:'clients',title:'Marina Costa · exemplo',profession:'Arquiteta(o)',clientType:'Freelancer',company:'Costa Arquitetura',status:'Ativo',panelEnabled:true,revision:1,demo:true},
{id:'demo-project',kind:'projects',title:'Apartamento Jardim · exemplo',...shared,status:'Modelagem',workflowStatus:'Em execução',audience:'Cliente final',value:3000,startDate:d(-10),deadline:d(4),stages:scheduledSteps(process.steps,d(-10)).map((s,i)=>({...s,status:i<2?'Concluída':'A iniciar'}))},
{id:'demo-budget',kind:'budgets',title:'Consultoria da sala · exemplo',...shared,project:'',status:'Enviado',audience:'Cliente final',value:1200,date,processSnapshot:process,presentation:'slides'},
{id:'demo-contract',kind:'contracts',title:'Contrato de interiores · exemplo',...shared,status:'Rascunho',date,value:3000,scope:'Projeto de interiores da sala, cozinha e dormitório. Entregas conforme proposta aprovada.'},
{id:'demo-task',kind:'tasks',title:'Aprovar layout · exemplo',...shared,status:'Em aprovação',deadline:d(-1),priority:'Alta'},
{id:'demo-agenda',kind:'agenda',title:'Reunião de apresentação · exemplo',...shared,status:'Agendado',date:d(2),time:'14:00',category:'Apresentação'},
{id:'demo-payment',kind:'finance',title:'Saldo do projeto · exemplo',...shared,type:'Receita',status:'Pendente',date:d(-2),value:1500},
{id:'demo-paid',kind:'finance',title:'Entrada do projeto · exemplo',...shared,type:'Receita',status:'Pago',date:d(-5),paidDate:d(-5),value:1500},
{id:'demo-ontime',kind:'finance',title:'Consultoria · exemplo',...shared,type:'Receita',status:'Em dia',date:d(5),value:1200},
{id:'demo-expense',kind:'finance',title:'Software · exemplo',...shared,client:'',project:'',type:'Despesa',status:'Pago',date:d(-3),paidDate:d(-3),value:180},
{id:'demo-reminder',kind:'tasks',title:'Pedir medidas da cozinha · exemplo',...shared,category:'Lembrete',status:'A fazer',deadline:d(1)},
{id:'demo-briefing',kind:'briefings',title:'Briefing da sala · exemplo',...shared,status:'A preencher',room:'Sala',questions:'Como é a rotina no ambiente?\nQuais móveis serão mantidos?'},
{id:'demo-document',kind:'documents',title:'Ata da reunião · exemplo',...shared,status:'Rascunho',category:'Ata de reunião',content:'Pontos definidos: validar layout e conferir medidas antes da modelagem.'}];}
