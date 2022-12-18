import MundoGeek from "assets/mundo-geek.png";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import BotaoLogin from "./BotaoDeLogin";
import InputBusca from "./InputBusca";
import {
	Cabecalho,
	Carrinho,
	Logo,
	Perfil,
	TrocaLado,
	LoginCarrinhoPerfil,
	CarrinhoDiv,
} from "./styles";
import carrinho from "assets/carrinho.png";
import perfil from "assets/perfil.png";
import { useState } from "react";
import { DivCarrinhoPerfil, PerfilUsuario } from "./Carrinho/styles";
import CarrinhoDeCompras from "./Carrinho";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { CarrinhoAba } from "./Carrinho/CarrinhoAba";

const NavBar = () => {
	const navigate = useNavigate();
	const [fazAparecer, setFazAparecer] = useState(true);
	const { usuario } = useAutenticacao();

	function mostraCarrinho() {
		setFazAparecer(!fazAparecer);
	}

	function vaiParaMeuPerfil() {
		navigate("/perfil");
	}

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
								{!fazAparecer ? (
									<CarrinhoDiv>

									</CarrinhoDiv>
								) : null}
								

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
