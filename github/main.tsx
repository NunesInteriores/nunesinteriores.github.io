import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import Studio from '../app/page';
import {createFirebaseBridge} from './firebase-bridge';
import '../app/globals.css';
const nativeFetch=window.fetch.bind(window);
let bridge:ReturnType<typeof createFirebaseBridge>|null=null;
let auth:any, sdk:any;
function App(){
 const [ready,setReady]=useState(false),[loaded,setLoaded]=useState(false),[error,setError]=useState(''),[busy,setBusy]=useState(false);
 useEffect(()=>{(async()=>{
  const response=await nativeFetch('/firebase-config.json');if(!response.ok)throw Error('Não foi possível carregar a configuração.');
  const config=await response.json();if(!config.apiKey||!config.authDomain||!config.projectId||!config.ownerUid)throw Error('Configure a conexão com o Firebase.');
  bridge=createFirebaseBridge(config,nativeFetch);window.fetch=bridge.api;(window as any).__nunesGithub=true;
  if(bridge.hasSession()){setReady(true);return;}
  const appUrl='https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js';
  const authUrl='https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js';
  const [apps,authentication]=await Promise.all([import(/* @vite-ignore */ appUrl),import(/* @vite-ignore */ authUrl)]);
  sdk=authentication;auth=sdk.getAuth(apps.initializeApp(config));await sdk.setPersistence(auth,sdk.inMemoryPersistence);setLoaded(true);
 })().catch(e=>setError(e.message));},[]);
 async function login(){setBusy(true);setError('');try{
  const provider=new sdk.GoogleAuthProvider();provider.setCustomParameters({prompt:'select_account'});
  const result=await sdk.signInWithPopup(auth,provider);
  try{await bridge!.acceptGoogleSession(await result.user.getIdToken(),result.user.refreshToken);}finally{await sdk.signOut(auth);}
  setReady(true);
 }catch(e:any){setError(e.code==='auth/popup-blocked'?'Permita a janela de login no navegador e tente novamente.':e.code==='auth/popup-closed-by-user'?'A janela foi fechada. Clique para entrar novamente.':e.code==='auth/unauthorized-domain'?'Adicione nunesinteriores.github.io aos domínios autorizados no Firebase.':e.message||'Não foi possível entrar.');}finally{setBusy(false);}}
 return ready?<><button className="github-signout button" onClick={()=>{bridge?.signOut();window.location.reload();}}>Sair da conta</button><Studio/></>:<main className="github-login"><section className="panel"><h1>NUNES <em>INTERIORES</em></h1><p>Acesso ao seu estúdio</p><button className="button primary" disabled={!loaded||busy} onClick={login}>{busy?'Entrando…':loaded?'Entrar com Google':'Carregando acesso…'}</button><p>Use sua conta Google cadastrada no estúdio.</p>{error&&<p role="alert">{error}</p>}</section></main>;
}
createRoot(document.getElementById('root')!).render(<App/>);
