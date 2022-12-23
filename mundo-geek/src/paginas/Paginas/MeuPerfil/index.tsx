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
import sweetAlert from 'sweetalert'; 
import IProdutos from "types/IProdutos";
import {useEffect} from 'react'; 
import Produto from "componentes/ProdutosPorCategoria/Produtos";
import { useProdutos } from "contextos/ProdutosProvider/ProdutosContext";

function MeuPerfil() {
	const navigate = useNavigate();
	const { token, usuario } = useAutenticacao();
	const autenticacao = useAutenticacao();
	const {todosOsProdutos, pegaProdutos} = useProdutos(); 

	useEffect(() => {
		pegaProdutos(); 
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
		})
		.then((willDelete) => {
			if (willDelete) {
				try {
					autenticacao.logout();
					navigate("/login");
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

	if (!token) {
		window.location.pathname = '/login'
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
					<h1> Olá, {usuario?.nome} !</h1>
					<IconeSair
						src={Sair}
						alt="icone de sair"
						onClick={deslogar}
					/>
				</CabecalhoMeuPerfil>
				{usuario?.role === "admin" ? 
				<>
				<h1>Meus Produtos</h1>
				<ListaDeProdutosIndividual>
					{todosOsProdutos.filter(
				(produto: IProdutos | undefined) => {
					let produtosDoUsuario = produto?.usuario.id === usuario?.id
					return produtosDoUsuario 
				}
			)?.map((item) =>  <Produto produto={item} key={item.id} />)}
				</ListaDeProdutosIndividual>
				</>
				 : ''}
			</Perfil>
			<Footer />
		</>
	);
}

export default MeuPerfil;
