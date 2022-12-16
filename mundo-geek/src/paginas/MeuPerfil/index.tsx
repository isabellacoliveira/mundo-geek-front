import Footer from "componentes/Rodape";
import perfil from "assets/perfil.png";
import { CabecalhoMeuPerfil, Perfil, PerfilImagem,
	    IconeSair, BotaoVoltar, ListaDeProdutosIndividual } from "./styles";
import Sair from "assets/sair.png";
import { useNavigate } from "react-router-dom";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";

function MeuPerfil() {
	const navigate = useNavigate();
	const { nomeDoUsuario } = useAutenticacao();

	function fotoDoPerfil() {
		sweetAlert("em produção...");
	}

	async function deslogar() {
		sweetAlert({
			title: "Você tem certeza?",
			text: "Tem certeza que deseja sair da sua conta?",
			icon: "warning",
			buttons: ["Não!", "Sim"],
		}).then((willDelete) => {
			if (willDelete) {
				sweetAlert("Você foi desconectado", {
					icon: "success",
				});
			} else {
				sweetAlert("Você continua logado");
			}
		});
	}

	return (
		<>
			<Perfil>
				<CabecalhoMeuPerfil>
					<BotaoVoltar onClick={() => navigate(-1)}>
						{"< voltar"}
					</BotaoVoltar>
					<PerfilImagem
						src={perfil}
						alt="perfil da pessoa"
						onClick={fotoDoPerfil}
					/>
					<h1>Olá, {nomeDoUsuario}</h1>
					<IconeSair
						src={Sair}
						alt="icone de sair"
						onClick={deslogar}
					/>
				</CabecalhoMeuPerfil>
				<h1>Meus Produtos</h1>
				<ListaDeProdutosIndividual></ListaDeProdutosIndividual>
			</Perfil>
			<Footer />
		</>
	);
}

export default MeuPerfil;
