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
					onClick={() => navigate("/administracao/categorias/novo")}
				>
					Categorias
				</button>
				<Outlet />
			</Botoes>
		</>
	);
};
