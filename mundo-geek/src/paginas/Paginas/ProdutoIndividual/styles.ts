import styled from 'styled-components';

export const PostModeloContainer = styled.article` 
    img {
    width: 75%; 
    height: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto; 

    @media (min-width: 900px) {
        display: flex;
        flex-direction: row;
        margin-right: 300px;
        margin-left: 200px; 
    }

    @media (max-width: 900px){
     img {
            width: 100%;
        }
    }
}
`

export const DivDaImagem = styled.div` 
    @media (min-width: 900px) {
       width: 50%;
       padding-top: 100px;
       padding-bottom: 100px;

       img {
            width: 500px;
            margin-left: 200px;
       }
   }

    @media (max-width: 900px) {
       width: 100%;
       img {
            width: 100%;
       }
   }

`

export const ConteudoDoProduto = styled.div` 
    @media (min-width: 900px) {
       flex-direction: column;
       display: flex;
       width: 50%;
       margin-top: 160px;
       margin-bottom: 100px;
   }
`

export const Titulo = styled.h2` 
    font-family: 'Raleway';
    font-style: normal;
    font-size: 3rem;
    display: flex;
    align-items: center;

    @media (max-width: 900px) {
        height: 104px;
        padding: 0 1rem;
        font-size: 2rem;
    }
`

export const Preco = styled.h2`
        font-size: 16px;
        line-height: 19px;
        font-family: 'Raleway';
        font-style: normal;

        @media (max-width: 900px) {
                padding-left: 15px;
        }
`

export const PostConteudoContainer = styled.div` 
    font-family: 'Raleway';
    font-style: normal;
    background: #E5E5E5;

    @media (min-width: 900px) {
        padding-right: 60px;
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 900px) {
        padding: 2rem 1rem 1.5rem;
        display: block;
        flex-direction: column;

    }
`

export const GrupoProdutosSimilares = styled.div` 
    padding-bottom: 100px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: row;

    li {
        list-style: none;
        width: 15%;
    }
`
export const ProdutosSimilares = styled.h2` 
        font-family: var(--fonte-secundaria);
        color: #363031;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        background-color: #E5E5E5;


        @media (min-width: 900px) {
            padding-left: 280px;
        }
 
        @media (max-width: 900px) {
                padding-left: 60px;
        }
`

export const ProdutosRecomendados = styled.ul` 
    li{
    list-style: none;
}
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;

 li:hover {
    transform: translateY(-4px);
    cursor: pointer;
}
`

 export const ContemTudo = styled.div` 
    background-color: #E5E5E5E5;
 `
export const ListaProdutosRecomendados = styled.ul` 
@media (min-width: 900px){
     display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}
       

    li:hover {
    transform: translateY(-4px);
    cursor: pointer;
}
`