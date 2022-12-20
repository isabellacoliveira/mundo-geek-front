import MundoGeek from "assets/mundo-geek.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import BotaoLogin from "./BotaoDeLogin";
import InputBusca from "./InputBusca";
import {
	Cabecalho,
	Logo,
	Perfil,
	TrocaLado,
	LoginCarrinhoPerfil,
} from "./styles";
import perfil from "assets/perfil.png";
import { DivCarrinhoPerfil, PerfilUsuario } from "./Carrinho/styles";
import CarrinhoDeCompras from "./Carrinho";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";

const NavBar = () => {
	const navigate = useNavigate();
	const { token, usuario } = useAutenticacao();

	function vaiParaMeuPerfil() {
		navigate("/perfil");
	}

	console.log('renderizou navbar:', token)

	return (
		<>
			<Cabecalho>
				<Link to="/home">
					<Logo src={MundoGeek} />
				</Link>
				<TrocaLado>
					<InputBusca />
					{!usuario ? (
						<BotaoLogin /> ) : (
						<LoginCarrinhoPerfil>
							<DivCarrinhoPerfil>
							<CarrinhoDeCompras />
								<PerfilUsuario>
									<Perfil
										src={perfil}
										alt="icone do perfil"
										onClick={vaiParaMeuPerfil}
									/>
									<h2>{usuario?.nome}</h2>
								</PerfilUsuario>
							</DivCarrinhoPerfil>
						</LoginCarrinhoPerfil>
						) 
					}
				</TrocaLado>
			</Cabecalho>
			<Outlet />
		</>
	);
};

export default NavBar;
