import { useContext } from "react"
import { CriaUsuarioContext } from "./Autenticacao"

export const useAutenticacao = () => {
    const contexto  = useContext(CriaUsuarioContext)
    return contexto 
}