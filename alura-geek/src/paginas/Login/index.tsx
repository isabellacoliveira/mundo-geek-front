import FaleConosco from "componentes/FaleConosco";
import Footer from "componentes/Rodape";
import { Link } from "react-router-dom";
import { CadastroInicioSessao } from "./styles";

export default function LoginUsuario(){
    
    return(
        <>      
            <CadastroInicioSessao>
            <p>Iniciar Sessão</p>
            <form>
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