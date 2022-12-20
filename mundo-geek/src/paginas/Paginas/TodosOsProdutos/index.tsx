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

function TodosOsProdutos() {
	const navigate = useNavigate();
	const { token, usuario } = useAutenticacao();

	function vaiParaAdm() {
		navigate("/administracao/categorias/novo");
	}

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
				oioioiioiiii
			</ListaDeProdutos>
			<FaleConosco />
			<Footer />
		</>
	);
}

export default TodosOsProdutos;
