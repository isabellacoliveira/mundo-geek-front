import styled from 'styled-components';

export const ListaDeProdutos = styled.ul`
    padding: 0 6vw 3.625rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 50px;
    margin-top: -2.5rem;
    background: #E5E5E5;

    li:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
    li {
        list-style: none;
    }
@media (max-width: 1100px) {
        margin-top: 0;
        padding: 2rem 1.5rem 3.625rem;
}
 
@media (min-width: 744px) {
        padding: 4rem 6rem 3rem 9rem;
}

`

export const BotaoCadastraProduto = styled.div `
    background: #2A7AE4;
    border: none;
    outline: none;
    font-family: 'Raleway';
    font-style: normal;
    text-align: center;
    color: #FFFFFF;
    text-decoration: none;

    &:hover {
    transform: translateY(-4px);
    cursor: pointer;
}
    @media(max-width: 900px){
        margin: 20px 20px;
        height: 80px;
        padding: 30px 20px 20px 20px;
    }

    @media(min-width: 900px){
        padding-top: 30px;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 30px;
    }
`
export const Produtos = styled.div` 
     flex-direction: row;
     display: flex;
     background-color: #E5E5E5;

     .textoBotao{
        text-decoration: none;
     }

    @media (max-width: 900px){
        h1{
            font-size: 20px;
        }
    }

    @media (min-width: 900px){
        gap: 54rem;
        padding-top: 30px;
        margin-bottom: 30px;   
        
        h1{
            padding-left: 100px;
        }
    }

`

export const Titulo = styled.h1` 
        font-family: 'Raleway';
        font-style: normal;
        color: #464646; 

        @media (max-width: 900px){
            padding-left: 30px;
            padding-right: 30px;
            margin-top: 30px;
        }

        @media (min-width: 900px){
            margin-left: 100px;
        }
`





