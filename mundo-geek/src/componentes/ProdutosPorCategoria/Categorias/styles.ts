import styled from 'styled-components'; 

export const ListaDeProdutos = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #E5E5E5;

    
    li {
    list-style: none;
    padding-right: 8px;
    padding-top: 10px;
    
    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
 }

@media (max-width: 900px) {
        margin: 0 ;
        padding: 2rem 1rem 3rem;
}
 
@media (min-width: 900px) {
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
}
`

export const Titulos = styled.h1`
        width: 50%;
        @media (min-width: 900px) {
            padding-left: 220px;
            padding-top: 20px;
        }
        @media (max-width: 900px) {
            padding-left: 20px;
            font-size: 20px;
        }
`
export const Cima = styled.div`
            background-color: #E5E5E5;
            display: flex;
            flex-direction: row;

        .BotaoVerTudo{
            color: #2A7AE4;
            border: none;
            text-decoration: none;
            font-weight: bold;
            font-family: 'Raleway';
            font-style: normal;
            width: 100%;
            
            @media (max-width: 900px){
                font-size: 15px;
                padding-bottom: 10px;
                margin-bottom: 10px;
            }

            &:hover {
                transform: translateY(-4px);
                cursor: pointer;
    }
            @media (min-width: 900px) {
                padding-left: 900px;
                padding-top: 50px;
            }
            @media (max-width: 900px) {
                padding-left: 200px;
                padding-top: 30px;
                padding-right: 5px;
            }
        }
        .BotaoVerTudo img {
            margin-left: 10px;
            }
`

export const BotaoVerProduto = styled.button` 
    color: #2A7AE4;
    border: none;
    text-decoration: none;
    font-weight: bold;
    font-family: 'Raleway';
    font-style: normal;
    background-color: #A9A9A9;
    border-radius: 0px 0px 10px 10px;
    padding-bottom: 10px;
    padding-left: 10px;

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const LinkParaOutraPagina = styled.div `
    text-decoration: none;
`

export const NomeDoProduto = styled.h1` 
    font-size: 20px;
`
export const PrecoDoProduto = styled.h2` 
    font-size: 18px;
`

export const DivImgBotao = styled.div` 
    display: flex;
    flex-direction: row;
`

export const DivPrecoEditar = styled.div` 
    display: flex;
    flex-direction: row;
`

export const ImagemMais = styled.img` 
    width: 20px; 
    height: 20px;
    opacity: 0.5;
    margin-left: 100px;
    margin-top: 10px;

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const ImagemLapis = styled.div` 
    width: 50%; 
    padding-left: 70px;
`
export const CardDoProduto = styled.div`
    flex-direction: row;
    background-color: #E5E5E5;
    margin: 0 auto;
    background-color: #A9A9A9;
    border-radius: 10px 10px 10px 10px;
    padding: 10px;
    margin-bottom: 20px;

    @media (max-width: 900px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 8px;
    }

    img{
        border-radius: 8px;
    }

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const DivBotao = styled.div`  
    background-color: red;
    width: 100%;
`
