import styled from 'styled-components'; 

export const Perfil = styled.div`
    background-color: #E5E5E5;
`
export const CabecalhoMeuPerfil = styled.div`
    background-color: #E5E5E5;
    display: flex; 

    @media(min-width: 900px){
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center; // mexer aqui
        text-align: center;
    }

    @media(max-width: 900px){
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }
  
    padding-top: 40px;
    padding-bottom: 40px;
`

export const PerfilImagem = styled.img`
    border-radius: 50%;
    width: 90px;

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const IconeSair = styled.img`
    width: 30px;

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const BotaoVoltar = styled.button`
    border: none;
    color: #2A7AE4; 
    font-weight: bold;
    background-color: #E5E5E5;
    font-size: 20px;

    @media (max-width: 900px){
        padding-bottom: 20px;
    }

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }   
`
