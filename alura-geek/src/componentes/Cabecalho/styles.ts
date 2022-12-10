import styled from 'styled-components'; 

export const Cabecalho = styled.nav`
    text-align: center;
    justify-content: space-between;
    flex-direction: row;
    display: flex;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 20px;
    width: 100%;
    background-color: #fff;

    @media (max-width: 900px) {
        align-items: center;
        justify-content: center;
        display: flex;
    }
`
export const Logo = styled.img`
    @media(max-width: 900px){
       text-align: center;
       width: 50%;
       margin-right: 10px;
    }
    @media(min-width: 900px){
        margin-left: 100px;
       
    }
    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const Carrinho = styled.img`
    width: 40px; 
    height: 40px;
    opacity: 0.5;
    margin-right: 10px;

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const TrocaLado = styled.div`
    @media (max-width: 900px){
        flex-direction: row-reverse;
        display: flex;
    }

    @media(min-width: 900px){
        flex-direction: row;
        display: flex;
    }
`
export const Perfil = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 20px;

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const LoginCarrinhoPerfil = styled.div`
    @media(min-width: 900px){
        margin-right: 100px;
    }
`
export const CarrinhoDiv = styled.div`
    margin-top: 50px;
    width: 310px;
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

export const PerfilUsuario = styled.div`
    display: flex;
    flex-direction: row;
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
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
`

export const RemoveItem = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 2px;
`
export const ItensParaComprar = styled.div`
    overflow: auto;
    width: 270px;
    height: 280px;
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

