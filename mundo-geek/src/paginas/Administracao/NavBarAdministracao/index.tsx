import { Outlet, useNavigate } from "react-router-dom";
import { CabecalhoAdm, Logo } from "./styles";
import MundoGeek from "assets/mundo-geek.png";

const NavBarAdministracao = () => {
	const navigate = useNavigate();

	return (
		<>
			<CabecalhoAdm>
				<Logo src={MundoGeek} onClick={() => navigate("/home")} />
				<button
					className="admLink">
					Categorias
				</button>
				<button
					className="admLink">
					Produtos
				</button>
			</CabecalhoAdm>
			<Outlet />
		</>
	);
};

export default NavBarAdministracao;
