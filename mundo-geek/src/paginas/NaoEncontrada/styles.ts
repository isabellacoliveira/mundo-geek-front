import styled from 'styled-components'; 

export const ConteudoContainer = styled.div`
        position: relative;
        text-align: center;
        padding: 0 1.5rem 6.5rem;
        background-color: #E5E5E5;

         
    @media (max-width: 744px) {
        padding-bottom: 30px;
    }
   
`
 
export const Texto404 = styled.span`
    display: block;
    color: var(--azul-medio);
    font-family: var(--fonte-secundaria);
    font-size: 6rem;
    font-weight: 700;
    margin-bottom: 2rem;

    @media (max-width: 744px) {
        font-size: 4rem;
    }
    // @media (max-width: 1100px) {    
//     .texto404 {
//         margin-bottom: 2.25rem;
//     }

`
export const Titulo = styled.h1`
    font-family: var(--fonte-secundaria);
    font-size: 3rem;
    margin-bottom: 2rem;

    @media (max-width: 900px) {
        font-size: 2.25rem;
        line-height: 3rem;
    }
`

export const Paragrafo = styled.p`
    font-size: 1.5rem;
  line-height: 1.75rem;

   @media (max-width: 744px) {
       font-size: 1.1rem;
      line-height: 1.1rem;
      text-align: left;
      padding-left: 20px;
   }

`

export const BotaoContainer = styled.div` 
        text-align: start;
        margin-top: 3.5rem;
        margin-left: 30vw; 

        @media (min-width: 900px){
            button {
                    width: 72px;
                    height: 51px;
                    left: 16px;
                    top: 16px;
            }
        }

        @media (max-width: 900px){
            button{
                    width: 90px;
                    height: 51px;
                    left: 16px;
                    top: 16px;
            }
        }


        button {
            background: #2A7AE4;
            border: none;
            font-family: 'Raleway';
            font-style: normal;
            color: #fff;

            &:hover {
                    transform: translateY(-4px);
                    cursor: pointer;
                }
}

`
 
export const ImagemCogumelo = styled.img` 
        height: 20vw;
        bottom: calc(-25vw * 0.5);
        border-radius: 50%;

         @media (max-width: 900px) { 
            height: 50vw;
            padding-top: 30px;
            /* bottom: calc(-50vw * 0.65); */
            /* left: 40vw; */
         }
`



