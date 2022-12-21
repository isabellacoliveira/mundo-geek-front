
import styled from 'styled-components'; 


export const PerfilUsuario = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    h2 {
        padding-left: 10px;
    }
`

export const DivCarrinhoPerfil = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 10px;

    h1{
        padding-left: 10px;
    }
`

export const NomePreco = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #D3D3D3;
    border-radius: 8px;
`

export const Sacola = styled.img`
    width: 20px;
    height: 20px;
    margin-bottom: 10px;
`

export const RemoveItem = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 2px;
`
export const ItensParaComprar = styled.div`
    overflow: auto;


    @media (max-width: 900px){
        li{
            width: 140px;
            height: 270px;
        }
    }
    @media (min-width: 900px){
        li{
            width: 270px;
            height: 280px;
        }
    }
    
`

export const FuncoesCarrinho = styled.div`
    flex-direction: column;
    display: flex;
    width: 20%;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;

    img:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const InformacoesProduto = styled.div`
   width: 80%;
   padding-left: 5px;
`

export const CarrinhoDiv = styled.div`
    margin-top: 50px;
    width: 500px;
    height: 400px;
    background-color: #E5E5E5;
    position: absolute;
    border-radius: 10px;

    li {
        list-style: none;
        margin-bottom: 10px;
    }

    h3{
        display: flex;
        flex-direction: row;
    }

    h1{
        font-weight: bold;
    }
`
export const Quantidade = styled.div` 
    display: flex;
    flex-direction: column;
`
export const DivCarrinho = styled.div` 
    background-color: #E5E5E5;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    padding-bottom: 10px;
    border-radius: 20px;
    margin-top: 10px;
    
    @media (max-width: 900px){
        display: flex;
        flex-direction: column;
        width: 200px; 
        height: 300px;
        padding-top: 20px;

        img {
            width: 90px;
            height: 90px;
        }
    }
    
    @media (min-width: 900px){
        display: flex;
    flex-direction: row;
        width: 900px;
        height: 250px;
        img {
            width: 190px;
            height: 190px;
        }
    }

`

export const ImagemDoProdutoDoCarrinho = styled.div`
    margin: auto;
`