export interface IUsuario {
    id?: number, 
    email?: string, 
    token?: string, 
    nome?: string, 
}

export interface IContexto extends IUsuario {
    autenticado: (email: string, senha: string) => Promise<void>;
    logout: () => void; 
    nomeDoUsuario: string | undefined
}

export interface IAutenticadoOuNao {
    hello: () => void; 
}

export interface IAutenticacaoProvider {
    children: JSX.Element; 
}
