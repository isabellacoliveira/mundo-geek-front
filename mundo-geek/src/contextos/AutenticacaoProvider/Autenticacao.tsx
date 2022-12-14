import { createContext, useState, useEffect } from "react";
import { IContexto,  IAutenticacaoProvider, IUsuario} from "./types";
import { ConviteDeLogin, getUsuarioNoLocalStorage, setUsuarioNoLocalStorage } from "./util";

export const CriaUsuarioContext = createContext<IContexto>({} as IContexto); 

export const AutenticadoProvider = ({children}: IAutenticacaoProvider) => {
    const[usuarioLogado, setUsuarioLogado] = useState<IUsuario | null>()

    useEffect(() => {
        const usuarioLogado = getUsuarioNoLocalStorage(); 
        if(usuarioLogado){
            setUsuarioLogado(usuarioLogado)
        }
    }, []);

    async function autenticado (email: string, senha: string){
        const resposta = await ConviteDeLogin(email, senha)

        // se ela der certo 
        const certo = {token: resposta.token}
        setUsuarioLogado(certo)
        setUsuarioNoLocalStorage(certo)
    }

    function logout () {
        setUsuarioLogado(null)
        setUsuarioNoLocalStorage(null)
    }

    return (
 
            <CriaUsuarioContext.Provider value={{...usuarioLogado, autenticado, logout}}>
                {children}
            </CriaUsuarioContext.Provider>
    )
}