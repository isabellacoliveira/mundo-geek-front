import ICategorias from "./ICategorias";

export default interface IProdutos {
    nome: string, 
    descricao: string, 
    preco: number, 
    imagem: string, 
    id: number,
    quantidade: number,
    categorias: ICategorias[]
}