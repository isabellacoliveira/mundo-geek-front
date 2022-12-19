import Footer from "componentes/Rodape";
import perfil from "assets/perfil.png";
import {
	CabecalhoMeuPerfil,
	Perfil,
	PerfilImagem,
	IconeSair,
	BotaoVoltar,
	ListaDeProdutosIndividual,
} from "./styles";
import Sair from "assets/sair.png";
import { useNavigate } from "react-router-dom";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { message } from "antd";
import { useEffect, useState } from "react";
import { Api } from "services/api";
import ICategorias from "types/ICategorias";
import Categoria from "componentes/ProdutosPorCategoria/Categorias";
import IProdutos from "types/IProdutos";
import { config } from "config/config";

function MeuPerfil() {
	const navigate = useNavigate();
	const { usuario } = useAutenticacao();
	const autenticacao = useAutenticacao();
	const [produtos, setProdutos] = useState<ICategorias[]>([]);
	
	useEffect(() => {
		Api.get<IProdutos[], any>("/produtos", config)
			.then((resposta) => {
				setProdutos(resposta.data);
				console.log(resposta.data);
			})
			.catch((erro) => {
				console.log(erro);
			});
	}, []);

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
				try {
					autenticacao.logout();
					navigate("/home");
				} catch (error) {
					message.error("erro");
				}
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
					<BotaoVoltar onClick={() => navigate(-2)}>
						{"< voltar"}
					</BotaoVoltar>
					<PerfilImagem
						src={perfil}
						alt="perfil da pessoa"
						onClick={fotoDoPerfil}
					/>
					<h1> Olá {usuario?.nome}</h1>
					<IconeSair
						src={Sair}
						alt="icone de sair"
						onClick={deslogar}
					/>
				</CabecalhoMeuPerfil>
				<h1>Meus Produtos</h1>
				{/* colocar só os produtos que a pessoa cadastrou  */}
				<ListaDeProdutosIndividual>
				{produtos?.map(item => <Categoria categoria={item} key={item.id}/>)}
				</ListaDeProdutosIndividual>
			</Perfil>
			<Footer />
		</>
	);
}

export default MeuPerfil;
