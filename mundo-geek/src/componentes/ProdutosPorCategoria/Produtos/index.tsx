import IProdutos from "types/IProdutos";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	BotaoVerProduto,
	CardDoProduto,
	DivImgBotao,
	ImagemMais,
	NomeDoProduto,
	PrecoDoProduto,
	DivPrecoEditar,
	ImagemLapis,
	ImagemProduto,
	BotaoAdicionarAoCarrinho,
	VerProduto,
	ImagemLixo,
	ProdutoIndisponivel,
} from "./styles";
import Lapis from "assets/editar.png";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { formatCurrency } from "componentes/Cabecalho/Carrinho/FormatCurency";
import Lixo from "assets/lixinho.png";
import { useState } from "react";
import { Api } from "services/api";
import { useCarrinho } from "contextos/CarrinhoProvider/CarrinhoContext";

interface ProdutoProps {
	produto: IProdutos;
}

const Produto = ({ produto }: ProdutoProps) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { usuario } = useAutenticacao();
	const [produtosMapeados, setProdutosMapeados] = useState<IProdutos[]>([]);
	const { config } = useAutenticacao();
	const { adicionaAoCarrinho, calculaValor } = useCarrinho();

	function paraEditarProduto() {
		navigate(`/administracao/produtos/editar/${produto.id}`);
	}

	const deletaProduto = (produtoASerExcluido: IProdutos) => {
		Api.delete(`produtos/${produtoASerExcluido.id}/`, config).then(() => {
			const listaProdutos = produtosMapeados.filter(
				(produto) => produto.id !== produtoASerExcluido.id
			);
			setProdutosMapeados([...listaProdutos]);
			sweetAlert("produto deletado");
			navigate("/home");
		});
	};

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
							<>
								<ImagemMais
									src={Lapis}
									alt="icone de edição"
									onClick={paraEditarProduto}
								/>
								<ImagemLixo
									src={Lixo}
									alt="Icone de Lixo"
									onClick={() => deletaProduto(produto)}
								/>
							</>
						) : null}
					</ImagemLapis>
				</DivPrecoEditar>
				<DivImgBotao>
					<BotaoVerProduto>
					<VerProduto>
						<Link to={`/produtos/${produto.id}`}>
							Ver Produto
						</Link>
						</VerProduto>
						{usuario ? <>
						{produto?.quantidade > 0 ? (
							<BotaoAdicionarAoCarrinho
								onClick={() => {
									adicionaAoCarrinho(produto.id)
									calculaValor(produto)
								}}
							>
								+ Adicionar ao Carrinho
							</BotaoAdicionarAoCarrinho>
						) : (
							<ProdutoIndisponivel>
								<h5>Produto indisponivel</h5>
							</ProdutoIndisponivel>
						)}
						</> : ''}
						
					</BotaoVerProduto>
				</DivImgBotao>
			</CardDoProduto>
		</>
	);
};

export default Produto;
