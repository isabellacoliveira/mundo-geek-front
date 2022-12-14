import MundoGeek from 'assets/mundo-geek.png'; 
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import BotaoLogin from './BotaoDeLogin';
import InputBusca from './InputBusca';
import {Cabecalho, Carrinho, Logo, Perfil, TrocaLado, LoginCarrinhoPerfil, CarrinhoDiv } from './styles'; 
import carrinho from 'assets/carrinho.png'; 
import perfil from 'assets/perfil.png'; 
import { useState, useEffect } from 'react';
import { DivCarrinhoPerfil, PerfilUsuario } from './Carrinho/styles';
import { ICadastroUsuario } from 'types/ICadastroUsuario';
import axios from 'axios';
import CarrinhoDeCompras from './Carrinho';

const NavBar = () => {
    const {pathname} = useLocation(); 
    const navigate = useNavigate(); 
    const [ fazAparecer, setFazAparecer ] = useState(true);
    const [nomeDoUsuarioLogado, setNomeDoUsuarioLogado] = useState<ICadastroUsuario[]>([]);
    const[taLogado, setTaLogado] = useState(false); 

    function mostraCarrinho(){
        setFazAparecer(!fazAparecer)
    }

    function vaiParaMeuPerfil(){
        navigate('/perfil')
    }

    let config = {
        headers: {
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkEiLCJpYXQiOjE2NzA4NjcyNDUsImV4cCI6MTY3MTIxMjg0NX0.Z5PvZfatWUujT0ElVUl6h2WnYNn5prqC_aTSiNvYp4s'
        }
      }
    
      useEffect(() => {
        axios.get<ICadastroUsuario[]>('http://localhost:3001/usuarios', config)
        .then(resposta => {
            setNomeDoUsuarioLogado(resposta.data)
        })
        .catch(erro => {
            console.log(erro)
        })
    },[])

    return (
		<>
			<Cabecalho>
				<Link to="/home">
					<Logo src={MundoGeek} />
				</Link>
				<TrocaLado>
					<InputBusca />
                    {pathname === "/home" ||
					pathname === "/cadastrarproduto" ? <BotaoLogin /> : (
						<LoginCarrinhoPerfil>
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
                                                        <CarrinhoDeCompras  />
                                                    </CarrinhoDiv>
									) : null}

									<PerfilUsuario>
										<Perfil
											src={perfil}
											alt="icone do perfil"
											onClick={vaiParaMeuPerfil}
										/>
                                        {/* percorrer o array que possui o nome dos usuarios cadastrados na api */}
                                        {/* {nomeDoUsuarioLogado.map(nomeDoUsuario => <h1>{nomeDoUsuario.nome}</h1>)} */}
                                        {/* {nomeDoUsuarioLogado} */}
									</PerfilUsuario>
                                 </DivCarrinhoPerfil>
						</LoginCarrinhoPerfil>
					)}
				</TrocaLado>
			</Cabecalho>
			<Outlet />
		</>
	);
}

export default NavBar; 
