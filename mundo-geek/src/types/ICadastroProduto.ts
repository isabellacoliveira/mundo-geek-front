import ICategorias from "./ICategorias";

export interface ICadastroProduto {
    nome: string, 
    descricao: string, 
    preco: number, 
    imagem: string, 
    categoria: ICategorias[]
}