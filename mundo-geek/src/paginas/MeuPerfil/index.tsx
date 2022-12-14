import Footer from "componentes/Rodape";
import perfil from 'assets/perfil.png'; 
import { CabecalhoMeuPerfil, Perfil, PerfilImagem, 
        IconeSair, BotaoVoltar, ListaDeProdutosIndividual} from './styles'; 
import Sair from 'assets/sair.png';
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react'; 
import axios from "axios";
import { ICadastroUsuario } from "types/ICadastroUsuario";

function MeuPerfil(){
    const navigate = useNavigate(); 
    const [nomeDoUsuarioLogado, setNomeDoUsuarioLogado] = useState<ICadastroUsuario[]>([]);

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

    function fotoDoPerfil(){
        sweetAlert("em produção...")
    }

    function deslogar(){
        // essa função deve passar o status de logado para deslogado 
        // se der , perguntar se o usuário deseja mesmo sair se sim, deslogar ele da conta
        // se não, continuar logado 
        sweetAlert({
            title: "Você tem certeza?",
            text: "Tem certeza que deseja sair da sua conta?",
            icon: "warning",
            buttons: ["Não!", "Sim"]
          })
          .then((willDelete) => {
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
                           {'< voltar'}
                        </BotaoVoltar>
                        <PerfilImagem 
                            src={perfil} 
                            alt="perfil da pessoa"
                            onClick={fotoDoPerfil} 
                        />
                      
                        <IconeSair 
                            src={Sair}
                            alt="icone de sair"
                            onClick={deslogar}
                    />
                    </CabecalhoMeuPerfil>
                    <h1>Meus Produtos</h1>
                    <ListaDeProdutosIndividual>
                  
                    </ListaDeProdutosIndividual>
                    
                </Perfil>
                <Footer/>
            </>
    )
}

export default MeuPerfil; 
