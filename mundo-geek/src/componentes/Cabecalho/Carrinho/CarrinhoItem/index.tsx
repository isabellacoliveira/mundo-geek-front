import { DivCarrinho, ImagemDoProdutoDoCarrinho } from "../styles";
import Teste from "assets/Hero.png";
import { BotaoRemoverItem, BotoesCarrinho, InformacoesDoProduto } from "../CarrinhoPagina/styles";

export function CarrinhoAba() {
	return (
		<>
    <section>
			<DivCarrinho>
				<ImagemDoProdutoDoCarrinho>
					<img alt="imagem do produto" src={Teste} />
				</ImagemDoProdutoDoCarrinho>
				<InformacoesDoProduto>
					<h3>Nome: Mini Yoda</h3>
					<h3>Preco: R$ 90,00</h3>
					<BotoesCarrinho>
						<button>+</button>
						<h3>20</h3>
						<button>-</button>
					</BotoesCarrinho>
          <BotaoRemoverItem>
					<button>remover item</button>
          </BotaoRemoverItem>
				</InformacoesDoProduto>
			</DivCarrinho>
    </section>
		</>
	);
}
