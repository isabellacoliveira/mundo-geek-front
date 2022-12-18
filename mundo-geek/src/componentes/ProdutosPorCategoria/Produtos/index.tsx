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
	BotaoAdicionarAoCarrinho,
	VerProduto,
} from "./styles";
import Lapis from "assets/editar.png";
import { Button } from "react-bootstrap";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { useCarrinho } from "contextos/CarrinhoProvider/CarrinhoContext";
import { formatCurrency } from "componentes/Cabecalho/Carrinho/FormatCurency";

interface ProdutoProps {
	produto: IProdutos;
}

const Produto = ({ produto }: ProdutoProps) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { usuario } = useAutenticacao();
	const {
		quantidadeDeItens,
		aumentarQuantidadeCarrinho,
		diminuirQuantidadeCarrinho,
		removerDoCarrinho,
	} = useCarrinho();
	var quantidade = 0;
	// var quantidade = ;
	
	function paraEditarProduto() {
		navigate("/editar/produto");
	}

	function aumentarQuantidade(id: number, evento: React.FormEvent<HTMLFormElement>){
		evento.preventDefault(); 
		aumentarQuantidadeCarrinho(id)
	}
	return (
		<>
			<CardDoProduto>
				<ImagemProduto src={produto.imagem} />
				<NomeDoProduto>{produto.nome}</NomeDoProduto>
				<DivPrecoEditar>
					<PrecoDoProduto>
						{formatCurrency(produto.preco)}
					</PrecoDoProduto>
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
						<Link to={`/produtos/${produto.id}`}>
							<VerProduto>Ver Produto</VerProduto>
						</Link>
						{/* o botao de adicionar ao carrinho só deve aparecer quando a pessoa esta logada  */}
						{usuario && quantidade === 0 ? (
							<BotaoAdicionarAoCarrinho
							// onClick={() => adicionaNoCarrinho}
							>
								+ Adicionar ao Carrinho
							</BotaoAdicionarAoCarrinho>
						) : (
							<div
								className="d-flex align-items-center flex-column"
								style={{ gap: ".5rem" }}
							>
								<div
									className="d-flex align-items-center justify-content-center"
									style={{ gap: ".5rem" }}
								>
									<Button
										onClick={() =>
											aumentarQuantidade
										}
									>
										-
									</Button>
									<div>
										<span className="fs-3">
											{quantidade}
										</span>{" "}
										no carrinho
									</div>
									{/* onClick={() => aumentarQuantidadeCarrinho(id)} */}
									<Button>+</Button>
								</div>
								{/* onClick={() => removerDoCarrinho(id)} */}
								<Button variant="danger" size="sm">
									Remover
								</Button>
							</div>
						)}
					</BotaoVerProduto>
				</DivImgBotao>
			</CardDoProduto>
		</>
	);
};

export default Produto;
