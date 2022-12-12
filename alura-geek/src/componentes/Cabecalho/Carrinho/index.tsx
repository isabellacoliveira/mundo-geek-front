import {  FuncoesCarrinho, InformacoesProduto, 
    ItensParaComprar, NomePreco, RemoveItem, Sacola } from "./styles";
import sacola from 'assets/sacola.png';
import remocao from 'assets/remover.png';
import swal from "sweetalert";

const Carrinho = () => {
    function deletarProduto(){
        // essa função removerá um produto do carrinho (api)
        swal("em produção")
    }

    function comprarProduto(){
        swal("em breve...")
    }

    return(
        <>
            <h1>Produtos Adicionados:</h1>
		--------------------------------------------------------------
		<ItensParaComprar>
			<ul>
				<li>
					<NomePreco>
						<InformacoesProduto>
							<h3>Produto: Mini Yoda</h3>
							<h3>R$: 9.00</h3>
							<h3>quantidade comprada: 1</h3>
						</InformacoesProduto>
						<FuncoesCarrinho>
							<Sacola
								src={sacola}
								alt="icone de sacola"
								onClick={comprarProduto}
							/>
							<RemoveItem
								src={remocao}
								alt="icone de remoção"
								onClick={deletarProduto}
							/>
						</FuncoesCarrinho>
					</NomePreco>
				</li>
			</ul>
		</ItensParaComprar>
		--------------------------------------------------------------
		<h1>Total: 19:00</h1>

        {/* // caso o usuario não tenha produtos no carrinho, retornar isso 
                                    // <CarrinhoDiv>
                                    // <h1>Não há nada para mostrar</h1>
                                    // <h2>Adicone novos produtos no botão de "+"</h2>
                                    // </CarrinhoDiv> */}
        </>
    )
		
}

export default Carrinho; 