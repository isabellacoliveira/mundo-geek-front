import styled from 'styled-components'; 

export const InputDeBusca = styled.input`
        background: #F5F5F5;
        border-radius: 50px;
        height: 30px;
        padding: 8px 16px;
        gap: 8px;
        outline: none;
        color: #A2A2A2;
        font-family: 'Lembra';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        border: none;
        background-size:  20px 20px;
        background-repeat: no-repeat;
        background-position: right;
        
        ::-webkit-input-placeholder {
            font-family: 'Raleway';
            font-style: normal;
        }
        @media(max-width: 900px){
            width: 200px;
            display: none;
        }
        @media(min-width: 900px){
            width: 500px; 
            margin-right: 300px;
            margin-left: 40px;
        }
        &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const IconePesquisa = styled.img`
    @media (max-width: 900px){
        align-items: left;
        width: 20px;
        height: 20px;
        margin-left: 20px;
    }
    @media (min-width: 900px){
        display: none;
    }
`
export const BarrinhaPequena = styled.input`
     background: #F5F5F5;
        border-radius: 50px;
        height: 30px;
        padding: 8px 16px;
        gap: 8px;
        outline: none;
        color: #A2A2A2;
        font-family: 'Lembra';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        border: none;
        ::-webkit-input-placeholder {
            font-family: 'Raleway';
            font-style: normal;
        }
        @media(max-width: 900px){
            width: 200px;
            margin-bottom: 20px;
            margin-top: 10px;
            margin-left: 20px;
        }
        @media(min-width: 900px){
            display: none;
        }
        &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const BotaoAparece = styled.button`
    border: none;
    background-color: #fff;
    @media (min-width: 900px){
        display: none;
    }
`

export const DivBusca = styled.div`
    background-color: 	#C0C0C0;
    border-radius: 10px;
    position: absolute; 
    overflow: auto;
    margin-top: 30px;
    margin-left: 40px;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;

    li{
        list-style: none;
        width: 100%; 
    }

    @media (min-width: 900px){
        width: 500px;
        height: 200px;
    }

    @media (max-width: 900px){
        margin-top: 60px;
        margin-right: 500px;
        width: 190px;
        height: 200px;

        img{
            width: 100%;
        }
    }
`

export const BotaoFechar = styled.button` 
    background-color: red;
`