import { CadastroDoUsuario, DivSenha, InputGlobal } from "./styles";
import {useState} from 'react'; 
import FaleConosco from "componentes/FaleConosco";
import Footer from "componentes/Rodape";
import { useNavigate } from "react-router-dom";
import { Api } from "services/api";
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import sweetalert from 'sweetalert'; 

export default function Cadastro(){
    const[nomeDoUsuario, setNomeDoUsuario] = useState("");
    const[sobrenome, setSobrenome] = useState("");
    const[email, setEmail] = useState("");
    const[senhaDoUsuario, setSenhaDoUsuario] = useState("");
    const[confirmacaoDaSenhaDoUsuario, setConfirmacaoDaSenhaDoUsuario] = useState("");
    const navigate = useNavigate(); 
    const {usuario} = useAutenticacao(); 

    function cadastraUsuario(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();

        const formData = new FormData();

        formData.append('nome', nomeDoUsuario)
        formData.append('sobrenome', sobrenome)
        formData.append('email', email)
        formData.append('senha', senhaDoUsuario)

        Api.request({
            url:  '/usuarios',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: formData
        })

        .then(() => {
            setNomeDoUsuario('')
            setSobrenome('')
            setEmail('')
            setSenhaDoUsuario('')
            setConfirmacaoDaSenhaDoUsuario('')
            sweetAlert('usuario cadastrado com sucesso!')
            navigate('/login')
        })
        .catch((error) => {
            console.log({data: error}) 
            sweetalert('esse email já existe!')   
            navigate('/login') 
         })
    }

    if (usuario) {
		window.location.pathname = '/home'
	}
    
    return (
        <>
            <CadastroDoUsuario>
                <h1>Cadastrar Usuário</h1>
                <form onSubmit={cadastraUsuario}>
                <label>Nome</label>
                <InputGlobal
                    placeholder="Digite seu nome"
                    type="text"
                    required
                    value={nomeDoUsuario}
                    onChange={evento => setNomeDoUsuario(evento.target.value)}
                />
                <label htmlFor="Nome">Sobrenome</label>
                <InputGlobal
                    placeholder="Digite seu sobrenome"
                    type="text"
                    required
                    id="Nome"
                    value={sobrenome}
                    onChange={evento => setSobrenome(evento.target.value)}
                />
                <label>Email</label>
                <InputGlobal
                    placeholder="Digite seu email"
                    type="text"
                    required
                    value={email}
                    onChange={evento => setEmail(evento.target.value)}
                />

                    <label>Senha</label>
                <DivSenha>
                <InputGlobal
                    placeholder="Escolha uma senha"
                    type="password"
                    required
                    id="senha"
                    value={senhaDoUsuario}
                    onChange={evento => setSenhaDoUsuario(evento.target.value)}

                />
                {confirmacaoDaSenhaDoUsuario.length !== senhaDoUsuario.length ? 
                    <h6>As senhas devem ser iguais</h6> : ''    
                }  
                </DivSenha>
              
                    <label htmlFor="confirmaSenha">Confirmação da senha</label>
                <DivSenha>
                <InputGlobal
                    placeholder="Repita a senha"
                    type="password"
                    required
                    id="confirmaSenha"
                    value={confirmacaoDaSenhaDoUsuario}
                    onChange={evento => setConfirmacaoDaSenhaDoUsuario(evento.target.value)}
                />
                  {confirmacaoDaSenhaDoUsuario.length !== senhaDoUsuario.length ? 
                    <h6>As senhas devem ser iguais</h6> : ''    
                } 
                </DivSenha>
               
                <button 
                    type="submit"
                    disabled={confirmacaoDaSenhaDoUsuario.length !== senhaDoUsuario.length}
                >Cadastrar</button>
                </form>
            </CadastroDoUsuario>
            <FaleConosco />
            <Footer />
        </>
    )
}