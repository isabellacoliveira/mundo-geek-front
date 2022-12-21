import { useContext, createContext, ReactNode, useState } from "react";

export function useCarrinho(){
    const contextoCarrinho = useContext(CarrinhoContext)
    return contextoCarrinho
}

interface CarrinhoProviderProps {
    children: ReactNode; 
}

interface ItemDoCarrinho {
    id: number, 
    quantidade: number
}

interface CarrinhoContext {
    abrirCarrinho: () => void; 
    fecharCarrinho: () => void; 
    numeroDeItensAdicionados: () => void; 
    getQuantidadeDeItens: (id: number) => void 
    aumentarQuantidadeCarrinho: (id: number) => void 
    diminuirQuantidadeCarrinho: (id: number) => void 
    removerDoCarrinho: (id: number) => void 
    quantidadeCarrinho: number | undefined | null, 
    itensDoCarrinho: ItemDoCarrinho[]
    quantidadeNoCarrinho: number,
    setQuantidadeNoCarrinho: React.Dispatch<React.SetStateAction<number>>
}

const CarrinhoContext = createContext({} as CarrinhoContext)

export function CarrinhoProvider({children}: CarrinhoProviderProps){
	const[quantidadeNoCarrinho, setQuantidadeNoCarrinho] = useState<number>(0);
	
    function numeroDeItensAdicionados(){
        const contador = 0; 
        const itensContados = contador + 1;
        console.log(itensContados)
        setQuantidadeNoCarrinho(itensContados)
    }

    const[estaAberto, setEstaAberto] = useState<boolean>(false)
    const[itensDoCarrinho, setItensDoCarrinho] = useState<ItemDoCarrinho[]>([])

    const abrirCarrinho = () => setEstaAberto(true)
    const fecharCarrinho = () => setEstaAberto(false)

    const quantidadeCarrinho = itensDoCarrinho.reduce((quantidade, item) => item.quantidade + quantidade, 0)

    function getQuantidadeDeItens(id: number){
        return itensDoCarrinho.find(item => item.id === id)?.quantidade || 0
    }

    function aumentarQuantidadeCarrinho(id: number){
        setItensDoCarrinho(itensAntigos => {
            if(itensAntigos.find(item => item.id === id) == null) {
                return [...itensAntigos, {id, quantidade: 1 }]
            } else {
                return itensAntigos.map(item => {
                    if(item.id === id){
                        return {...item, quantidade: item.quantidade + 1}
                    } else {
                        return item
                    }
                })
            } 
        })
    }

    function diminuirQuantidadeCarrinho(id: number){
        setItensDoCarrinho(itensAntigos => {
            if(itensAntigos.find(item => item.id === id)?.quantidade === 1) {
                return itensAntigos.filter(item => item.id !== id)
            } else {
                return itensAntigos.map(item => {
                    if(item.id === id){
                        return {...item, quantidade: item.quantidade - 1}
                    } else {
                        return item
                    }
                })
            } 
        })
    }

    function removerDoCarrinho(id: number){
        setItensDoCarrinho(itensAntigos => {
            return itensAntigos.filter(item => item.id !== id)
        })
    }

    return (
        <CarrinhoContext.Provider value={{
            getQuantidadeDeItens,
            aumentarQuantidadeCarrinho,
            diminuirQuantidadeCarrinho,
            removerDoCarrinho, 
            itensDoCarrinho,
            quantidadeCarrinho,
            abrirCarrinho,
            fecharCarrinho,
            numeroDeItensAdicionados, 
            quantidadeNoCarrinho,
            setQuantidadeNoCarrinho
          }}>
           
            {children}
        </CarrinhoContext.Provider>
    )
}