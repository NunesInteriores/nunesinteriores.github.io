import {Entry} from './studio-types';
export const appearanceDefaults={font:'Poppins',displayFont:'Playfair Display',color:'#2F2F2F',supportColor:'#CDB89C',italicColor:'#9B8264',backgroundColor:'#F6F2EC',cardColor:'#FFFFFF',textColor:'#2A2A2A',cornerRadius:18,appearanceVersion:2};
export const pricingDefaults={urgency:30,extraFloor:50,editableFile:30,studentDiscount:40,simple:1,medium:1.3,high:1.6};
export const documentDefaults={presentation:'slides',layout:'column',heading:'proposta de',title:'orçamento',term:'O prazo começa após a aprovação e o recebimento das informações necessárias.',deliveryFormats:'PDF e arquivos previstos no escopo.',payment:'Pix ou transferência — 50% na aprovação + 50% na entrega.',adjustments:2,numberStart:1,paymentMethods:['Pix','Transferência','Cartão de crédito','Boleto','Dinheiro'],cardFee:0,usePDF:true,useContracts:true,useInstagram:false,about:'',photos:[]};
export type PricingMode='hour'|'area'|'unit'|'packages'|'fixed';
export type PricePackage={quantity:number;value:number};
export type ServiceRate={mode:PricingMode;value:number;fixed:number;minimum:number;packages?:PricePackage[]};
export type StudioService={id:string;title:string;category:string;unit:string;value:number;fixed:number;minimum:number;packageQuantity:number;packageValue:number;audience:string;extraFloor:boolean;description:string;mode?:PricingMode;packages?:PricePackage[];alternatives?:ServiceRate[];delivery?:string;notes?:string;clientChoices?:string};
export function defaultServices():StudioService[]{return [
 ['hour','hora de trabalho','Avulsos','hora',60,0,0,'hour'],
 ['render','imagem 3D (render)','3D e visualização','imagem',120,0,0,'packages'],
 ['model','modelagem 3D','3D e visualização','m²',3,150,300,'area'],
 ['plan','planta humanizada','3D e visualização','planta',250,0,0,'unit'],
 ['interiors','projeto de interiores','Projetos e desenho técnico','m²',40,0,1500,'area'],
 ['technical','desenho técnico / executivo','Projetos e desenho técnico','m²',6,400,0,'area'],
 ['board','prancha de apresentação','Apresentação','prancha',150,0,0,'unit'],
 ['slides','apresentação em slides','Apresentação','slide',30,0,150,'unit'],
 ['diagram','diagramas','Apresentação','diagrama',100,0,0,'unit'],
 ['layout','diagramação','Apresentação','prancha',80,0,0,'unit'],
 ['custom','serviço personalizado','Seus serviços','unidade',0,0,0,'fixed']
 ].map(([id,title,category,unit,value,fixed,minimum,mode])=>({id,title,category,unit,value,fixed,minimum,mode,packageQuantity:id==='render'?5:0,packageValue:id==='render'?550:0,packages:id==='render'?[{quantity:5,value:550}]:[],audience:'Os dois',extraFloor:false,description:''} as StudioService));}
export function pricingMode(s:StudioService):PricingMode{return s.mode||((s.packages?.length||s.packageQuantity>0)?'packages':s.unit==='m²'?'area':s.unit==='hora'?'hour':'unit');}
export function servicePackages(s:Pick<StudioService,'packages'|'packageQuantity'|'packageValue'>):PricePackage[]{return (s.packages!==undefined?s.packages:s.packageQuantity>0?[{quantity:s.packageQuantity,value:s.packageValue}]:[]).filter(p=>Number.isInteger(p.quantity)&&p.quantity>0&&Number.isFinite(p.value)&&p.value>=0);}
export function rateService(s:StudioService,index=-1):StudioService{const rate=s.alternatives?.[index];return rate?{...s,...rate,alternatives:undefined,packageQuantity:0,packageValue:0,unit:rate.mode==='hour'?'hora':rate.mode==='area'?'m²':s.unit==='hora'||s.unit==='m²'?'unidade':s.unit}:s;}
export function studioSettings(stored:any,defaults:any){return {...defaults,...stored,...(stored?.appearanceVersion===2?{}:appearanceDefaults),services:stored?.services||defaultServices(),pricingRules:{...pricingDefaults,...stored?.pricingRules},documentDefaults:{...documentDefaults,...stored?.documentDefaults},workAudience:stored?.workAudience||'Os dois',messages:stored?.messages||{},goals:stored?.goals||{monthly:0,annual:0}};}
export function serviceEstimate(service:StudioService,quantity:number,rules:any,options:any={}){
 const q=Math.max(0,Number(quantity)||0),r={...pricingDefaults,...rules},mode=pricingMode(service),value=Math.max(0,Number(service.value)||0),fixed=Math.max(0,Number(service.fixed)||0);
 let base=mode==='fixed'?(options.closedValue!==undefined?Math.max(0,Number(options.closedValue)||0):value):q*value;
 if(mode==='packages'&&q>0){const packages=servicePackages(service);if(packages.length){const whole=Math.floor(q);if(whole>10000)throw Error('Use até 10.000 unidades por item.');const prices=Array(whole+1).fill(Infinity);prices[0]=0;for(let n=1;n<=whole;n++){prices[n]=prices[n-1]+value;for(const p of packages)if(p.quantity<=n)prices[n]=Math.min(prices[n],prices[n-p.quantity]+p.value);}base=prices[whole]+(q-whole)*value;}}
 if(mode!=='fixed')base+=fixed;
 if(mode==='area')base*=Number(r[options.complexity||'simple'])||1;
 base=Math.max(base,Number(service.minimum)||0);
 if(service.extraFloor)base*=1+Math.max(0,(Number(options.floors)||1)-1)*Number(r.extraFloor)/100;
 if(options.urgent)base*=1+Number(r.urgency)/100;
 if(options.editable)base*=1+Number(r.editableFile)/100;
 if(options.audience==='Estudante')base*=Math.max(0,1-Number(r.studentDiscount)/100);
 return Math.round(base*100)/100;
}
export function proposalDefaults(settings:any):Partial<Entry>{const d={...documentDefaults,...settings.documentDefaults};return {presentation:d.presentation,pdfLayout:d.layout,proposalHeading:d.heading,proposalTitle:d.title,term:d.term,payment:d.payment,deliveryFormats:d.deliveryFormats,adjustments:d.adjustments,number:Math.max(Number(d.numberStart)||1,1),studioAbout:d.about,studioPhotos:d.photos,allowPDF:d.usePDF,createContract:d.useContracts};}
