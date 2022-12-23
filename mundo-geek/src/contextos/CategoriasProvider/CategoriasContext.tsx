import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { createContext, ReactNode, useContext, useState } from "react";
import { Api } from "services/api";
import ICategorias from "types/ICategorias";

export function useCategorias() {
	const contextoCategorias = useContext(CategoriasContext);
	return contextoCategorias
}

interface ProdutoProviderProps {
	children: ReactNode;
}

export interface CategoriasContext {
	pegaCategorias: () => void; 
    todasAsCategorias: ICategorias[]; 
    setTodasAsCategorias: React.Dispatch<React.SetStateAction<ICategorias[]>>; 
}

const CategoriasContext = createContext({} as CategoriasContext);
CategoriasContext.displayName = "Categorias Context";

export function CategoriasProvider({ children }: ProdutoProviderProps) {
	const [todasAsCategorias, setTodasAsCategorias] = useState<ICategorias[]>([]);
	const { config } = useAutenticacao();

	async function pegaCategorias() {
		return new Promise(() => {
			Api.get<ICategorias[]>("/categorias", config)
				.then((resposta) => {
					setTodasAsCategorias(resposta.data);
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}

	return (
		<CategoriasContext.Provider
			value={{
				pegaCategorias,
                todasAsCategorias, 
                setTodasAsCategorias
			}}
		>
			{children}
		</CategoriasContext.Provider>
	);
}
