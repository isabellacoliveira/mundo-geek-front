import Footer from "componentes/Rodape";
import perfil from 'assets/perfil.png'; 
import { CabecalhoMeuPerfil, Perfil, PerfilImagem, IconeSair, BotaoVoltar} from './styles'; 
import Sair from 'assets/sair.png';
import { deflateRaw } from "zlib";
import { useNavigate } from "react-router-dom";

function MeuPerfil(){
    const navigate = useNavigate(); 

    function fotoDoPerfil(){
        alert("em produção...")
    }

    function deslogar(){
        // essa função deve passar o status de logado para deslogado 
        // se der , perguntar se o usuário deseja mesmo sair se sim, deslogar ele da conta
        // se não, continuar logado 
        console.log("Tem certeza que deseja sair?")
    }

    return (
            <>
            
                <Perfil>
                    <CabecalhoMeuPerfil>
                        <BotaoVoltar onClick={() => navigate(-1)}>
                           {'< voltar'}
                        </BotaoVoltar>
                        <PerfilImagem 
                            src={perfil} 
                            alt="perfil da pessoa"
                            onClick={fotoDoPerfil} 
                        />
                        {/* colocar aqui o nome inserido pelo usuário no login  */}
                        <h1>{`Olá, nome do fulano`}</h1>
                        <IconeSair 
                            src={Sair}
                            alt="icone de sair"
                            onClick={deslogar}
                    />
                    </CabecalhoMeuPerfil>
                    <div>
                        Produtos do fulano
                    </div>
                    
                </Perfil>
                <Footer/>
            </>
    )
}

export default MeuPerfil; 
