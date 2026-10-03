import {Entry} from './studio-types';
export const proposalProfiles=['Cliente final','Freelancer','Estudante'] as const;
export const profileDelivery:Record<string,string>={
 'Cliente final':'Apresentação do projeto em PDF e imagens em JPG/PNG. Os arquivos e detalhes de execução serão entregues conforme os serviços contratados.',
 Estudante:'Arquivos de representação em PDF e imagens nos formatos definidos no escopo de apoio.',
 Freelancer:'Arquivos finais em PDF, imagens em JPG/PNG e arquivo editável no formato acordado com o escritório parceiro (por exemplo, SketchUp .SKP), conforme os serviços contratados.'
};
export const proposalAudience=(r:Entry)=>r.audience==='Freelancer'?'Freelancer':r.audience==='Estudante'?'Estudante':'Cliente final';
