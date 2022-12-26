import ICategorias from "types/ICategorias";
import { useEffect } from "react";
import IProdutos from "types/IProdutos";
import Produto from "../Produtos";
import { Cima, ListaDeProdutos, Titulos, VerTudinho } from "./styles";
import { Link, useLocation } from "react-router-dom";
import IconeSeta from "assets/iconeSeta.png";
import { useProdutos } from "contextos/ProdutosProvider/ProdutosContext";

interface CategoriaProps {
	categoria: ICategorias;
}
const Categoria = ({ categoria }: CategoriaProps) => {
	const { pathname } = useLocation();
	const {pegaProdutos, todosOsProdutos} = useProdutos(); 

	useEffect(() => {
		pegaProdutos(); 
	}, []);

	return (
		<>
			<Cima>
				{pathname === "/produtos" || pathname === "/perfil" ? (
					""
				) : (
					<>
						<Titulos>{categoria.titulo}</Titulos>
						<Link to="/produtos" className="BotaoVerTudo">
							<VerTudinho>
								Ver tudo
							<img src={IconeSeta} alt="icone de uma seta" />
							</VerTudinho>
						</Link>
					</>
				)}
			</Cima>
			<ListaDeProdutos>
				{todosOsProdutos &&
					todosOsProdutos.length > 0 &&
					todosOsProdutos.filter(
									(produto: IProdutos | undefined) => {
										let ids = produto?.categorias.map((x) => x.id);
										if (ids?.includes(categoria.id)) return produto;
									}
								)?.map((item) => (
						<Produto produto={item} key={item.id} />
					))}
			</ListaDeProdutos>
		</>
	);
};

export default Categoria;
