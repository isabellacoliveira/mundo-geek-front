import { DivCarrinho, ImagemDoProdutoDoCarrinho } from "../styles";
import { BotaoRemoverItem, InformacoesDoProduto } from "../CarrinhoPagina/styles";
import {  useCarrinho } from "contextos/CarrinhoProvider/CarrinhoContext";
import IProdutos from "types/IProdutos";

interface ProdutoProps {
	produto: IProdutos;
}

export function CarrinhoAba({produto} : ProdutoProps) {
	const { removerProduto, carrinho, decresceValor} = useCarrinho(); 

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
					{carrinho.produtos.map(item => (
						item.id === produto.id && <h3> quantidade no carrinho: {item.quantidade} </h3>
					))}
	          <BotaoRemoverItem>
					<button
						onClick={() => {
							removerProduto(produto.id)
							decresceValor(produto)
						}
						}
					>remover item</button>
          </BotaoRemoverItem>
				</InformacoesDoProduto>
			</DivCarrinho>
    </section>
		</>
	);
}
