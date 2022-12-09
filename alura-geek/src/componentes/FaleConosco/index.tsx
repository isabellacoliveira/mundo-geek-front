import {Logo, LinksPaginas, DivLogoELinks, 
        DivFaleConosco, InputMensagem, InputNome,
        BotaoEnviarMensagem, Formulario, Tudo} from './styles'; 
import {useState} from "react";
import Emailjs from '@emailjs/browser'; 
import LogoAluraGeek from 'assets/Logo.png'; 

const FaleConosco = () => {
    const[nomeDoUsuarioNoFaleConosco, setNomeDoUsuarioNoFaleConosco] = useState('');
    const[mensagem, setMensagem] = useState(''); 

    function mensagemEnviada(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault()
        alert("sua mensagem foi enviada!")
        setNomeDoUsuarioNoFaleConosco(""); 
        setMensagem("");

        const templateParametros = {
            from_name: nomeDoUsuarioNoFaleConosco, 
            message: mensagem
        }
        
        Emailjs.send("service_h5ld8bh", "template_e6tjkb7", templateParametros, "ugKUR3e3BFOJG0avi")
        .then((response: any) => {
            console.log("Email enviado", response.status, response.text)
        }, (err: any) => {
            console.log("Email não enviado.", err)
        })
    }

    return (
        <>
        <Tudo>
        <DivLogoELinks>
        <Logo src={LogoAluraGeek} />
            <LinksPaginas>
                <a>Quem somos nós</a>
                <a>Politica de privacidade</a>
                <a>Progama fidelidade</a>
                <a>Nossas lojas</a>
                <a>Quero ser franqueado</a>
                <a>Anuncie aqui</a>
            </LinksPaginas>
               
    </DivLogoELinks>
    
    <DivFaleConosco>        
                <p id="faleConosco">Fale conosco</p>
                <Formulario 
                    onSubmit={mensagemEnviada}
                    >
                    <InputNome 
                            placeholder="Nome"
                            id="nomeDoUsuario"
                            required
                            value={nomeDoUsuarioNoFaleConosco}
                            onChange={evento => setNomeDoUsuarioNoFaleConosco(evento.target.value)}
                            />
                    <InputMensagem
                             placeholder="Escreva sua mensagem" 
                             id="mensagem"
                             required
                             value={mensagem}
                             onChange={evento => setMensagem(evento.target.value)}
                             />
                    <BotaoEnviarMensagem
                            type="submit"
                            >Enviar mensagem</BotaoEnviarMensagem>
                    
                </Formulario>
                    
            </DivFaleConosco>
        </Tudo>
    
          
        </>
    )
}

export default FaleConosco; 

