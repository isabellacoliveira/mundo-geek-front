import Footer from "componentes/Rodape";
import { CadastroNovoProduto, Categorias } from "../../styles";
import { useEffect, useState } from "react";
import { Api } from "services/api";
import ICategorias from "types/ICategorias";
import { useNavigate, useParams } from "react-router-dom";
import IProdutos from "types/IProdutos";
import { config } from "config/config";

export default function EditarProdutoAntigo() {
	const [imagemDoProduto, setImagemDoProduto] = useState("");
	const [categoriaDoProduto, setCategoriaDoProduto] = useState("");
	const [categoriasMapeadas, setCategoriasMapeadas] = useState<ICategorias[]>([]);
	const [nomeDoProduto, setNomeDoProduto] = useState("");
	const [precoDoProduto, setPrecoDoProduto] = useState("");
	const [descricaoDoProduto, setDescricaoDoProduto] = useState("");
	const parametros = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (parametros.id) {
			Api.get<IProdutos | any>(`produtos/${parametros.id}/`, config)
			.then(
				(resposta) => {
					setNomeDoProduto(resposta.data.nome);
					setCategoriaDoProduto(resposta.data.categorias);
					setImagemDoProduto(resposta.data.imagem);
					setDescricaoDoProduto(resposta.data.descricao);
					setPrecoDoProduto(resposta.data.preco);
				}
			);
		}
	}, [parametros]);

	const aoSubmeterForm = () => {
		Api.put<IProdutos>(
			`produtos/${parametros.id}/`,
			{
				nome: nomeDoProduto,
				descricao: descricaoDoProduto,
				imagem: imagemDoProduto,
				preco: precoDoProduto,
				categorias: categoriaDoProduto,
			},
			config
		).then(() => {
			sweetAlert("Produto atualizado com sucesso!");
			navigate("/perfil");
		});
	};

	useEffect(() => {
		Api.get<ICategorias[]>("categorias", config)
			.then((resposta) => {
				setCategoriasMapeadas(resposta.data);
			})
			.catch((erro) => {
				console.log(erro);
			});
	}, []);

	return (
		<>
			<CadastroNovoProduto>
				<h3>Editar Produto</h3>
				<input
					placeholder="Altere a URL da imagem"
					value={imagemDoProduto}
					onChange={(evento) =>
						setImagemDoProduto(evento.target.value)
					}
				/>
				<Categorias>
					{categoriasMapeadas.map((categoria) => (
						<div>
							<label htmlFor="categoriaTitulo">
								{categoria.titulo}
							</label>
							<input
								key={categoria.titulo}
								type="checkbox"
								id="categoriaTitulo"
								name={categoria.titulo}
								value={categoriaDoProduto}
								onChange={(evento) =>
									setCategoriaDoProduto(evento.target.value)
								}
							/>
						</div>
					))}
				</Categorias>
				<input
					placeholder="Altere o nome"
					value={nomeDoProduto}
					onChange={(evento) => setNomeDoProduto(evento.target.value)}
				></input>
				<input
					placeholder="Altere o preço"
					value={precoDoProduto}
					onChange={(evento) =>
						setPrecoDoProduto(evento.target.value)
					}
				></input>
				<input
					placeholder="Altere a descrição"
					value={descricaoDoProduto}
					onChange={(evento) =>
						setDescricaoDoProduto(evento.target.value)
					}
				></input>
				<button type="button" onClick={() => aoSubmeterForm()}>
					Salvar
				</button>
			</CadastroNovoProduto>
			<Footer />
		</>
	);
}
