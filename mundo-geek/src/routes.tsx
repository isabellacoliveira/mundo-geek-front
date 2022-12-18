import NavBar from "componentes/Cabecalho";
import Footer from "componentes/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import { AutenticadoProvider } from "contextos/AutenticacaoProvider/Autenticacao";
import { CarrinhoProvider } from "contextos/CarrinhoProvider/CarrinhoContext";
import Cadastro from "paginas/Paginas/CadastrarUsuario";
import LoginUsuario from "paginas/Paginas/Login";
import NaoEncontrada from "paginas/Paginas/NaoEncontrada";
import Entrar from "paginas/Paginas/PaginaInicialComecar";
import PaginaPrincipal from "paginas/Paginas/PaginaPrincipal";
// import ProdutoSelecionado from "paginas/Paginas/ProdutoIndividual";
import TodosOsProdutos from "paginas/Paginas/TodosOsProdutos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// aqui estão as rotas disponiveis ao cliente 
function Cliente(){
    return (
         <AutenticadoProvider>
            <CarrinhoProvider>
            <Router>
                <ScrollToTop /> 
                <Routes>
                    <Route path="/" element={<Entrar />} />
                    <Route path="/" element={<NavBar />}>
                        <Route path="/home" element={<PaginaPrincipal />} />
=                        <Route path="/login" element={<LoginUsuario />} />
                        <Route path="*" element={<NaoEncontrada />} />
                        <Route path="/produtos" element={<TodosOsProdutos />} />
                        <Route path="/" element={<Footer />} />
                    </Route>

                    <Route path="/cadastro" element={<NavBar />}> 
                        <Route path="usuario" element={<Cadastro />} />
                    </Route>  
                </Routes>
            </Router>
            </CarrinhoProvider>
         </AutenticadoProvider>
    )
}

export default Cliente; 
