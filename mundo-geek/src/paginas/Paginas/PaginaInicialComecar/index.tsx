import MundoGeek from "assets/mundo-geek.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Progresso,
	PorcentagemProgresso,
	BotaoComecar,
} from "./styles";

function Entrar() {
	const [filled, setFilled] = useState(0);
	const [estaCorrendo, setEstaCorrendo] = useState(false);
	const navigate = useNavigate();

	function olaUsuario() {
		sweetAlert(
			"Olá, seja bem-vindo ao Mundo-Geek! Clique no botão para começar"
		);
	}

	function aoEnviar() {
		if (filled === 100) {
			navigate("/home");
		}
	}

	useEffect(() => {
		setEstaCorrendo(true);
		if (filled < 100 && estaCorrendo) {
			setTimeout(() => setFilled((prev) => (prev += 2)), 5);
		}
	}, [filled, estaCorrendo]);

	return (
		<>
			<Container onLoad={olaUsuario}>
				<img src={MundoGeek} alt="Logo do Alura Geek" />
				<Progresso>
					<div
						style={{
							height: "100%",
							width: `${filled}%`,
							backgroundColor: "#2A7AE4",
							transition: "width 0.6s",
						}}
					></div>
					<PorcentagemProgresso>{filled}%</PorcentagemProgresso>
				</Progresso>

				<BotaoComecar onClick={aoEnviar} type="submit">
					Começar
				</BotaoComecar>
			</Container>
		</>
	);
}

export default Entrar;
