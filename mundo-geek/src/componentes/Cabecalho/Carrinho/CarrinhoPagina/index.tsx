import Footer from "componentes/Rodape";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao"
import { useNavigate } from "react-router-dom";
import { CarrinhoAba } from "../CarrinhoItem";
import { CabecalhoCarrinho, ContemTudo, FinalizarTudo, ProdutosAdicionadosAoCarrinho } from "./styles";

export default function CarrinhoPagina(){
    const {usuario} = useAutenticacao(); 
    const navigate = useNavigate();

    if(!usuario) {
        window.location.pathname = '/home'
    }

    return (
        <>
        <ContemTudo>
             <CabecalhoCarrinho>
            <h1>Meu Carrinho</h1>
            <button onClick={() => navigate('/home')}>fechar carrinho</button>
            </CabecalhoCarrinho>

            <ProdutosAdicionadosAoCarrinho>
                <CarrinhoAba />
            </ProdutosAdicionadosAoCarrinho>
          

            <FinalizarTudo>
            <h2>Total: R$ 220,00</h2>
            <button>Finalizar compra</button>
            </FinalizarTudo>
        </ContemTudo>
           <Footer />
        </>
        
        )
}