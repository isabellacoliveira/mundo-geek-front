import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { useProdutos } from "contextos/ProdutosProvider/ProdutosContext";
import { useContext, createContext, ReactNode, useState, useEffect } from "react";
import { Api } from "services/api";
import IProdutos from "types/IProdutos";

export function useCarrinho(){
    const contextoCarrinho = useContext(CarrinhoContext)
    return contextoCarrinho
}

interface CarrinhoProviderProps {
    children: ReactNode; 
}

export interface ItemDoCarrinho {
    id: number, 
    quantidade: number,
    preco: number
}

export interface ICarrinho {
    usuario: number
    quantidade: number
    produtos: Array<{
            id: number, 
            quantidade: number, 
            // preco: number
        }>
    
}

export interface CarrinhoContext {
    carrinho: ICarrinho
    setCarrinho: React.Dispatch<any>
    adicionaAoCarrinho: (idProduto: number) =>  void; 
    removerProduto: (idProduto: number) =>  void; 
    finalizarCompra: () => void; 
    valorTotal: number
    calculaValor: (produto: IProdutos) => void;
    decresceValor: (produto: IProdutos) => void;
}

const CarrinhoContext = createContext({} as CarrinhoContext)
CarrinhoContext.displayName = 'Carrinho Context'

export function CarrinhoProvider({children}: CarrinhoProviderProps){
        const { usuario, config } = useAutenticacao()
        const [valorTotal, setValorTotal] = useState<number>(0);
        const [carrinho, setCarrinho] = useState<ICarrinho>({
            usuario: usuario?.id,
            quantidade: 0,
            precoTotal: 0,
            produtos: [],
        } as ICarrinho);

        function adicionaAoCarrinho(idProduto: number){    
            const ExisteNoCarrinho = carrinho.produtos.find(item => item.id === idProduto)
        
            if (!ExisteNoCarrinho) {
                carrinho.produtos.push({id: idProduto, quantidade: 1})

            } else {
                const novaListaDeProdutos = carrinho.produtos.map(produto => {
                    if (produto.id === idProduto) produto.quantidade = produto.quantidade + 1;
                    
                    return produto
                })
                setCarrinho({
                    ...carrinho,
                    produtos: novaListaDeProdutos
                })
            }
            console.log(carrinho.produtos)  
        }

        function removerProduto(idProduto: number){    
            const produto = carrinho.produtos.find(item => item.id === idProduto)
            if (!produto) return false

            if(produto.quantidade === 1){
                const novaLista = carrinho.produtos.filter((item) => item.id !== idProduto)
                setCarrinho({
                    ...carrinho, 
                    produtos: novaLista
                })
            } else {
                produto.quantidade -= 1;
                const novaLista = carrinho.produtos.filter((item) => item.id !== idProduto)
                novaLista.push(produto)
                setCarrinho({
                    ...carrinho, 
                    produtos: novaLista
                })
            }
        }

        const calculaValor = (
            produto: IProdutos) => {
            setValorTotal((oldValue) => Number(oldValue) + Number(produto.preco));
        };

        const decresceValor = (
            produto: IProdutos) => {
            setValorTotal((oldValue) => Number(oldValue) - Number(produto.preco));
        };

        async function finalizarCompra(){
            return new Promise(() => {
                Api.post<ICarrinho[]>('/carrinhos', {
                    usuario: usuario?.id,
                    produtos: carrinho.produtos
                },
                config)
            })
            .then(() => {
                setCarrinho({
                    usuario: 0,
                    quantidade: 0,
                    produtos: []
                })
            })
        }

    return (
        <CarrinhoContext.Provider value={{
            carrinho, 
            setCarrinho,
            adicionaAoCarrinho,
            removerProduto,
            finalizarCompra,
            valorTotal,
            calculaValor,
            decresceValor
          }}>
           
            {children}
        </CarrinhoContext.Provider>
    )
}


