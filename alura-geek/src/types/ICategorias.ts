import IProdutos from "./IProdutos"

export default interface ICategorias {
  id: number
  titulo: string 
  produtos: IProdutos[]
}