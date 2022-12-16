import { Outlet, useNavigate } from "react-router-dom";
import { Botoes } from "../styles";

export const Administracao = () => {
	const navigate = useNavigate();

	return (
		<>
			<Botoes>
				<button
					onClick={() => navigate("/administracao/produtos/novo")}
				>
					Novo Produto
				</button>
				<button
					onClick={() => navigate("/administracao/produtos/editar")}
				>
					Editar Produto
				</button>
				<button
					onClick={() => navigate("/administracao/categorias/novo")}
				>
					Categorias
				</button>
				<button
					onClick={() => navigate("/administracao/categorias/editar/:id")}
				>
					Nova Categoria
				</button>
				<Outlet />
			</Botoes>
		</>
	);
};
