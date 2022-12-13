import Carrinho from "componentes/Cabecalho/Carrinho";
import FaleConosco from "componentes/FaleConosco";
import ProdutosFiltrados from "componentes/ProdutosPorCategoria";
import Footer from "componentes/Rodape";
import {BannerTodo, BannerHero,  VerConsole, Titulo1, Titulo2} from './styles';

function PaginaPrincipal(){
    const ScrollTo = () => {
        const sessao = document.querySelector('#faleConosco')
        return sessao ? sessao.scrollIntoView() : null
        
    }
    return (
            <>
                <BannerTodo>
                    <BannerHero>
                        <Titulo1>Dezembro Promocional</Titulo1>
                        <Titulo2>Produtos selecionados com 33% de desconto</Titulo2>
                        <VerConsole>
                            <button className="BotaoVerConsole" onClick={ScrollTo}>Fale Conosco</button>
                        </VerConsole>
                    </BannerHero>
                </BannerTodo>
                
                <ProdutosFiltrados />
                <FaleConosco/>
                <Footer />
            </>
    )
}

export default PaginaPrincipal; 
