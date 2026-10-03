import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'NUNES INTERIORES · Gestão',description:'Projetos, propostas e rotina do seu estúdio de interiores.',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
