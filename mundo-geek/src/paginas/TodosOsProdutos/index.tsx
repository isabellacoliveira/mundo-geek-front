import FaleConosco from "componentes/FaleConosco";
import Footer from "componentes/Rodape";
import { Link } from "react-router-dom";
import { BotaoCadastraProduto, ListaDeProdutos, Produtos, Titulo } from "./styles";

function TodosOsProdutos(){
    return (
		<>
            <Produtos>
            <Titulo>Todos os produtos</Titulo>
				<Link
					to="/cadastro/produto"
                    className="textoBotao"
				>
					<BotaoCadastraProduto>
						Adicionar Produto
					</BotaoCadastraProduto>
				</Link>
			</Produtos>
			<ListaDeProdutos>
				{/* dar um map nos produtos e exibir aqui  */}
			</ListaDeProdutos>
			<FaleConosco />
			<Footer />
		</>
	);
}

export default TodosOsProdutos; 
