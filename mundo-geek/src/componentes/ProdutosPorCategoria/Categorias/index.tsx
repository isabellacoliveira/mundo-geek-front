import ICategorias from "types/ICategorias";
import { useState, useEffect } from "react";
import IProdutos from "types/IProdutos";
import { Api } from "services/api";
import Produto from "../Produtos";
import { Cima, ListaDeProdutos, Titulos } from "./styles";
import { Link, useLocation } from "react-router-dom";
import IconeSeta from 'assets/iconeSeta.png';
import { token } from "config/config";

interface CategoriaProps {
	categoria: ICategorias;
}
const Categoria = ({ categoria }: CategoriaProps) => {
	const [produtos, setProdutos] = useState<IProdutos[]>();
    const {pathname} = useLocation(); 

	let config = {
		headers: {
			'Authorization':
				"Bearer " +
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6InVzdWFyaW8gYWRtaW4iLCJzb2JyZW5vbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3MTI4MjI2MCwiZXhwIjoxNjcxNjI3ODYwfQ.cfcxl5sbly7scDPUvRglDNR4NvxXT-RPcEKYhFd5Q4Q'
			},
	};
	// let config = {
	// 	headers: {
	// 		'Authorization':
	// 			"Bearer " +
	// 			token
	// 		},
	// };

	useEffect(() => {
		Api.get<ICategorias[], any>(`produtos/`, config)
		// .then((resposta) => {
		// 	// setProdutos(resposta.data)
		// 	const listaProdutos = resposta.data.filter((categoria: ICategorias | undefined, produto: IProdutos | undefined) => categoria?.id === produto?.categorias?.id)
		// 	setProdutos(listaProdutos)
		// 	console.log(listaProdutos)
		// });
		.then((resposta) => {
			setProdutos(resposta.data);
			console.log(resposta)
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
						<Produto produto={item} key={item.id}/>
					))}
			</ListaDeProdutos>
		</>
	);
};

export default Categoria;
