import { useState } from "react";
import {
	InputDeBusca,
	IconePesquisa,
	BarrinhaPequena,
	BotaoAparece,
	DivBusca,
} from "./styles";
import Lupa from "assets/lupa.png";
import IProdutos from "types/IProdutos";
import { Api } from "services/api";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { useEffect } from "react";
import Produto from "componentes/ProdutosPorCategoria/Produtos";

const InputBusca = () => {
	const [fazAparecer, setFazAparecer] = useState(true);
	const [fazAparecerBarra, setFazAparecerBarra] = useState(true);
	const [busca, setBusca] = useState<any>();
	const { config } = useAutenticacao();
	const [todosOsProdutos, setTodosOsProdutos] = useState<IProdutos[]>([]);

	function mostraBarra() {
		setFazAparecer(!fazAparecer);
	}

	function mostraBarraBusca() {
		setFazAparecerBarra(!fazAparecerBarra);
	}

	const produtosBuscados = todosOsProdutos.filter((produto) =>
		produto.nome.includes(busca) || 
		produto.preco.toString().includes(busca) || 
		produto.quantidade.toString().includes(busca) 
	);

	const pegaTodosOsProdutos = () => {
		Api.get<IProdutos[], any>(`produtos/`, config).then((resposta) => {
			setTodosOsProdutos(resposta.data);
		});
	};

	useEffect(() => {
		pegaTodosOsProdutos();
        setFazAparecerBarra(false)
	}, []);

	return (
		<>
			{fazAparecer ? (
				<InputDeBusca
					placeholder="O que deseja encontrar?"
					type="search"
					value={busca}
					onChange={(e) => setBusca(e.target.value)}
					onClick={() => mostraBarraBusca()}
				/>
			) : null}

			<BotaoAparece onClick={mostraBarra}>
				<IconePesquisa src={Lupa} />
			</BotaoAparece>
			{!fazAparecer ? (
				<BarrinhaPequena
					placeholder="O que deseja encontrar?"
					type="search"
					value={busca}
					onChange={(e) => setBusca(e.target.value)}
					onClick={() => mostraBarraBusca()}
				/>
			) : null}
			{fazAparecerBarra ? (
				<DivBusca>
					{busca === "" ? (
						<h5>Não há nada para mostrar</h5>
					) : (
						produtosBuscados &&
						produtosBuscados.length > 0 &&
						produtosBuscados?.map((item) => (
							<li key={item.id}>
								<Produto produto={item} />
							</li>
						))
					)}
				</DivBusca>
			) : (
				""
			)}
		</>
	);
};

export default InputBusca;
