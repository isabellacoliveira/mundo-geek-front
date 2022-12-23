import IProdutos from "./IProdutos";

export default interface ICarrinho {
    usuario: number, 
    carrinhos_produtos: IProdutos[], 
    compraFinalizada: boolean
}