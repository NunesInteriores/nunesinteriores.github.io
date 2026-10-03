'use client';
import {createContext,useContext,useEffect,useState} from 'react';
import {Eye,EyeOff} from 'lucide-react';
import {formatMoney} from '@/lib/studio-types';
const Context=createContext({visible:true,toggle:()=>{}});
export function MoneyPrivacy({children}:{children:React.ReactNode}){const [visible,setVisible]=useState(false);useEffect(()=>{try{setVisible(localStorage.getItem('nunes-money-visible')==='true')}catch{}},[]);function toggle(){setVisible(v=>{try{localStorage.setItem('nunes-money-visible',String(!v))}catch{}return !v})}return <Context.Provider value={{visible,toggle}}>{children}</Context.Provider>}
export const useMoneyVisibility=()=>useContext(Context);
export function useMoney(){const {visible}=useMoneyVisibility();return (value:any)=>visible?formatMoney(value):'••••';}
export function MoneyEye(){const {visible,toggle}=useMoneyVisibility();return <button className="button money-eye" aria-label={visible?'Ocultar valores':'Mostrar valores'} aria-pressed={visible} onClick={toggle}>{visible?<Eye size={16}/>:<EyeOff size={16}/>}<span>{visible?'Ocultar valores':'Mostrar valores'}</span></button>}
export function HiddenValues(){return <div className="hidden-values"><EyeOff size={20}/><p>Valores ocultos. Use o olhinho para visualizar.</p></div>}
