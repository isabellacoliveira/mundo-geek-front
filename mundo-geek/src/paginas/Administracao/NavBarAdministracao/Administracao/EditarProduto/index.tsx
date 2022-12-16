import Footer from "componentes/Rodape";
import { CadastroNovoProduto } from "../../styles";

export default function EditarProdutoAntigo() {
	return (
		<>
			<CadastroNovoProduto>
				<h3>Editar Produto</h3>
                <label>Imagem</label>
				<input placeholder="Altere a URL da imagem"></input>
				<label>Nome</label>
				<input placeholder="Altere o nome"></input>
				<label>Preco</label>
				<input placeholder="Altere o preço"></input>
				<label>Descrição</label>
				<input placeholder="Altere a descrição"></input>
                <button>Salvar</button>
			</CadastroNovoProduto>
            <Footer/>
		</>
	);
}
