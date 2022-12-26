import styled from 'styled-components'; 

export const Perfil = styled.div`
    background-color: #E5E5E5;  
    padding-left: 90px;
`
export const CabecalhoMeuPerfil = styled.div`
    background-color: #E5E5E5;
    display: flex; 

    @media(min-width: 900px){
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center; 
        text-align: center;
    }

    @media(max-width: 900px){
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;

        h1{
             padding-right: 60px;
             padding-left: 10px;
        }
    }
  
    padding-top: 40px;
    padding-bottom: 40px;
`

export const PerfilImagem = styled.img`
    border-radius: 50%;
    width: 90px;
   
    @media (min-width: 900px){
        margin-left: 200px;
        margin-right: 90px;
    }

    @media (max-width: 900px){
        margin-right: 100px;
    }

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const IconeSair = styled.img`
    width: 30px;


    @media (min-width: 900px){
        margin-left: 300px;
    }

    @media (max-width: 900px){
        margin-right: 90px;
    }

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
    margin-right: 90px;

    @media (max-width: 900px){
        padding-bottom: 20px;
    }

  

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }   
`

export const ListaDeProdutosIndividual = styled.ul`
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