import { createContext, useState, useEffect, useContext } from "react";
import { Api } from "../../services/api";
import {  getUsuarioNoLocalStorage, setUsuarioNoLocalStorage } from "./util";

export interface IUsuario {
    id?: number, 
    email?: string,  
    nome?: string, 
    sobrenome?: string, 
    role?: string, 
    createdAt?: Date, 
    updateAt?: Date, 
}

export interface IContexto {
    login: (email: string, senha: string) => void;
    logout: () => void; 
    usuario: IUsuario | null | undefined; 
}

export interface IAutenticadoOuNao {
    hello: () => void; 
}

export interface IAutenticacaoProvider {
    children: JSX.Element; 

}

export const useAutenticacao = () => {
    const contexto  = useContext(CriaUsuarioContext)
    return contexto 
}

export const CriaUsuarioContext = createContext<IContexto>({} as IContexto); 

export const AutenticadoProvider = ({children}: IAutenticacaoProvider) => {
    const[usuario, setUsuario] = useState<IUsuario | null>(); 

    useEffect(() => {
        const usuario = getUsuarioNoLocalStorage(); 
        
        if(usuario){
            setUsuario(usuario)
        }
        
    }, []);

    async function login(email: string, senha: string){
        try{
            const response = await Api.post<{ token: string, usuario: IUsuario}>('login', {email, senha});
            const user = response.data.usuario
            const token = response.data.token
            setUsuario(user)  
            setUsuarioNoLocalStorage(user, token)

        } catch (error) {
            return null; 
        }       
    }

    async function logout () {
        setUsuario(null)
        setUsuarioNoLocalStorage(null, null)
        localStorage.clear()
    }

    return (
 
            <CriaUsuarioContext.Provider value={{usuario, login, logout }}>
                {children}
            </CriaUsuarioContext.Provider>
    )
}

