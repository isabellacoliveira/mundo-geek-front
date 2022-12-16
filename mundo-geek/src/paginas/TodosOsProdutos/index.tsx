import FaleConosco from "componentes/FaleConosco";
import ListaCategorias from "componentes/ProdutosPorCategoria/ListaProdutos";
import Footer from "componentes/Rodape";
import { useLocation, useNavigate } from "react-router-dom";
import {
	BotaoCadastraProduto,
	ListaDeProdutos,
	Produtos,
	Titulo,
} from "./styles";

function TodosOsProdutos() {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	function vaiParaAdm() {
		navigate("/administracao/categorias/novo");
	}

	return (
		<>
			<Produtos>
				<Titulo>Todos os produtos</Titulo>

				{/* se o usuario for um adm esse botao aparece  */}
				{pathname === "/produtos" ? (
					<BotaoCadastraProduto onClick={vaiParaAdm}>
						Administração
					</BotaoCadastraProduto>
				) : (
					""
				)}
			</Produtos>
			<ListaDeProdutos>
				<ListaCategorias />
			</ListaDeProdutos>
			<FaleConosco />
			<Footer />
		</>
	);
}

export default TodosOsProdutos;
