import FaleConosco from "componentes/FaleConosco";
import Footer from "componentes/Rodape";
import {
	ContemTudo,
	ConteudoDoProduto,
	DivDaImagem,
	GrupoProdutosSimilares,
	ListaProdutosRecomendados,
	PostConteudoContainer,
	Preco,
	ProdutosSimilares,
	Titulo,
} from "./styles";
import IProdutos from "types/IProdutos";
import { useState, useEffect } from "react";
import { Api } from "services/api";
import { useParams } from "react-router-dom";
import Produto from "componentes/ProdutosPorCategoria/Produtos";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";

export default function ProdutoSelecionado() {
	const [nome, setNome] = useState();
	const [preco, setPreco] = useState();
	const [descricao, setDescricao] = useState();
	const [imagem, setImagem] = useState();
	const parametros = useParams();
	const {config} = useAutenticacao();
	const[todosOsProdutos, setTodosOsProdutos] = useState<IProdutos[]>([]); 

	const pegaTodosOsProdutos = () => {
		Api.get<IProdutos[], any>(`produtos/`, config)
		.then((resposta) => {
			setTodosOsProdutos(resposta.data);
		});
	};

	useEffect(() => {
		pegaTodosOsProdutos();
	}, []);


	useEffect(() => {
		if (parametros.id) {
			Api.get<IProdutos[] | any>(
				`produtos/${parametros.id}`,
				config
			)
			.then((resposta) => {
				setNome(resposta.data.nome);
				setPreco(resposta.data.preco);
				setDescricao(resposta.data.descricao);
				setImagem(resposta.data.imagem);
			});
		}
	}, [parametros]);

	

	const produtosRecomendados = todosOsProdutos
		?.filter((produto) => produto.id !== Number(parametros.id))
		.sort((a, b) => b.id - a.id)
		.slice(0, 6);

	return (
		<>
		<ContemTudo>
			<PostConteudoContainer>
				<DivDaImagem>
					<img src={imagem} alt="capa do produto" />
				</DivDaImagem>
				<ConteudoDoProduto>
					<Titulo>{nome}</Titulo>
					<Preco> R$ {preco}</Preco>
					<PostConteudoContainer>{descricao}</PostConteudoContainer>
				</ConteudoDoProduto>
			</PostConteudoContainer>
				<ProdutosSimilares>Produtos similares:</ProdutosSimilares>
			<GrupoProdutosSimilares>
				<ListaProdutosRecomendados>
					{produtosRecomendados &&
					produtosRecomendados.length > 0 &&
					produtosRecomendados?.map((item) => (
						<li  key={item.id}>
							<Produto produto={item} />
						</li>
					))}	
				</ListaProdutosRecomendados>
					</GrupoProdutosSimilares>
			<FaleConosco />
			<Footer />
		</ContemTudo>
			
		</>
	);
}
