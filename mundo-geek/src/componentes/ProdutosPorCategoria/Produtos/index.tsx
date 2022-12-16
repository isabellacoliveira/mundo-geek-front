import IProdutos from "types/IProdutos";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	BotaoVerProduto,
	CardDoProduto,
	LinkParaOutraPagina,
	DivImgBotao,
	ImagemMais,
	NomeDoProduto,
	PrecoDoProduto,
	DivPrecoEditar,
	ImagemLapis,
    ImagemProduto,
} from "./styles";
import Mais from "assets/mais.png";
import Lapis from "assets/editar.png";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";

interface ProdutoProps {
    produto: IProdutos
}

const Produto = ({produto}: ProdutoProps) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { usuario } = useAutenticacao();

	function paraEditarProduto() {
		navigate("/editar/produto");
	}

	function adicionaNoCarrinho() {
		alert("produto adicionado ao carrinho");
	}

    return (
        <>
        <LinkParaOutraPagina>

        </LinkParaOutraPagina>
        <CardDoProduto>
            <ImagemProduto src={produto.imagem} />
            <NomeDoProduto>{produto.nome}</NomeDoProduto>
            <DivPrecoEditar>
                <PrecoDoProduto>{produto.preco}</PrecoDoProduto>
                <ImagemLapis>
                {pathname === "/perfil" ? (
							<ImagemMais
								src={Lapis}
								alt="icone de edição"
								onClick={paraEditarProduto}
							/>
						) : null}
                </ImagemLapis>
            </DivPrecoEditar>
            <DivImgBotao>
					<BotaoVerProduto>
						<Link
							to={"/produto/1"}
							// to={`/produto/${produto.id}`}
						>
							Ver Produto
						</Link>
					</BotaoVerProduto>
                    {usuario && <ImagemMais
						src={Mais}
						alt="icone de mais"
						onClick={adicionaNoCarrinho}
					/>}
					
				</DivImgBotao>
        </CardDoProduto>
        </>
    )     
}

export default Produto; 
