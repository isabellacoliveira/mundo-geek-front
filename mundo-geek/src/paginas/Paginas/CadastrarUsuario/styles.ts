import styled from 'styled-components'; 

export const CadastroDoUsuario = styled.div`
    width: 100%;
    height: 800px;
    padding-top: 30px;
    background-color: #E5E5E5;

    button{
        color: #FFFFFF;
        border: none;
        background: #2A7AE4;
        height: 50px;
        font-family: 'Raleway';
        font-style: normal;

        &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
    }

    @media (min-width: 900px){
       button {
            width: 420px;
            margin-top: 30px;
       }
    }
    @media (max-width: 900px){
        button {
            width: 100px;
            margin-top: 20px;
        }
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        text-align: center;
    }
    label {
        padding-top: 10px;
    }
`

export const InputGlobal = styled.input`
	@media (min-width: 900px) {
			height: 50px;
			width: 420px;
	}
	@media (max-width: 900px) {
			height: 50px;
			width: 50%;
		}
	
		background: #ffffff;
		border: none;
		display: block;
		padding-left: 5px;
		outline: none;
		box-shadow: 0px 2px #c8c8c8;
		margin-top: 20px;
		padding-bottom: 20px;
		box-sizing: border-box;
		border-radius: 4px 4px 0px 0px;
		padding-top: 20px;	
        margin-top: 10px;
	::-webkit-input-placeholder {
            font-family: 'Raleway';
            font-style: normal;
			color: #c8c8c8;
	}
   
`

export const DivSenha = styled.div` 
    h6{
        font-size: 10px;
        color: #FF6347	; 
    }
`
