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
