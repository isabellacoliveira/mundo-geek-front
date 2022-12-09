import { CadastroDoUsuario, InputGlobal } from "./styles";
import {useState} from 'react'; 
import FaleConosco from "componentes/FaleConosco";
import Footer from "componentes/Rodape";
import { ICadastroUsuario } from "types/ICadastroUsuario";

export default function Cadastro(){
    const[usuario, setUsuario] = useState<ICadastroUsuario[]>([]); 

    function cadastraUsuario(){
        alert("sucesso")
        // const senha = document.querySelector('#senha');
        // const confirmacaoDaSenha = document.querySelector('#confirmaSenha');

        // if(confirmacaoDaSenha.value === senha.value){
        //     confirmacaoDaSenha.setCustomValidity('')
        // } else {
        //     confirmacaoDaSenha.setCustomValidity('as senhas devem ser iguais')
        // }
    }

    return (
        <>
            <CadastroDoUsuario onSubmit={cadastraUsuario}>
                <h1>Cadastrar Usuário</h1>
                <form>
                <label>Nome</label>
                <InputGlobal
                    placeholder="Digite seu nome"
                    type="text"
                    required
                    // value={usuario.nome}
                    // onChange={valorDoInput}
                />
                <label>Email</label>
                <InputGlobal
                    placeholder="Digite seu email"
                    type="text"
                    required
                    // value={usuario.email}
                    // onChange={valorDoInput}

                />
                <label>Senha</label>
                <InputGlobal
                    placeholder="Escolha uma senha"
                    type="password"
                    required
                    id="senha"
                    // onChange={confereSenha}
                    // value={usuario.senha}
                    // onChange={valorDoInput}

                />
                <label>Confirmação da senha</label>
                <InputGlobal
                    placeholder="Repita a senha"
                    type="password"
                    required
                    id="confirmaSenha"
                    // onChange={confereSenha}
                    // value={usuario.confirmacaoDaSenha}
                    // onChange={valorDoInput}

                />
               
                <button 
                    type="submit"
                >Cadastrar</button>
                </form>
            </CadastroDoUsuario>
            <FaleConosco />
            <Footer />
        </>
    )
}