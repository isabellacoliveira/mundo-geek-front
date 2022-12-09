import NavBar from "componentes/Cabecalho";
import Footer from "componentes/Rodape";
import Cadastro from "paginas/CadastrarUsuario";
import Logando from "paginas/Login";
import MeuPerfil from "paginas/MeuPerfil";
import Entrar from "paginas/PaginaInicialComecar";
import PaginaPrincipal from "paginas/PaginaPrincipal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
    return (
            <Router>
               
                {/* <ScrollToTop />  */}
                
                <Routes>
                    <Route path="/" element={<Entrar />} />
                    <Route path="/" element={<NavBar />}>
                        <Route path="/home" element={<PaginaPrincipal />} />
                        <Route path="/login" element={<Logando />} />
                        <Route path="/cadastro/usuario" element={<Cadastro />} />
                        <Route path="/perfil" element={<MeuPerfil />} />
                    <Route path="/" element={<Footer />}>
                    </Route>
                    </Route>
                    
                    
                    {/* 
                    <Route path="/produtos" element={<TodosOsProdutos />} />
                    <Route path="/cadastroproduto" element={<CadastroProduto />} />
                    <Route path="/produto/:id/*" element={<ProdutoIndividual />} />
                    <Route path="*" element={<NaoEncontrada />} /> */}
                </Routes>
            </Router>
    )
}

export default App; 
