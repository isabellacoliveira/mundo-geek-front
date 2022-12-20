import { message } from "antd";
import { Carregando } from "componentes/Carregando";
import FaleConosco from "componentes/FaleConosco";
import Footer from "componentes/Rodape";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { http } from "services/api";
import { CadastroInicioSessao } from "./styles";

export default function LoginUsuario(){
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const[carregando, setCarregando] = useState(false); 
    const { login, usuario } = useAutenticacao()

    const navigate = useNavigate();

    async function aoFinalizar(email: string, senha: string, 
        evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault(); 

        setCarregando(true)
        try {
            await login(email, senha)
            await http.pegaToken()
            navigate('/perfil')
        } catch (error) {
            message.error('Email ou senha inválidos')
        } finally {
            setCarregando(false)
        }
    }

    if(carregando) return <Carregando />

    if (usuario) {
		window.location.pathname = '/home'
	}

    return(
        <>      
            <CadastroInicioSessao>
            <p>Iniciar Sessão</p>
            <form 
                onSubmit={(e) => aoFinalizar(email, senha, e)}
                >
                <label>Email</label>
                <input 
                    placeholder='escreva seu email'
                    type="text"
                    required    
                    id="emailDoUsuario"
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label>Senha</label>
                <input 
                    placeholder='escreva sua senha'
                    required
                    type="password"
                    id = "senhaDoUsuario"
                    onChange={(e) => setSenha(e.target.value)}
                ></input>
                <div className='cadastro'>
                    <button 
                        className='tituloCadastrar'
                        type="submit"
                    >Entrar</button>
                </div>
            </form>
           
           <div className='cadastroDoUsuario'>
                <p>Não possui cadastro?</p>
                <div className="cadastre">
                    <Link to='/cadastro/usuario' className="cadastreSe">Cadastre-se</Link>
                </div>
           </div>
        </CadastroInicioSessao>      
            <FaleConosco/>
            <Footer />
        </>
       
    )
}