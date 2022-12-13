import { Api } from "./services/api";
import { IUsuario } from "./types";

export function setUsuarioNoLocalStorage(usuario: IUsuario | null) {
    localStorage.setItem('u', JSON.stringify(usuario)); 
}

export function getUsuarioNoLocalStorage() {
    const json = localStorage.getItem('u'); 

    if(!json){
        return null
    }

    const user = JSON.parse(json); 

    return user ?? null; 
}

export async function ConviteDeLogin (email: string, senha: string){
    try{
        const request = await Api.post('login', {email, senha});
        return request.data; 

    } catch (error) {
        return null; 
    }
}