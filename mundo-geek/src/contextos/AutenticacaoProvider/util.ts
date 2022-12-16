import { Api } from "./services/api";
import { IUsuario } from "./types";
import JWT_decote from 'jwt-decode';

export function setUsuarioNoLocalStorage(usuario: IUsuario | null) {
    localStorage.setItem('u', JSON.stringify(usuario)); 
}

export function getUsuarioNoLocalStorage() {
    const json = localStorage.getItem('u'); 

    if(!json){
        return null
    }

    const usuario = JSON.parse(json);     
    return usuario ?? null; 
    
}

export async function ConviteDeLogin (email: string, senha: string){
    try{
        const request = await Api.post('login', {email, senha});
        return request.data; 

    } catch (error) {
        return null; 
    }
}

export function decodificador(){
    const token = localStorage.getItem('u'); 
    const usuarioToken = JWT_decote(token!) as IUsuario; 
    const nomeDoUsuario = usuarioToken.nome; 

    return nomeDoUsuario
} 