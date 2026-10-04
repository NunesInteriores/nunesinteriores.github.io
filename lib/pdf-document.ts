import {proposalSheet} from './proposal-sheet';
import {proposalSlides} from './proposal-slides';
import {Entry} from './studio-types';
import {documentSections} from './document-content';
let fonts:Promise<string[]>|null=null;
async function fontData(){return fonts??=(Promise.all(['poppins-normal-400','poppins-normal-600','playfair-display-normal-400','playfair-display-italic-400'].map(async name=>{const r=await fetch('/fonts/'+name+'.ttf');if(!r.ok)throw Error('Não foi possível carregar a fonte do PDF.');const b=new Uint8Array(await r.arrayBuffer());let s='';for(const byte of b)s+=String.fromCharCode(byte);return btoa(s);})));}
const hex=(v:any,fallback:string)=>/^#[0-9a-f]{6}$/i.test(v)?v:fallback;
async function imageData(url:string){try{const r=await fetch(url);if(!r.ok)return null;const bytes=new Uint8Array(await r.arrayBuffer());let raw='';for(const b of bytes)raw+=String.fromCharCode(b);return 'data:'+r.headers.get('content-type')+';base64,'+btoa(raw)}catch{return null}}
export async function makePDF(entry:Entry,rows:Entry[],settings:any,fontOverride?:string[]){
 if(['contract-final','contract-freelancer','proposal-nunes'].includes(entry.referenceTemplate)){const {makeReferencePDF}=await import('./reference-pdf');return makeReferencePDF(entry,rows,settings);}
 const {jsPDF}=await import('jspdf');const slides=entry.kind==='budgets'&&entry.presentation==='slides',pdf=new jsPDF({unit:'mm',format:slides?[297,167.0625]:'a4',orientation:slides?'landscape':'portrait'}),data=fontOverride||await fontData();
 ['Poppins','PoppinsBold','Playfair','PlayfairItalic'].slice(0,data.length).forEach((name,i)=>{pdf.addFileToVFS(name+'.ttf',data[i]);pdf.addFont(name+'.ttf',name,'normal');});
 const ink=hex(settings.color,'#2F2F2F'),support=hex(settings.supportColor,'#CDB89C'),accent=hex(settings.italicColor,'#9B8264'),background=hex(settings.backgroundColor,'#F6F2EC'),text=hex(settings.textColor,'#2A2A2A'),titleFont=settings.displayFont==='Arial'?'Poppins':data[3]?'PlayfairItalic':'Playfair',client=rows.find(r=>r.id===entry.client),logo=settings.logo?await imageData(settings.logo):null;
 const addImage=(image:string,x:number,y:number,w:number,h:number)=>{try{const p=pdf.getImageProperties(image),scale=Math.min(w/p.width,h/p.height);pdf.addImage(image,p.fileType,x+(w-p.width*scale)/2,y+(h-p.height*scale)/2,p.width*scale,p.height*scale)}catch{}};
 if(slides)return proposalSlides(pdf,entry,client,settings,{ink,accent,background,support,text},logo,await Promise.all((entry.studioPhotos||[]).filter(Boolean).map(imageData)),addImage);
 if(entry.kind==='budgets')return proposalSheet(pdf,entry,rows,settings,{ink,accent,background,support,text},logo,addImage);
 const layout:string='plain',left=layout==='column'?65:20,width=190-left;let y=layout==='band'?60:layout==='editorial'?58:43;
 const header=()=>{pdf.setFillColor('#FFFFFF');pdf.rect(0,0,210,297,'F');pdf.setTextColor(ink);if(layout==='column'){pdf.setFillColor(ink);pdf.rect(0,0,52,297,'F');pdf.setTextColor('#FFFFFF');pdf.setFont('Poppins');pdf.setFontSize(10);pdf.text(pdf.splitTextToSize(settings.title||'NUNES INTERIORES',37),8,24);if(logo)addImage(logo,8,34,30,20);pdf.setFontSize(7);pdf.text(pdf.splitTextToSize([client?.title,settings.name,settings.email,settings.phone].filter(Boolean).join('\n\n'),36),8,70);}else if(layout==='band'){pdf.setFillColor(ink);pdf.rect(0,0,210,41,'F');pdf.setTextColor('#FFFFFF');pdf.setFont('Poppins');pdf.setFontSize(17);pdf.text(settings.title||'NUNES INTERIORES',20,21);pdf.setFontSize(8);pdf.text(settings.email||settings.name||'',20,30);}else{pdf.setFont('Poppins');pdf.setFontSize(17);pdf.text(settings.title||'NUNES INTERIORES',20,22);pdf.setFontSize(8);pdf.text(settings.email||settings.name||'',20,29);pdf.setDrawColor(support);pdf.line(20,34,190,34);if(layout==='editorial'){pdf.setFont(titleFont);pdf.setTextColor(accent);pdf.setFontSize(23);pdf.text(String(entry.number||'01').padStart(2,'0'),20,49);}}if(logo&&layout!=='column')addImage(logo,155,11,35,18);pdf.setTextColor(text);};
 header();
 const newPage=()=>{pdf.addPage();header();y=layout==='band'?60:layout==='editorial'?58:43};
 const line=(body:string,title=false)=>{if(title&&y>252)newPage();pdf.setFont(title?'PoppinsBold':'Poppins');pdf.setFontSize(title?11:9.5);const lines=pdf.splitTextToSize(String(body),width) as string[];for(const l of lines){if(y>267)newPage();pdf.setFont(title?'PoppinsBold':'Poppins');pdf.setFontSize(title?11:9.5);pdf.setTextColor(text);pdf.text(l,left,y);y+=title?6:5;}y+=title?2:4;};

 pdf.setFont(titleFont);pdf.setFontSize(21);pdf.setTextColor(accent);for(const title of pdf.splitTextToSize(entry.title,width)){if(y>260)newPage();pdf.text(title,left,y);y+=9;}y+=7;for(const section of documentSections(entry,rows,settings)){if(section.title)line(section.title,true);line(section.body);}
 if(entry.kind==='contracts'){if(y>240)newPage();y+=15;pdf.setDrawColor(support);pdf.line(20,y,95,y);pdf.line(115,y,190,y);y+=6;pdf.setFontSize(8);pdf.text(client?.title||'Contratante',20,y);pdf.text(settings.name||'Prestadora',115,y);}
 for(let i=1;i<=pdf.getNumberOfPages();i++){pdf.setPage(i);pdf.setFont('Poppins');pdf.setFontSize(7);pdf.setTextColor('#777777');pdf.text((settings.phone||settings.email||'NUNES INTERIORES').slice(0,80),left,284);pdf.text(`${i} / ${pdf.getNumberOfPages()}`,190,284,{align:'right'});}
 return pdf;
}
export async function downloadPDF(entry:Entry,rows:Entry[],settings:any){const pdf=await makePDF(entry,rows,settings);pdf.save((entry.title||'Documento').replace(/[^a-zA-Z0-9À-ÿ -]/g,'')+'.pdf');}
