import Footer from "componentes/Rodape";
import { Api } from "services/api";
import { useEffect, useState } from "react";
import ICategorias from "types/ICategorias";
import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { AdicionarCategoria, CadastroNovoProduto } from "../../styles";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";

// precisa recarregar a pagina para aparecer a categoria 
export default function CadastraNovaCategoria() {
	const [categoriasMapeadas, setCategoriasMapeadas] = useState<ICategorias[]>(
		[]
	);
	const [categoriaNova, setCategoriaNova] = useState(""); 
	const navigate = useNavigate();
	const {usuario, config} = useAutenticacao(); 
	
	useEffect(() => {
	
		Api.get<ICategorias[]>("categorias", config)
			.then((resposta) => {
				setCategoriasMapeadas(resposta.data);
			})
			.catch((erro) => {
				console.log(erro);
			});
	}, []);

	const excluir = (categoriaAhSerExcluida: ICategorias) => {
		Api.delete(`categorias/${categoriaAhSerExcluida.id}/`, config).then(
			() => {
				const listaCategorias = categoriasMapeadas.filter(
					(categoria) => categoria.id !== categoriaAhSerExcluida.id
				);
				setCategoriasMapeadas([...listaCategorias]);
			}
		);
	};

	const adicionaCategoria = () => {
		Api.post<ICategorias>('categorias/', {
			titulo: categoriaNova,            
		}, config)
			.then(() => {
				sweetAlert("Categoria cadastrada com sucesso!")
				navigate('/home')
			})
    }

	if (!usuario) {
		window.location.pathname = '/login'
	}

	return (
		<>
			<CadastroNovoProduto>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Nome</TableCell>
								<TableCell>Editar</TableCell>
								<TableCell>Excluir</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{categoriasMapeadas.map((categoria) => (
								<TableRow key={categoria.titulo}>
									<TableCell>{categoria.titulo}</TableCell>
									<TableCell>
										[{" "}
										<RouterLink
											to={`/administracao/categorias/editar/${categoria.id}`}
										>
											editar
										</RouterLink>{" "}
										]
									</TableCell>
									<TableCell>
										<Button
											variant="outlined"
											color="error"
											onClick={() => excluir(categoria)}
										>
											Excluir
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<AdicionarCategoria>
					<div>
					<h5>Adicionar nova categoria</h5>
						<input
							type="text"
							value={categoriaNova}
							placeholder="Adicionar nova categoria"
							onChange={(evento) =>
								setCategoriaNova(evento.target.value)
							}
						/>
						<button
							type="button"
							onClick={() => adicionaCategoria()}
						>
							Adicionar Categoria
						</button>
					</div>
						
				</AdicionarCategoria>
			</CadastroNovoProduto>
			<Footer />
		</>
	);
}
