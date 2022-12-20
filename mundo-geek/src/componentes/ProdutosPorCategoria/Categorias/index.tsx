import ICategorias from "types/ICategorias";
import { useState, useEffect } from "react";
import IProdutos from "types/IProdutos";
import { Api } from "services/api";
import Produto from "../Produtos";
import { Cima, ListaDeProdutos, Titulos } from "./styles";
import { Link, useLocation } from "react-router-dom";
import IconeSeta from "assets/iconeSeta.png";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";

interface CategoriaProps {
	categoria: ICategorias;
}
const Categoria = ({ categoria }: CategoriaProps) => {
	const [produtos, setProdutos] = useState<IProdutos[]>();
	const { pathname } = useLocation();
	const { config } = useAutenticacao();

	const GetProdutos = () => {
		Api.get<ICategorias[], any>(`produtos/`, config)
		.then((resposta) => {
			const listaProdutos = resposta.data.filter(
				(produto: IProdutos | undefined) => {
					let ids = produto?.categorias.map((x) => x.id);
					if (ids?.includes(categoria.id)) return produto;
				}
			);
			setProdutos(listaProdutos);
		});
	};

	useEffect(() => {
		GetProdutos();
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
							Ver tudo
							<img src={IconeSeta} alt="icone de uma seta" />
						</Link>
					</>
				)}
			</Cima>
			<ListaDeProdutos>
				{produtos &&
					produtos.length > 0 &&
					produtos?.map((item) => (
						<Produto produto={item} key={item.id} />
					))}
			</ListaDeProdutos>
		</>
	);
};

export default Categoria;
