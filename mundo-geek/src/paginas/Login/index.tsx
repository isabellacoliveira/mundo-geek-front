import { message } from "antd";
import FaleConosco from "componentes/FaleConosco";
import Footer from "componentes/Rodape";
import { useAutenticacao } from "contextos/AutenticacaoProvider/useAutenticacao";
import { Link, useNavigate } from "react-router-dom";
import { CadastroInicioSessao } from "./styles";
// import {useState, useContext} from 'react';
// import { CriaUsuarioContext } from "contextos/Autenticacao"; 
// import ILogin from "types/ILogin";

export default function LoginUsuario(){
    const autenticacao = useAutenticacao()
    const navigate = useNavigate();

    async function aoFinalizar(values:{email: string, senha: string}){
        // e.preventDefault(); 
        try {
            await autenticacao.autenticado(values.email, values.senha)
            navigate('/perfil')
        } catch (error) {
            message.error('Email ou senha inválidos')
        }
        
    }

    return(
        <>      
            <CadastroInicioSessao>
            <p>Iniciar Sessão</p>
            <form 
                // onSubmit={aoFinalizar}
                >
                <label>Email</label>
                <input 
                    placeholder='escreva seu email'
                    type="text"
                    required    
                    id="emailDoUsuario"
                ></input>
                <label>Senha</label>
                <input 
                    placeholder='escreva sua senha'
                    required
                    type="password"
                    id = "senhaDoUsuario"
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