export interface IUsuario {
    email?: string, 
    token?: string  
}

export interface IContexto extends IUsuario {
    autenticado: (email: string, senha: string) => Promise<void>;
    logout: () => void; 
}

export interface IAutenticacaoProvider {
    children: JSX.Element; 
}