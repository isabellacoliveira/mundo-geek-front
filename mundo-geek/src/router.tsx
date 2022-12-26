import NavBar from "componentes/Cabecalho";
import CarrinhoPagina from "componentes/Cabecalho/Carrinho/CarrinhoPagina";
import ScrollToTop from "componentes/ScrollToTop";
import { CarrinhoProvider } from "contextos/CarrinhoProvider/CarrinhoContext";
import { CategoriasProvider } from "contextos/CategoriasProvider/CategoriasContext";
import { ProdutosProvider } from "contextos/ProdutosProvider/ProdutosContext";
import NavBarAdministracao from "paginas/Administracao/NavBarAdministracao";
import { Administracao } from "paginas/Administracao/NavBarAdministracao/Administracao";
import EditarCategoriaAntiga from "paginas/Administracao/NavBarAdministracao/Administracao/AdicionaEditaCategoria";
import EditarProdutoAntigo from "paginas/Administracao/NavBarAdministracao/Administracao/EditarProduto";
import CadastraNovaCategoria from "paginas/Administracao/NavBarAdministracao/Administracao/ExcluiCategoria";
import CadastraNovoProduto from "paginas/Administracao/NavBarAdministracao/Administracao/NovoProduto";
import Cadastro from "paginas/Paginas/CadastrarUsuario";
import LoginUsuario from "paginas/Paginas/Login";
import MeuPerfil from "paginas/Paginas/MeuPerfil";
import NaoEncontrada from "paginas/Paginas/NaoEncontrada";
import Entrar from "paginas/Paginas/PaginaInicialComecar";
import PaginaPrincipal from "paginas/Paginas/PaginaPrincipal";
import ProdutoSelecionado from "paginas/Paginas/ProdutoIndividual";
import TodosOsProdutos from "paginas/Paginas/TodosOsProdutos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoutes() {
	return (
		<CategoriasProvider>
		<ProdutosProvider>
		<CarrinhoProvider>
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Entrar />} />
					<Route path="/" element={<NavBar />}>
						<Route path="/home" element={<PaginaPrincipal />} />
						<Route path="/perfil" element={<MeuPerfil />} />
						<Route path="*" element={<NaoEncontrada />} />
						<Route path="/produtos" element={<TodosOsProdutos />} />
						<Route
							path="/produtos/:id"
							element={<ProdutoSelecionado />}
						/>
						<Route path="/cadastro/usuario" element={<Cadastro />} />
						<Route path="/login" element={<LoginUsuario />} />
						<Route path="/carrinho" element={<CarrinhoPagina />} />
					</Route>

					<Route
						path="/administracao"
						element={<NavBarAdministracao />}
					>
						<Route path="categorias" element={<Administracao />}>
							<Route
								path="novo"
								element={<CadastraNovaCategoria />}
							/>
							<Route
								path="editar/:id"
								element={<EditarCategoriaAntiga />}
							/>
						</Route>

						<Route path="produtos" element={<Administracao />}>
							<Route
								path="novo"
								element={<CadastraNovoProduto />}
							/>
							<Route
								path="editar/:id"
								element={<EditarProdutoAntigo />}
							/>
						</Route>

					</Route>
				</Routes>
			</Router>
			</CarrinhoProvider>
			</ProdutosProvider>
			</CategoriasProvider>
	);
}

export default AppRoutes;
