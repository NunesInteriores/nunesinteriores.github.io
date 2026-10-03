'use client';
import {useState} from 'react';
export function EditableChoice({value,options,onChange,label}:{value:string;options:string[];onChange:(v:string)=>void;label:string}){
 const [writing,setWriting]=useState(false),custom=writing||!!value&&!options.includes(value);
 return <div className="editable-choice"><select aria-label={label} value={custom?'__write':value||''} onChange={e=>{const v=e.target.value;setWriting(v==='__write');onChange(v==='__write'?'':v);}}><option value="">Selecione uma opção</option>{options.map(v=><option key={v} value={v}>{v}</option>)}<option value="__write">Escrever outra opção…</option></select>{custom&&<input aria-label={'Outra opção para '+label} placeholder="Digite sua opção" value={value||''} onChange={e=>onChange(e.target.value)}/>}</div>;
}
