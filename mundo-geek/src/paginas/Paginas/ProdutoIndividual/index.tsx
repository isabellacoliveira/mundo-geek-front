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
import { Api, getCategorias } from "services/api";
import { useParams } from "react-router-dom";
import { config } from "config/config";
import ICategorias from "types/ICategorias";
import Categoria from "componentes/ProdutosPorCategoria/Categorias";
import Produto from "componentes/ProdutosPorCategoria/Produtos";

export default function ProdutoSelecionado() {
	const [nome, setNome] = useState();
	const [preco, setPreco] = useState();
	const [descricao, setDescricao] = useState();
	const [imagem, setImagem] = useState();
	const [produtos, setProdutos] = useState<IProdutos[]>([]);
	const parametros = useParams();
	console.log("parametros", parametros);


	useEffect(() => {
		getCategorias()
		.then(api => {
			setProdutos(api)
			return api
		})
	})

	useEffect(() => {
		if (parametros.id) {
			Api.get<IProdutos[] | any>(
				`produtos/${parametros.id}`,
				config
			).then((resposta) => {
				setNome(resposta.data.nome);
				setPreco(resposta.data.preco);
				setDescricao(resposta.data.descricao);
				setImagem(resposta.data.imagem);
			});
		}
	}, [parametros]);

	const produto = produtos?.find((produto) => {
		return produto.id === Number(parametros.id);
	});

	const produtosRecomendados = produtos
		?.filter((produto) => produto.id !== Number(parametros.id))
		.sort((a, b) => b.id - a.id)
		.slice(0, 6);

	// if(!produto){
	// 	window.location.pathname = '*'
	// }

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
