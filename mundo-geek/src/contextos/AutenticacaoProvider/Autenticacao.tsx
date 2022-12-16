import { createContext, useState, useEffect, useContext } from "react";
import { IContexto,  IAutenticacaoProvider, IUsuario} from "./types";
import { ConviteDeLogin, decodificador, getUsuarioNoLocalStorage, setUsuarioNoLocalStorage } from "./util";

export const CriaUsuarioContext = createContext<IContexto>({} as IContexto); 

export const AutenticadoProvider = ({children}: IAutenticacaoProvider) => {
    const[usuario, setUsuario] = useState<IUsuario | null>(); 
    const[nomeDoUsuario] = useState<string | undefined>(decodificador()); 

    useEffect(() => {
        const usuario = getUsuarioNoLocalStorage(); 
        
        if(usuario){
            setUsuario(usuario)
        }
        
    }, []);

    async function autenticado (email: string, senha: string){
        const resposta = await ConviteDeLogin(email, senha)

        const certo = {token: resposta.token}
        setUsuario(certo)  
        setUsuarioNoLocalStorage(certo)
    }

    async function logout () {
        setUsuario(null)
        setUsuarioNoLocalStorage(null)
    }

    return (
 
            <CriaUsuarioContext.Provider value={{...usuario, autenticado, logout, nomeDoUsuario }}>
                {children}
            </CriaUsuarioContext.Provider>
    )
}

export const useAutenticacao = () => {
    const contexto  = useContext(CriaUsuarioContext)
    return contexto 
}