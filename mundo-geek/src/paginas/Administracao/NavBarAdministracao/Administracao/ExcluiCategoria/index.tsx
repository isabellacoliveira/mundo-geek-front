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
import { token } from "config/config";

export default function CadastraNovaCategoria() {
    const [categoriasMapeadas, setCategoriasMapeadas] = useState<ICategorias[]>([]);

    let config = {
		headers: {
			Authorization:
				`Bearer ${token()}`
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
        Api.delete(`categorias/${categoriaAhSerExcluida.id}/`, config)
            .then(() => {
                const listaCategorias = categoriasMapeadas.filter(categoria => categoria.id !== categoriaAhSerExcluida.id)
                setCategoriasMapeadas([...listaCategorias])
            })
    }

	return (
		<>
			<CadastroNovoProduto>
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
