import Footer from "componentes/Rodape";
import { CadastroNovoProduto, Categorias } from "../../styles";
import { useEffect, useState } from "react";
import { Api } from "services/api";
import ICategorias from "types/ICategorias";
import { useNavigate, useParams } from "react-router-dom";
import IProdutos from "types/IProdutos";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import NaoEncontrada from "paginas/Paginas/NaoEncontrada";

export default function EditarProdutoAntigo() {
	const [imagemDoProduto, setImagemDoProduto] = useState("");
	const [categoriasMapeadas, setCategoriasMapeadas] = useState<ICategorias[]>(
		[]
	);
	const [nomeDoProduto, setNomeDoProduto] = useState("");
	const [precoDoProduto, setPrecoDoProduto] = useState("");
	const [descricaoDoProduto, setDescricaoDoProduto] = useState("");
	const [quantidade, setQuantidade] = useState("");
	const [produtoExiste, setProdutoExiste] = useState<boolean>(true); 
	const parametros = useParams();
	const { usuario, config } = useAutenticacao();
	const navigate = useNavigate();

	interface IKeys {
		id: number;
	}

	useEffect(() => {
		if (parametros.id) {
			Api.get<IProdutos | any>(`produtos/${parametros.id}/`, config)
			.then(
				(resposta) => { 
					if (resposta.data && resposta.status === 200) {
						resposta.data.map((categoria : any | ICategorias) => (categoria.ativo = false));
					}
					setNomeDoProduto(resposta.data.nome);
					setCategoriasMapeadas(resposta.data.categorias);
					setQuantidade(resposta.data.quantidade);
					setImagemDoProduto(resposta.data.imagem);
					setDescricaoDoProduto(resposta.data.descricao);
					setPrecoDoProduto(resposta.data.preco);
				}
			);
		} else {
			setProdutoExiste(false)
		} 
		
	}, [parametros]);

	useEffect(() => {
		Api.get<ICategorias[]>("categorias", config)
			.then((resposta) => {
				if (resposta.data && resposta.status === 200) {
					resposta.data.map((categoria) => (categoria.ativo = false));
				  }
				setCategoriasMapeadas(resposta.data);
			})
			.catch((erro) => {
				console.log(erro);
			});
	}, []);

	if(!produtoExiste){
		<NaoEncontrada />
	}

	const aoSubmeterForm = () => {
		Api.put<IProdutos>(
			`produtos/${parametros.id}/`,
			{
				nome: nomeDoProduto,
				descricao: descricaoDoProduto,
				quantidade: Number(quantidade),
				imagem: imagemDoProduto,
				preco: Number(precoDoProduto),
				categorias: categoriasMapeadas
					?.filter((categoria) => categoria.ativo === true)
					?.map((x: any): IKeys => ({ id: x.id })),
				usuario: usuario?.id,
			},
			config
		).then(() => {
			sweetAlert("Produto atualizado com sucesso!");
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

	if (!usuario) {
		window.location.pathname = "/login";
	}

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
					<label>Selecione a(s) categoria(s)</label>
					{categoriasMapeadas?.map((categoria) => (
						<div>
							<label htmlFor="categoriaTitulo">
								{categoria.titulo}
							</label>
							<input
								key={categoria.id}
								type="checkbox"
								id="categoriaTitulo"
								name={categoria.titulo}
								required
								onChange={() => {
									return (categoria.ativo = !categoria.ativo);
								}}
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
					placeholder="Altere a quantidade"
					value={quantidade}
					onChange={(evento) => setQuantidade(evento.target.value)}
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
