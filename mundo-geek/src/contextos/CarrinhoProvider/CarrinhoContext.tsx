import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { useContext, createContext, ReactNode, useState, useEffect } from "react";
import { Api } from "services/api";

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
    produtos: Array<{id: number, quantidade: number}>
}

export interface CarrinhoContext {
    carrinho: ICarrinho
    setCarrinho: React.Dispatch<any>
    quantidadeTotalaPagar: number 
    setQuantidadeTotalaPagar: React.Dispatch<React.SetStateAction<number>>
    adicionaAoCarrinho: (idProduto: number) =>  void; 
    removerProduto: (idProduto: number) =>  void; 
    quantidadeComprada: number | undefined; 
    setQuantidadeComprada: React.Dispatch<React.SetStateAction<number | undefined>>;
    finalizarCompra: () => void; 
    // precoTotalDaCompra: (carrinho: ICarrinho | any) => void; 
}

const CarrinhoContext = createContext({} as CarrinhoContext)
CarrinhoContext.displayName = 'Carrinho Context'

export function CarrinhoProvider({children}: CarrinhoProviderProps){
        const { usuario } = useAutenticacao()
        const [quantidadeTotalaPagar, setQuantidadeTotalaPagar] = useState<number>(0); 
        const [quantidadeComprada, setQuantidadeComprada] = useState<number>(); 
        const [carrinho, setCarrinho] = useState<ICarrinho>({
            usuario: usuario?.id,
            quantidade: 0,
            produtos: []
        } as ICarrinho);
        const {config} = useAutenticacao(); 

        function adicionaAoCarrinho(idProduto: number){    
            const ExisteNoCarrinho = carrinho.produtos.find(item => item.id === idProduto)
            if (!ExisteNoCarrinho) {
                carrinho.produtos.push({id: idProduto, quantidade: 1})
            } else {
                const novaListaDeProdutos = carrinho.produtos.map(produto => {
                    if (produto.id === idProduto) produto.quantidade = produto.quantidade + 1;
                    
                    const quantidadeComprada = produto.quantidade
                    setQuantidadeComprada(quantidadeComprada)
                    console.log('quantidade comprada', quantidadeComprada)
                    
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
                    const novaListaDeProdutosFiltrados = carrinho.produtos.map(produto => {
                    if (produto.id === idProduto) {
                        if(produto.quantidade === 1){
                            return carrinho.produtos.filter((item) => (item.id != idProduto))
                        } else {
                            produto.quantidade = produto.quantidade - 1;
                        }
                    } 
                    return produto                    
                })
                // setCarrinho({produtos: novaListaDeProdutos})
                console.log('sou a nova lista sem os produtos que você deletou', novaListaDeProdutosFiltrados)
        }



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
                console.log('Compra finalizada!')
            })
        }

    return (
        <CarrinhoContext.Provider value={{
            carrinho, 
            setCarrinho,
            quantidadeTotalaPagar, 
            setQuantidadeTotalaPagar,
            adicionaAoCarrinho,
            quantidadeComprada,
            setQuantidadeComprada,
            removerProduto,
            finalizarCompra
            // precoTotalDaCompra
          }}>
           
            {children}
        </CarrinhoContext.Provider>
    )
}


