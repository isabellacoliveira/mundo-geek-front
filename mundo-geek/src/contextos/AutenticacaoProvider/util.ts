import JWT_decote from 'jwt-decode';
import { IUsuario } from './Autenticacao';

export async function  setUsuarioNoLocalStorage(usuario: IUsuario | null, token: string) {
    await localStorage.setItem('u', JSON.stringify(usuario)); 
    await localStorage.setItem('token', token)
    
}

export function getUsuarioNoLocalStorage() {
    const json = localStorage.getItem('u'); 
    console.log(json)

    if(!json){
        return null
    }

    const usuario = JSON.parse(json); 
        
    return usuario ?? null; 
    
}

export  function decodificador(){
    const token = localStorage.getItem('u'); 
    
    if(token){
        const usuarioToken = JWT_decote(token!) as IUsuario; 
        const nomeDoUsuario = usuarioToken.nome; 
        const permissaoDoUsuario = usuarioToken.role; 

        return nomeDoUsuario && permissaoDoUsuario
    }
 
} 