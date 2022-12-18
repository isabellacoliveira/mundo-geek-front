import styled from 'styled-components'; 

export const BannerTodo = styled.div`
    width: 100%;
`
export const BannerHero = styled.div`
    background-image: url("https://static.unepetitemousse.fr/wp-content/uploads/2022/09/13155137/calendrier-avent-geek-1024x341.jpg");
    
    @media(max-width: 900px){
        padding-bottom: 20px;
        background-size:  100% 100%;
        background-repeat: no-repeat;
        padding-left: 30px;
    }
    @media(min-width: 900px){
        height: 490px;
        background-size: cover;
        padding-left: 190px;
      
    }
`

export const VerConsole = styled.div`
    background: #2A7AE4;
    border: none;
    width: 130px;
    height: 60px;
    
    .BotaoVerConsole {
        border: none;
        outline: none;
        font-family: 'Raleway';
        background: none;
        font-style: normal;
        text-align: center;
        color: #FFFFFF;
        text-decoration: none;
        padding-top: 22px;
        padding-left: 25px;
    }
    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
 `

export const Titulo1 = styled.h1`
    font-weight: bold;
    color: #fff;
    font-family: 'Raleway';
    font-style: normal;
    @media(max-width: 900px){
        padding-top: 80px;
        font-size: 15px;
        width: 50%;
    }
    @media(min-width: 900px){
        padding-top: 220px;
    }
`

export const Titulo2 = styled.h5`
    font-weight: bold;
    color: #fff;
    font-family: 'Raleway';
    font-style: normal;
    @media(max-width: 900px){
        font-size: 10px;
        width: 50%;
    }
    @media(min-width: 900px){
        padding-top: -100px;
    }
`