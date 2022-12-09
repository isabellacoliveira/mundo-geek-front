import styled from 'styled-components';  

export const Logo = styled.img`
   
    font-family: 'Raleway';
    font-style: normal;
   
    @media (min-width: 900px) {
        width: 100px;
        height: 40px;
        margin-right: 100px;
        margin-top: 30px;
    }
    @media (max-width: 900px) {
        width: 50%;
        padding-top: 10px;
    }
`

export const LinksPaginas = styled.div`
    background-color: white;
    flex-direction: column;
    display: flex;
    background: transparent;   
    a {
        padding-top: 10px;
        text-decoration: none;
        color: #464646;
        &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
    }
`

export const DivLogoELinks = styled.div`
    text-align: left;
    background-color: #EAF2FD;
    @media(max-width: 900px) {
        display: block;
        flex-direction: row;
        text-align: center;
        width: 100%;
        align-items: center;
        padding-bottom: 20px;
    }
    @media(min-width: 900px){
        width: 50%; 
        display: flex;
        padding-top: 50px;
    }
`

export const DivFaleConosco = styled.div`
    height: 300px;
    background: #EAF2FD;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    @media (max-width: 900px){
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 350px;
    }
    @media (min-width: 900px){
        width: 50%;
    }
    
`
export const InputMensagem = styled.textarea`
        background: #FFFFFF;
        border-radius: none;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        outline: none;
        box-shadow: 0px 2px #C8C8C8;
        margin-right: 10px;
        padding-left: 20px;
        padding-top: 20px;
        box-sizing: border-box;
        border-radius: 4px 4px 0px 0px;
        margin-top: 20px;
        height: 90px;
        @media (max-width: 900px) {
            width: 300px;
        }
        @media (min-width: 900px) {
            width: 410px;
        }
`

export const InputNome = styled.input`
        background: #FFFFFF;
        border-radius: none;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        outline: none;
        box-shadow: 0px 2px #C8C8C8;
        margin-right: 10px;
        padding-left: 20px;
        box-sizing: border-box;
        border-radius: 4px 4px 0px 0px ;
        height: 50px;
    @media (max-width: 900px){
        width: 300px;
    }
    @media (min-width: 900px){
        width: 410px; 
    }
`
export const BotaoEnviarMensagem = styled.button`
    background: #2A7AE4;
    border: none;
    outline: none;
    font-family: 'Raleway';
    font-style: normal;
    text-align: center;
    color: #FFFFFF;
    margin-top: 10px;
    width: 150px;
    padding: 15px 15px 15px 15px;
    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
    @media (max-width: 900px){
        height: 50px;
    }
`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
`

export const Tudo = styled.div`
background-color: #EAF2FD;
    @media (max-width: 900px){
        display: block;
        flex-direction: column;
    }
    @media (min-width: 900px){
        display: flex;
        flex-direction: row;
        padding: 50px 50px 50px 200px;
    }
`