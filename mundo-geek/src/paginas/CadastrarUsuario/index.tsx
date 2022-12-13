import { CadastroDoUsuario, InputGlobal } from "./styles";
import {useState} from 'react'; 
import FaleConosco from "componentes/FaleConosco";
import Footer from "componentes/Rodape";
import { ICadastroUsuario } from "types/ICadastroUsuario";
import axios from "axios";

export default function Cadastro(){
    const[nomeDoUsuario, setNomeDoUsuario] = useState("");
    const[sobrenome, setSobrenome] = useState("");
    const[email, setEmail] = useState("");
    const[senhaDoUsuario, setSenhaDoUsuario] = useState("");
    const[confirmacaoDaSenhaDoUsuario, setConfirmacaoDaSenhaDoUsuario] = useState("");
    const[cadastroDoUsuario, setCadastroDoUsuario] = useState<ICadastroUsuario[]>([]); 
  
    function cadastraUsuario(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault()

        if(confirmacaoDaSenhaDoUsuario.length !== senhaDoUsuario.length){
            // evento.target.setCustomValidity('') as HTMLInputElement
            sweetAlert("as senhas devem ser iguais")
        } else {
            // confirmacaoDaSenha.setCustomValidity('as senhas devem ser iguais')
            console.log("senhas iguais")
        }

        const formData = new FormData();

        formData.append('nome', nomeDoUsuario)
        formData.append('sobrenome', sobrenome)
        formData.append('email', email)
        formData.append('senha', senhaDoUsuario)

        axios.request({
            url:  'http://localhost:3001/usuarios',
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
        })
        .catch(erro => sweetAlert(erro))
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
                    placeholder="Digite seu nome"
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
                <InputGlobal
                    placeholder="Escolha uma senha"
                    type="password"
                    required
                    id="senha"
                    value={senhaDoUsuario}
                    onChange={evento => setSenhaDoUsuario(evento.target.value)}

                />

                <label htmlFor="confirmaSenha">Confirmação da senha</label>
                <InputGlobal
                    placeholder="Repita a senha"
                    type="password"
                    required
                    id="confirmaSenha"
                    value={confirmacaoDaSenhaDoUsuario}
                    onChange={evento => setConfirmacaoDaSenhaDoUsuario(evento.target.value)}
                />
               
                <button 
                    type="submit"
                    disabled={nomeDoUsuario.length < 4}
                >Cadastrar</button>
                </form>
            </CadastroDoUsuario>
            <FaleConosco />
            <Footer />
        </>
    )
}