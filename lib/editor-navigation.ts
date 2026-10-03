import {Entry} from './studio-types';
export function editorChanged(draft:Entry|null,original:Entry|null){return !!draft&&(!original||JSON.stringify(draft)!==JSON.stringify(original));}
export async function finishEditorExit(saveFirst:boolean,save:()=>Promise<boolean>,close:()=>void,navigate:()=>void){if(saveFirst&&!await save())return false;close();navigate();return true;}
