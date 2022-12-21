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
} from "./styles";
import Lapis from "assets/editar.png";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { formatCurrency } from "componentes/Cabecalho/Carrinho/FormatCurency";
import Lixo from 'assets/lixinho.png';
import {useState} from 'react'; 
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
	const {config} = useAutenticacao(); 
	const{numeroDeItensAdicionados, setQuantidadeNoCarrinho} = useCarrinho(); 

	function paraEditarProduto() {
		navigate(`/administracao/produtos/editar/${produto.id}`);
	}

	const deletaProduto = (produtoASerExcluido: IProdutos) => {
		Api.delete(`produtos/${produtoASerExcluido.id}/`, config)
		.then(
			() => {
				const listaProdutos = produtosMapeados.filter(
					(produto) => produto.id !== produtoASerExcluido.id
				);
				console.log(listaProdutos)
				setProdutosMapeados([...listaProdutos]);
				sweetAlert("produto deletado")
				navigate('/home')
			}
		);
	}

	return (
		<>
			<CardDoProduto>
				<ImagemProduto src={produto.imagem} />
				<NomeDoProduto>{produto.nome}</NomeDoProduto>
				<h5>quantidade: {produto.quantidade}</h5>
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
						<Link to={`/produtos/${produto.id}`}>
							<VerProduto>Ver Produto</VerProduto>
						</Link>
						{usuario ? (
							<BotaoAdicionarAoCarrinho
							>
								+ Adicionar ao Carrinho
							</BotaoAdicionarAoCarrinho>
						) : (
							''
							
						)}
					</BotaoVerProduto>
				</DivImgBotao>
			</CardDoProduto>
		</>
	);
};

export default Produto;
