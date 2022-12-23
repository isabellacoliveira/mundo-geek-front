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
import { useProdutos } from "contextos/ProdutosProvider/ProdutosContext";
import NaoEncontrada from "../NaoEncontrada";

export default function ProdutoSelecionado() {
	const [nome, setNome] = useState();
	const [preco, setPreco] = useState();
	const [descricao, setDescricao] = useState();
	const [imagem, setImagem] = useState();
	const parametros = useParams();
	const {config} = useAutenticacao();
	const {todosOsProdutos, pegaProdutos} = useProdutos(); 
	const [produtoExiste, setProdutoExiste] = useState<boolean>(true); 	

	useEffect(() => {
		pegaProdutos();
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
			})
			.catch((error) => {
				console.log(error)
				setProdutoExiste(false)
			})
		}
	}, [parametros]);


	if(!produtoExiste){
		return <NaoEncontrada />
	}

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
