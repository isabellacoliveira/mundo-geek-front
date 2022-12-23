import { DivCarrinho, ImagemDoProdutoDoCarrinho } from "../styles";
import { BotaoRemoverItem, InformacoesDoProduto } from "../CarrinhoPagina/styles";
import {  useCarrinho } from "contextos/CarrinhoProvider/CarrinhoContext";
import IProdutos from "types/IProdutos";

interface ProdutoProps {
	produto: IProdutos;
}

export function CarrinhoAba({produto} : ProdutoProps) {
	const {quantidadeComprada, removerProduto} = useCarrinho(); 

	return (
		<>
    <section>
			<DivCarrinho>
				<ImagemDoProdutoDoCarrinho>
					<img alt="imagem do produto" src={produto.imagem} />
				</ImagemDoProdutoDoCarrinho>
				<InformacoesDoProduto>
					<h3>Nome: {produto.nome}</h3>
					<h3>Preco: R$ {produto.preco}</h3>
					<h3>quantidade no carrinho: {quantidadeComprada}</h3>
	          <BotaoRemoverItem>
					<button
						onClick={() => removerProduto(produto.id)}
					>remover item</button>
          </BotaoRemoverItem>
				</InformacoesDoProduto>
			</DivCarrinho>
    </section>
		</>
	);
}
