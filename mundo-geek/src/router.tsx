import NavBar from "componentes/Cabecalho";
import { AutenticadoProvider } from "contextos/AutenticacaoProvider/Autenticacao";
import NavBarAdministracao from "paginas/Administracao/NavBarAdministracao";
import { Administracao } from "paginas/Administracao/NavBarAdministracao/Administracao";
import EditarCategoriaAntiga from "paginas/Administracao/NavBarAdministracao/Administracao/AdicionaCategoria";
import EditarProdutoAntigo from "paginas/Administracao/NavBarAdministracao/Administracao/EditarProduto";
import CadastraNovaCategoria from "paginas/Administracao/NavBarAdministracao/Administracao/ExcluiCategoria";
import CadastraNovoProduto from "paginas/Administracao/NavBarAdministracao/Administracao/NovoProduto";
import MeuPerfil from "paginas/MeuPerfil";
import NaoEncontrada from "paginas/NaoEncontrada";
import Entrar from "paginas/PaginaInicialComecar";
import PaginaPrincipal from "paginas/PaginaPrincipal";
import ProdutoSelecionado from "paginas/ProdutoIndividual";
import TodosOsProdutos from "paginas/TodosOsProdutos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Administrador(){
    return (
		<AutenticadoProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Entrar />} />
					<Route path="/" element={<NavBar />}>
						<Route path="/home" element={<PaginaPrincipal />} />
						<Route path="/perfil" element={<MeuPerfil />} />
						<Route path="*" element={<NaoEncontrada />} />
						<Route path="/produtos" element={<TodosOsProdutos />} />
						<Route path="/produto/:id/*" element={<ProdutoSelecionado />}/>
					</Route>

					<Route path="/administracao" element={<NavBarAdministracao />} >

						<Route path="categorias" element={<Administracao />}>
							<Route path="novo" element={<CadastraNovaCategoria />} />
							<Route path="editar/:id" element={<EditarCategoriaAntiga />} />
						</Route>

						<Route path="produtos" element={<Administracao />}>
							<Route path="novo" element={<CadastraNovoProduto />} />
							<Route path="editar" element={<EditarProdutoAntigo />} />
						</Route>
					</Route>
				</Routes>
			</Router>
		</AutenticadoProvider>
	);
   
}

export default Administrador;

