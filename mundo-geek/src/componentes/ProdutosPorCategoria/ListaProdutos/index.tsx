import { useEffect } from "react";
import Categoria from "../Categorias";
import { SessoesCategorias } from "../Produtos/styles";
import { useCategorias } from "contextos/CategoriasProvider/CategoriasContext";


const ListaCategorias = () => {
	const {todasAsCategorias, pegaCategorias} = useCategorias(); 

    useEffect(() => {
		pegaCategorias(); 
	}, []);

	return (
		<>
			<SessoesCategorias>
				{todasAsCategorias?.map((item) => (
					<Categoria categoria={item} key={item.id} />
				))}
			</SessoesCategorias>
		</>
	);
};

export default ListaCategorias;
