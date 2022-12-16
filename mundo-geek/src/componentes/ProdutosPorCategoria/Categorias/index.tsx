import ICategorias from "types/ICategorias";
import { useState, useEffect } from "react";
import IProdutos from "types/IProdutos";
import { Api } from "contextos/AutenticacaoProvider/services/api";
import Produto from "../Produtos";
import { Cima, ListaDeProdutos, Titulos } from "./styles";
import { Link, useLocation } from "react-router-dom";
import IconeSeta from 'assets/iconeSeta.png';

interface CategoriaProps {
	categoria: ICategorias;
}
const Categoria = ({ categoria }: CategoriaProps) => {
	const [produtos, setProdutos] = useState<IProdutos[]>();
    const {pathname} = useLocation(); 

	let config = {
		headers: {
			Authorization:
				"Bearer " +
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibm9tZSI6ImNsZWFuZSBldmVsaW4iLCJzb2JyZW5vbWUiOiJiYXRpc3RhIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjcxMTI0MjY0LCJleHAiOjE2NzE0Njk4NjR9.QQn0Q9_3Og7vhsTdfy1k_hzU9bi3JYy85LzgIU1peUo",
		},
	};

	useEffect(() => {
		Api.get<ICategorias[], any>(`produtos/`, config).then((resposta) => {
			setProdutos(resposta.data);
		});
	}, [categoria.id]);

	return (
		<>
			<Cima>
                {pathname === "/produtos" ?  '': 
                <>
                 <Titulos>{categoria.titulo}</Titulos>
				<Link to="/produtos" className="BotaoVerTudo">
					Ver tudo
					<img src={IconeSeta} alt="icone de uma seta" />
				</Link>
                </>}
               
			</Cima>
			<ListaDeProdutos>
				{produtos &&
					produtos.length > 0 &&
					produtos?.map((item) => (
						<Produto produto={item} key={item.id} />
					))}
				{/* .filter(
							(resposta) =>
								resposta.categorias.id === categoria.id
						)} */}
			</ListaDeProdutos>
		</>
	);
};

export default Categoria;
