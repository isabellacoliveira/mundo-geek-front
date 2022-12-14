import FaleConosco from "componentes/FaleConosco";
import Footer from "componentes/Rodape";
import { Link, useLocation } from "react-router-dom";
import { BotaoCadastraProduto, ListaDeProdutos, Produtos, Titulo } from "./styles";

function TodosOsProdutos(){
	const {pathname} = useLocation(); 

    return (
		<>
            <Produtos>
            <Titulo>Todos os produtos</Titulo>
				<Link
					to="/cadastro/produto"
                    className="textoBotao"
				>
					{pathname === "/produtos" ? <BotaoCadastraProduto>
						Adicionar Produto
					</BotaoCadastraProduto> : ''}
					
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
