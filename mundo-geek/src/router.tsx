import NavBar from "componentes/Cabecalho";
import { AutenticadoProvider } from "contextos/AutenticacaoProvider/Autenticacao";
import CadastraProduto from "paginas/CadastrarProduto";
import EditarProduto from "paginas/EditarProduto";
import MeuPerfil from "paginas/MeuPerfil";
import NaoEncontrada from "paginas/NaoEncontrada";
import Entrar from "paginas/PaginaInicialComecar";
import PaginaPrincipal from "paginas/PaginaPrincipal";
import ProdutoSelecionado from "paginas/ProdutoIndividual";
import TodosOsProdutos from "paginas/TodosOsProdutos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// aqui estão as rotas disponiveis para o administrador , a pessoa que possui login 
function Administrador(){
    return (
		<AutenticadoProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Entrar />} />
					<Route path="/" element={<NavBar />}>
						<Route path="/homeadm" element={<PaginaPrincipal />} />
						<Route path="/perfil" element={<MeuPerfil />} />
						<Route path="/editar/produto" element={<EditarProduto />} />
						<Route path="/cadastro/produto" element={<CadastraProduto />}/>
						<Route path="*" element={<NaoEncontrada />} />
						<Route path="/produtos" element={<TodosOsProdutos />} />
						<Route path="/produto/:id/*" element={<ProdutoSelecionado />}/>
					</Route>
				</Routes>
			</Router>
		</AutenticadoProvider>
	);
   
}

export default Administrador;

