import Footer from "componentes/Rodape";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ICategorias from "types/ICategorias";
import { Api } from "services/api";
import IProdutos from "types/IProdutos";
import { CadastroNovoProduto, Categorias, InputsDaPagina } from "../../styles";
import { config } from "config/config";

export default function CadastraNovoProduto() {
	const navigate = useNavigate();
	const [imagemDoProduto, setImagemDoProduto] = useState("");
	const [categoriaDoProduto, setCategoriaDoProduto] = useState("");
	const [categoriasMapeadas, setCategoriasMapeadas] = useState<ICategorias[]>([]);
	const [nomeDoProduto, setNomeDoProduto] = useState("");
	const [precoDoProduto, setPrecoDoProduto] = useState("");
	const [descricaoDoProduto, setDescricaoDoProduto] = useState("");

	const aoSubmeterForm = () => {
		Api.post<IProdutos>(
			"/produtos",
			{
				nome: nomeDoProduto,
				categorias: categoriaDoProduto, 
				descricao: descricaoDoProduto,
				preco: precoDoProduto,
				imagem: imagemDoProduto,
			},
			config
		).then(() => {
			sweetAlert("Produto cadastrado com sucesso.");
			navigate("/home");
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
				<p>Adicionar novo produto</p>
				<InputsDaPagina
					placeholder="Insira a URL da imagem"
					required
					type="text"
					onChange={(evento) =>
						setImagemDoProduto(evento.target.value)
					}
				/>

				<Categorias>
					<label>Selecione a(s) categoria(s)</label>
					{categoriasMapeadas.map((categoria) => (
						<div>
							<label htmlFor="categoriaTitulo">
								{categoria.titulo}
							</label>
							<input
								key={categoria.id}
								type="checkbox"
								id="categoriaTitulo"
								name={categoria.titulo}
								onChange={(evento) =>
									setCategoriaDoProduto(evento.target.value)
								}
							/>
						</div>
					))}
				</Categorias>

				<InputsDaPagina
					placeholder="Nome do produto"
					required
					type="text"
					onChange={(evento) => setNomeDoProduto(evento.target.value)}
				/>
				<InputsDaPagina
					placeholder="Preço do produto (ex: R$ 0.00)"
					required
					type="text"
					onChange={(evento) =>
						setPrecoDoProduto(evento.target.value)
					}
				/>
				<InputsDaPagina
					placeholder="Descrição do produto"
					required
					type="text"
					onChange={(evento) =>
						setDescricaoDoProduto(evento.target.value)
					}
				/>
				<button type="button" onClick={() => aoSubmeterForm()}>
					Adicionar Produto
				</button>
			</CadastroNovoProduto>

			<Footer />
		</>
	);
}
