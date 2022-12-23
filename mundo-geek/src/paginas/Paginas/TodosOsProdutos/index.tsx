import FaleConosco from "componentes/FaleConosco";
import Footer from "componentes/Rodape";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { useNavigate } from "react-router-dom";
import {
	BotaoCadastraProduto,
	ListaDeProdutos,
	Produtos,
	Titulo,
} from "./styles";
import {useEffect} from 'react'; 
import Produto from "componentes/ProdutosPorCategoria/Produtos";
import { useProdutos } from "contextos/ProdutosProvider/ProdutosContext";

function TodosOsProdutos() {
	const navigate = useNavigate();
	const { usuario } = useAutenticacao();
	const {pegaProdutos, todosOsProdutos} = useProdutos(); 

	function vaiParaAdm() {
		navigate("/administracao/categorias/novo");
	}

	useEffect(() => {
		pegaProdutos(); 
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
