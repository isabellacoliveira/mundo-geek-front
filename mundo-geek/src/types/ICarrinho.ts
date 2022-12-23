import IProdutos from "./IProdutos";

export default interface ICarrinho {
    usuario: number, 
    carrinhos_produtos: IProdutos[], 
    precoTotal: number, 
    compraFinalizada: boolean
}