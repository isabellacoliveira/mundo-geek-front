import FaleConosco from "componentes/FaleConosco";
import ListaCategorias from "componentes/ProdutosPorCategoria/ListaProdutos";
import Footer from "componentes/Rodape";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { useNavigate } from "react-router-dom";
import {
	BotaoCadastraProduto,
	ListaDeProdutos,
	Produtos,
	Titulo,
} from "./styles";
import {useEffect, useState} from 'react'; 
import Produto from "componentes/ProdutosPorCategoria/Produtos";
import IProdutos from "types/IProdutos";
import { Api } from "services/api";

function TodosOsProdutos() {
	const navigate = useNavigate();
	const { token, usuario, config } = useAutenticacao();
	const[todosOsProdutos, setTodosOsProdutos] = useState<IProdutos[]>([]); 

	function vaiParaAdm() {
		navigate("/administracao/categorias/novo");
	}

	const pegaTodosOsProdutos = () => {
		Api.get<IProdutos[], any>(`produtos/`, config).then((resposta) => {
			setTodosOsProdutos(resposta.data);
		});
	};

	useEffect(() => {
		pegaTodosOsProdutos();
	}, []);

	return (
		<>
			<Produtos>
				<Titulo>Todos os produtos</Titulo>

				{usuario?.role === "admin" && (
					<BotaoCadastraProduto onClick={vaiParaAdm}>
						Administração
					</BotaoCadastraProduto>
				)}
			</Produtos>
			<ListaDeProdutos>
			{todosOsProdutos?.map((item) => <Produto produto={item} key={item.id} /> )}
			</ListaDeProdutos>
			<FaleConosco />
			<Footer />
		</>
	);
}

export default TodosOsProdutos;
