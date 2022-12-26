import styled from 'styled-components'; 

export const CadastroInicioSessao = styled.div`
background: #E5E5E5;
text-align: center;
padding-top: 100px;
padding-bottom: 100px;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Raleway';
font-style: normal;
font-weight: bold;

    @media(min-width: 900px){
        height: 600px;
    }

    @media(max-width: 900px){
        height: 650px;
    }


    @media(max-width: 900px){
        .cadastroDoUsuario{
                display: flex;
                flex-direction: column;
        }
    }

    @media(min-width: 900px){
        .cadastroDoUsuario{
                display: flex;
                flex-direction: row;
        }
    }


input{
    background: #FFFFFF;
    border: none;
    font-family: 'Raleway';
    font-style: normal;
    display: block;
    padding-left: 5px;
    outline: none;
    box-shadow: 0px 2px #C8C8C8;
    margin-top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    border-radius: 4px 4px 0px 0px ;
    padding-top: 20px;
    margin-bottom: 20px;

    @media(min-width: 900px){
        width: 420px;
    }

    @media(max-width: 900px){
        width: 300px;
    }
    
}

@media (min-width: 900px){
   button {
        width: 420px;
        margin-right: 20px;
        margin-bottom: 10px;
   }
}
@media (max-width: 900px){
    button {
        width: 100px;
        margin-right: 20px;
        margin-bottom: 20px;
    }
}

button{
    color: #FFFFFF;
    border: none;
    background: #2A7AE4;
    height: 10px;
}

.cadastro {
    background: #2A7AE4;

    @media (min-width: 900px){
        .cadastro {
            height: 30px;
            width: 420px;
        }
    }

    @media (max-width: 900px){
        .cadastro {
                height: 30px;
                width: 200px;
            }
        }

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
}

.cadastre {
    background: #2A7AE4;
    height: 30px;
    margin-left: 10px;

    @media (max-width: 900px){
        width: 300px
    }

    @media (min-width: 900px){
        width: 250px;

    }
    
    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
    
}
 div {
    padding-top: 10px;
 }

.tituloCadastrar{
    text-decoration: none;
    font-weight: normal;
    color: #FFFFFF;

    @media (max-width: 900px) {
        width: 20px;
        height: 10px;
    }

    @media (min-width: 900px) {
        width: 20px;
        height: 30px;
    }
}

`

export const CadastreSe = styled.div` 
    display: flex;
    flex-direction: row;
    

`

export const BotaoCadastreSe = styled.div` 
    background-color: #E5E5E5;
    @media (max-width: 900px){
           padding-left: 40px;
         margin-top: 7px;
    }

    @media (min-width: 900px){
           padding-left: 90px;
    margin-top: 7px;
    }

 
`
