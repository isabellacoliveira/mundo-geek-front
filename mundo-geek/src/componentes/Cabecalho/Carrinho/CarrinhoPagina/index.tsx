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
import { Api } from "services/api";
import ICarrinho from "types/ICarrinho";

export default function CarrinhoPagina() {
	const { usuario, config } = useAutenticacao();
	const navigate = useNavigate();
	const { carrinho, valorTotal, setCarrinho } = useCarrinho();
	const { todosOsProdutos, pegaProdutos } = useProdutos();

	if (!usuario) {
		window.location.pathname = "/home";
	}

	useEffect(() => {
		pegaProdutos();
	}, []);

	async function aoTerminarACompra() {
		Api.post<ICarrinho[]>('/carrinhos', {
			usuario: usuario?.id,
			produtos: carrinho.produtos
		},
		config)
		.then(() => {
			sweetalert("Compra finalizada!", {
				icon: "success",
			});
			navigate("/home");
			carrinho.produtos.length = 0;
			setCarrinho({
				usuario: 0,
				quantidade: 0,
				produtos: []
			}) 
		}) 
		.catch((error) => {
			console.log({ data: error})
			sweetalert('Não foi possível concluir a compra, quantidade insuficiente no estoque')
		})
	
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
