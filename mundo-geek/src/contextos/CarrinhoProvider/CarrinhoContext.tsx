import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { useContext, createContext, ReactNode, useState } from "react";
import IProdutos from "types/IProdutos";
import sweetalert from 'sweetalert'; 
import { useNavigate } from "react-router-dom";

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
        }>
    
}

export interface CarrinhoContext {
    carrinho: ICarrinho
    setCarrinho: React.Dispatch<any>
    adicionaAoCarrinho: (idProduto: number) =>  void; 
    removerProduto: (idProduto: number) =>  void; 
    valorTotal: number
    calculaValor: (produto: IProdutos) => void;
    decresceValor: (produto: IProdutos) => void;
}

const CarrinhoContext = createContext({} as CarrinhoContext)
CarrinhoContext.displayName = 'Carrinho Context'

export function CarrinhoProvider({children}: CarrinhoProviderProps){
        const { usuario } = useAutenticacao()
        const [valorTotal, setValorTotal] = useState<number>(0);
        const [carrinho, setCarrinho] = useState<ICarrinho>({
            usuario: usuario?.id,
            quantidade: 0,
            precoTotal: 0,
            produtos: [],
        } as ICarrinho);

        function adicionaAoCarrinho(idProduto: number){    
            if(carrinho.produtos.length === 0){
                sweetalert('o produto foi adicionado ao carrinho')
            }
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

    return (
        <CarrinhoContext.Provider value={{
            carrinho, 
            setCarrinho,
            adicionaAoCarrinho,
            removerProduto,
            valorTotal,
            calculaValor,
            decresceValor
          }}>
           
            {children}
        </CarrinhoContext.Provider>
    )
}


