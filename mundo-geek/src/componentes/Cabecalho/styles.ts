import styled from 'styled-components'; 

export const Cabecalho = styled.nav`
    text-align: center;
    justify-content: space-between;
    flex-direction: row;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    width: 100%;
    background-color: #fff;

    @media (max-width: 900px) {
        align-items: center;
        justify-content: center;
        display: flex;
    }
    @media (min-width: 900px) {
        padding-top: 25px;

    }
`
export const Logo = styled.img`
    @media(max-width: 900px){
       text-align: center;
       width: 100px;
       margin-right: 10px;
    }
    @media(min-width: 900px){
        margin-left: 100px;
        width: 200px;
       
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
        flex-direction: column;
        display: flex;
        padding-top: 20px;
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
    background-color: #E5E5E5;
    position: absolute;
    border-radius: 10px;

    @media (max-width: 900px){
          margin-top: 50px;
          margin-right: 600px;
          width: 200px;
          height: 430px;
    }
    @media (min-width: 900px){
          margin-top: 50px;
          width: 310px;
          height: 400px;
    }

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

