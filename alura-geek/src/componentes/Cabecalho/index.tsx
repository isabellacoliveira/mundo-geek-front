import LogoAluraGeek from 'assets/Logo.png'; 
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import BotaoLogin from './BotaoDeLogin';
import InputBusca from './InputBusca';
import {Cabecalho, Carrinho, Logo, Perfil, TrocaLado, LoginCarrinhoPerfil, 
        CarrinhoDiv, PerfilUsuario, DivCarrinhoPerfil, NomePreco, Sacola, ItensParaComprar, RemoveItem, FuncoesCarrinho, InformacoesProduto} from './styles'; 
import carrinho from 'assets/carrinho.png'; 
import perfil from 'assets/perfil.png'; 
import { useState } from 'react';
import sacola from 'assets/sacola.png';
import remocao from 'assets/remover.png';
import swal from 'sweetalert';

const NavBar = () => {
    const {pathname} = useLocation(); 
    const usuarioLogado = true;
    const navigate = useNavigate(); 
    const [ fazAparecer, setFazAparecer ] = useState(true);

    function mostraCarrinho(){
        setFazAparecer(!fazAparecer)
    }

    function vaiParaMeuPerfil(){
        navigate('/perfil')
    }

    function deletarProduto(){
        // essa função removerá um produto do carrinho (api)
        swal("em produção")
    }

    function comprarProduto(){
        swal("em breve...")
    }

    return (
		<>
			<Cabecalho>
				<Link to="/home">
					<Logo src={LogoAluraGeek} />
				</Link>
				<TrocaLado>
					<InputBusca />
					{pathname === "/home" ||
					pathname === "/cadastrarproduto" ? (
						<LoginCarrinhoPerfil>
							{usuarioLogado === true ? (
								<>
                                <DivCarrinhoPerfil>
									<Carrinho
										src={carrinho}
										alt="icone do carrinho"
										onClick={mostraCarrinho}
									/>
                                    {/* se faz aparecer e se existir algum produto no carrinho  */}
									{!fazAparecer ? (
										<CarrinhoDiv>
                                            <h1>Produtos Adicionados:</h1>
                                        --------------------------------------------------------------
                                        <ItensParaComprar>
                                        <ul>
												<li>
                                                    <NomePreco>
                                                        <InformacoesProduto>
                                                            <h3>Produto: Mini Yoda</h3>
                                                            <h3>R$: 9.00</h3>
                                                            <h3>quantidade comprada: 1</h3>
                                                        </InformacoesProduto>
                                                    <FuncoesCarrinho>
                                                        <Sacola 
                                                            src={sacola}
                                                            alt="icone de sacola"
                                                            onClick={comprarProduto}
                                                        />
                                                        <RemoveItem
                                                            src={remocao}
                                                            alt="icone de remoção"
                                                            onClick={deletarProduto}
                                                        />
                                                    </FuncoesCarrinho>
                                                    </NomePreco>
												</li>
												
											</ul>
                                        </ItensParaComprar>
											
                                            --------------------------------------------------------------
                                            <h1>Total: 19:00</h1>
										</CarrinhoDiv>
                                    // caso o usuario não tenha produtos no carrinho, retornar isso 
                                    // <CarrinhoDiv>
                                    // <h1>Não há nada para mostrar</h1>
                                    // <h2>Adicone novos produtos no botão de "+"</h2>
                                    // </CarrinhoDiv>
									) : null}

									<PerfilUsuario>
										<Perfil
											src={perfil}
											alt="icone do perfil"
											onClick={vaiParaMeuPerfil}
										/>
                                        {/* percorrer o array que possui o nome dos usuarios cadastrados na api */}
										<h1>Fulaninho Soares</h1>
									</PerfilUsuario>
                                 </DivCarrinhoPerfil>
                                </>
							) : (
								<BotaoLogin />
							)}
						</LoginCarrinhoPerfil>
					) : null}
				</TrocaLado>
			</Cabecalho>
			<Outlet />
		</>
	);
}

export default NavBar; 
