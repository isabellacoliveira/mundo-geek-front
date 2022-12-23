import Footer from "componentes/Rodape";
import { useNavigate } from "react-router-dom";
import {
	ConteudoContainer,
	Texto404,
	Titulo,
	Paragrafo,
	BotaoContainer,
	ImagemCogumelo,
} from "./styles";
import erro from "assets/errroooo.webp";

export default function NaoEncontrada() {
	const navegar = useNavigate();

	return (
		<>
			<ConteudoContainer>
				<Texto404>404</Texto404>

				<Titulo>Ops! Página não encontrada.</Titulo>

				<Paragrafo>
					Tem certeza de que era isso que você estava procurando?
				</Paragrafo>

				<BotaoContainer onClick={() => navegar(-1)}>
					<button>Voltar</button>
				</BotaoContainer>

				<ImagemCogumelo src={erro} alt="erro" />
			</ConteudoContainer>
			<Footer />
		</>
	);
}
