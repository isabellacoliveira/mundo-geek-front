import NavBar from "componentes/Cabecalho";
import Footer from "componentes/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import { AutenticadoProvider } from "contextos/AutenticacaoProvider/Autenticacao";
import Cadastro from "paginas/CadastrarUsuario";
import LoginUsuario from "paginas/Login";
import MeuPerfil from "paginas/MeuPerfil";
import NaoEncontrada from "paginas/NaoEncontrada";
import Entrar from "paginas/PaginaInicialComecar";
import PaginaPrincipal from "paginas/PaginaPrincipal";
import ProdutoSelecionado from "paginas/ProdutoIndividual";
import TodosOsProdutos from "paginas/TodosOsProdutos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// aqui estão as rotas disponiveis ao cliente 
function Cliente(){
    return (
         <AutenticadoProvider>
            <Router>
                <ScrollToTop /> 
                <Routes>
                    <Route path="/" element={<Entrar />} />
                    <Route path="/" element={<NavBar />}>
                        <Route path="/home" element={<PaginaPrincipal />} />
                        <Route path="/perfil" element={<MeuPerfil />} />
                        <Route path="/login" element={<LoginUsuario />} />
                        <Route path="*" element={<NaoEncontrada />} />
                        <Route path="/produtos" element={<TodosOsProdutos />} />
                        <Route path="/produto/:id/*" element={<ProdutoSelecionado />} />
                        <Route path="/" element={<Footer />} />
                    </Route>

                    <Route path="/cadastro" element={<NavBar />}> 
                        <Route path="usuario" element={<Cadastro />} />
                    </Route>  
                </Routes>
            </Router>
         </AutenticadoProvider>
    )
}

export default Cliente; 
