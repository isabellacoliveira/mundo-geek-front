import LogoAluraGeek from 'assets/Logo.png'; 
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import BotaoLogin from './BotaoDeLogin';
import InputBusca from './InputBusca';
import {Cabecalho, Carrinho, Logo, Perfil, TrocaLado, LoginCarrinhoPerfil, CarrinhoDiv } from './styles'; 
import carrinho from 'assets/carrinho.png'; 
import perfil from 'assets/perfil.png'; 
import { useState } from 'react';
import { DivCarrinhoPerfil, PerfilUsuario } from './Carrinho/styles';

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
                                    {/* fazer carrinho sumir ao clicar em qualquer lugar da tela  */}
									{!fazAparecer ? (

                                                    <CarrinhoDiv>
                                                        <Carrinho  />
                                                    </CarrinhoDiv>
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
