export interface IUsuario {
    id?: number, 
    email?: string, 
    token?: string, 
    nome?: string
}

export interface IContexto extends IUsuario {
    autenticado: (email: string, senha: string) => Promise<void>;
    logout: () => void; 
}

export interface IAutenticacaoProvider {
    children: JSX.Element; 
}

// const token = json serialize
// const user = jwtDecode(!token) as IUsuario