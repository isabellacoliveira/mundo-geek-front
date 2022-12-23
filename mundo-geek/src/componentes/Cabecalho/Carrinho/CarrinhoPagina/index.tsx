import Footer from "componentes/Rodape";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { useCarrinho } from "contextos/CarrinhoProvider/CarrinhoContext";
import { useProdutos } from "contextos/ProdutosProvider/ProdutosContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CarrinhoAba } from "../CarrinhoItem";
import {
	CabecalhoCarrinho,
	ContemTudo,
	FinalizarTudo,
	NadaParaMostrar,
	ProdutosAdicionadosAoCarrinho,
} from "./styles";
import sweetalert from "sweetalert";
import { formatCurrency } from "../FormatCurency";

export default function CarrinhoPagina() {
	const { usuario } = useAutenticacao();
	const navigate = useNavigate();
	const { carrinho, finalizarCompra, valorTotal } = useCarrinho();
	const { todosOsProdutos, pegaProdutos } = useProdutos();

	if (!usuario) {
		window.location.pathname = "/home";
	}

	useEffect(() => {
		pegaProdutos();
	}, []);

	function aoTerminarACompra() {
		finalizarCompra();
		sweetalert("Compra finalizada!", {
			icon: "success",
		});
		navigate("/home");
		carrinho.produtos.length = 0;
	}

	return (
		<>
			<ContemTudo>
				<CabecalhoCarrinho>
					<h1>Meu Carrinho</h1>
					<button onClick={() => navigate("/home")}>
						fechar carrinho
					</button>
				</CabecalhoCarrinho>

				<ProdutosAdicionadosAoCarrinho>
					{carrinho.produtos && carrinho.produtos.length > 0 ? (
						carrinho.produtos.map((itemCarrinho) =>
							todosOsProdutos.map((produto) => {
								if (produto.id === itemCarrinho.id) {
									return (
										<CarrinhoAba
											produto={produto}
											key={produto.id}
										/>
									);
								}
							})
						)
					) : (
						<NadaParaMostrar>
							Não há produtos no carrinho
						</NadaParaMostrar>
					)}
				</ProdutosAdicionadosAoCarrinho>

				<FinalizarTudo>
					{carrinho.produtos.length !== 0 ? (
						<>
							<h2>Total: {formatCurrency(valorTotal)}</h2>

							<button onClick={aoTerminarACompra}>
								Finalizar compra
							</button>
						</>
					) : (
						""
					)}
				</FinalizarTudo>
			</ContemTudo>
			<Footer />
		</>
	);
}
