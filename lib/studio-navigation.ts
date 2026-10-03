export function studioHash(kind:string,id?:string){return '#/'+kind+(id?'/'+encodeURIComponent(id):'');}
export function writeStudioHash(target:string,replace=false){if(typeof window==='undefined')return;const url=window.location.pathname+window.location.search+target;const method=replace?'replaceState':'pushState';if(window.location.hash!==target||replace)window.history[method](null,'',url);}
export function readStudioHash(hash:string){const [kind,id]=hash.replace(/^#\//,'').split('/');try{return {kind,id:id?decodeURIComponent(id):null};}catch{return {kind,id:null};}}
