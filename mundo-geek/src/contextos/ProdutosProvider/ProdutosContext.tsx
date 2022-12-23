import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { createContext, ReactNode, useContext, useState } from "react";
import { Api } from "services/api";
import IProdutos from "types/IProdutos";

export function useProdutos() {
	const contextoProdutos = useContext(ProdutosContext);
	return contextoProdutos;
}

interface ProdutoProviderProps {
	children: ReactNode;
}

export interface ProdutosContext {
	pegaProdutos: () => void;
	todosOsProdutos: IProdutos[];
	setTodosOsProdutos: React.Dispatch<React.SetStateAction<IProdutos[]>>;
}

const ProdutosContext = createContext({} as ProdutosContext);
ProdutosContext.displayName = "Produtos Context";

export function ProdutosProvider({ children }: ProdutoProviderProps) {
	const [todosOsProdutos, setTodosOsProdutos] = useState<IProdutos[]>([]);
	const { config } = useAutenticacao();

	async function pegaProdutos() {
		return new Promise(() => {
			Api.get<IProdutos[]>("/produtos", config)
				.then((resposta) => {
					setTodosOsProdutos(resposta.data);
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}

	return (
		<ProdutosContext.Provider
			value={{
				pegaProdutos,
				todosOsProdutos,
				setTodosOsProdutos
			}}
		>
			{children}
		</ProdutosContext.Provider>
	);
}
