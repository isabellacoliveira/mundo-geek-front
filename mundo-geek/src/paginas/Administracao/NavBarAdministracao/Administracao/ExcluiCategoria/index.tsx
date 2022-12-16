import Footer from "componentes/Rodape";
import { Api } from "contextos/AutenticacaoProvider/services/api";
import { useEffect, useState } from "react";
import ICategorias from "types/ICategorias";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import {
	InputsDaPagina,
	CadastroNovoProduto,
	RemoverCategoria,
} from "../../styles";
import { Link as RouterLink } from 'react-router-dom'

export default function CadastraNovaCategoria() {
    const [categoriasMapeadas, setCategoriasMapeadas] = useState<ICategorias[]>([]);

	let config = {
		headers: {
			Authorization:
				"Bearer " +
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibm9tZSI6ImNsZWFuZSBldmVsaW4iLCJzb2JyZW5vbWUiOiJiYXRpc3RhIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjcxMTQ2NDQ2LCJleHAiOjE2NzE0OTIwNDZ9.kQ8klpiyqx7GRsXrHcKcKyocsnAfCQIuTWmetRtxq20",
		},
	};

    useEffect(() => {
		Api
			.get<ICategorias[]>("categorias", config)
			.then((resposta) => {
				setCategoriasMapeadas(resposta.data);
			})
			.catch((erro) => {
				console.log(erro);
			});
	}, []);

    const excluir = (categoriaAhSerExcluida: ICategorias) => {
        Api.delete(`categorias/${categoriaAhSerExcluida.id}/`)
            .then(() => {
                const listaCategorias = categoriasMapeadas.filter(categoria => categoria.id !== categoriaAhSerExcluida.id)
                setCategoriasMapeadas([...listaCategorias])
            })
    }

	return (
		<>
			<CadastroNovoProduto>
				{/* <label className="editaNova">Nova Categoria</label>
			<InputsDaPagina 
                    type="text"
                    placeholder="Digite a nova categoria"
            ></InputsDaPagina>
            <button>Adicionar Categoria</button> */}
                <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {categoriasMapeadas.map((categoria) => ( <TableRow key={categoria.titulo}>
                        <TableCell>
                            {categoria.titulo}
                        </TableCell>
                        <TableCell>
                            [ <RouterLink to={`/administracao/categorias/editar/${categoria.id}`}>editar</RouterLink> ]
                        </TableCell>
                        <TableCell>
                            <Button variant="outlined" color="error" onClick={() => excluir(categoria)}>
                                Excluir
                            </Button>
                        </TableCell>
                    </TableRow>	))}
                </TableBody>
            </Table>
        </TableContainer>
			</CadastroNovoProduto>
			<Footer />
		</>
	);
}
