import styled from 'styled-components'; 

export const CabecalhoCarrinho = styled.div` 
    button{
        margin-left: 10px;
      
        border: none;
        border-radius: 10px;
        background-color: 	#FA8072;
        color: #fff;

         &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
    }

    @media (max-width: 900px){
         display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 20px;

    button {
            width: 200px;
             height: 50px;
        }
    }
    @media (min-width: 900px){
         display: flex;
    flex-direction: row;
    text-align: center;

        button {
            width: 400px;
        height: 50px;
        }
    }
   
    justify-content: center;
    align-items: center;
`

export const FinalizarTudo = styled.div` 
  
    justify-content: center;
    align-items: center;

    button{
        margin-left: 20px;
        border-radius: 10px;
        border: none;
        background-color: #6495ED;
        color: #fff;

         &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
    }

    @media (max-width: 900px){
         display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;

    button{
        width: 200px;
        height: 60px;
    }
    }

    @media (min-width: 900px){
        display: flex;
    flex-direction: row;

    button{
        width: 400px;
        height: 50px;
    }


    }
`

export const ContemTudo = styled.div` 
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
`

export const ProdutosAdicionadosAoCarrinho = styled.div` 
    background-color: #D3D3D3;
    overflow: auto;
    height: 500px;
  


    @media (max-width: 900px){
        margin: auto;
        section{
            height: 280px;
            width: 100%;
            margin-top: 10px;
       
        }
    }

    @media (min-width: 900px){

        section{
            height: 280px;
            width: 100%;
            margin-top: 10px;
        }
    }

`

export const InformacoesDoProduto = styled.div` 
    width: 50%;

    @media (max-width: 900px){
        font-size: 10px;
        padding-left: 10px;
    }
`

export const BotoesCarrinho = styled.div` 
    display: flex;
    flex-direction: row;


    button{
        border: none;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        font-size: 40px;
        background-color: #6495ED;
        border-radius: 10px;
        color: #fff;

         &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
    }

    @media (max-width: 900px){
        justify-content: center;
        align-items: center;
        button {
            width: 500px;
            height: 60px;
        }
    }

    @media (min-width: 900px){
        button {
            width: 80px;
        height: 70px;
        }
    }
`
export const BotaoRemoverItem = styled.div` 
    button {
        background-color: 	#FA8072;
        border: none;
        border-radius: 10px;
        color: #fff;

         &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
    }

    @media (max-width: 900px){
        button{
            width: 180px;
            height: 30px;
        }
    }

    @media (min-width: 900px){
        button{
            width: 190px;
            height: 30px;
        }
    }

`