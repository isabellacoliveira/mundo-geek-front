import styled from 'styled-components'; 

export const CabecalhoAdm = styled.nav`
    background-color: #6495ED;
  

	@media (min-width: 900px){
		width: 100%;
    	height: 70px;
	}

	@media (max-width: 900px){
		button{
			font-size: 10px;
		}
	}
    
    button{
        border: none;
        font-size: 30px;
        background-color: #6495ED;
        opacity: 0.5;

        &:hover {
        transform: translateY(-4px);
        cursor: pointer;
        }
    }
   
`

export const Logo = styled.img`
    padding-right: 10px;
    padding-top: 20px;

    @media(max-width: 900px){
       text-align: center;
       width: 30px;
       margin-right: 10px;
       margin-left: 10px;
    }

    @media(min-width: 900px){
        margin-left: 100px;
        width: 50px;
        height: 50px;
       
    }
    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const CadastroNovoProduto = styled.form`
	background: #e5e5e5;
	text-align: left;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: 700;
	font-size: 32px;
	line-height: 38px;

    .editaNova{
        margin-top: 200px;
    }

	option {
			font-family: 'Raleway';
            font-style: normal;
			color: #A2A2A2;
	}
	@media (min-width: 900px) {
		height: 660px;
		input {
			height: 50px;
			width: 420px;
		}
		button {
			width: 420px;
			height: 60px;
		}
		select {
			width: 420px;
		}
        img{
            width: 30px;
        }
        div{
            display: flex;
            flex-direction: row;
        }
	}
	@media (max-width: 900px) {
		height: 900px;
		input {
			height: 50px;
			width: 50%;
			margin-top: 100px;
		}
		button {
			width: 200px;
			height: 70px;
			margin-top: 20px;
		}
		select {
			width: 230px;
		}
	}

	input, select {
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
		
	}
	button {
		color: #ffffff;
		border: none;
		background: #2a7ae4;
		margin-top: 20px;
		font-family: 'Raleway';
            font-style: normal;
		&:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
}
`

export const InputsDaPagina = styled.input`
	::-webkit-input-placeholder {
            font-family: 'Raleway';
            font-style: normal;
			color: #A2A2A2;
	}
`

export const InputCategoria = styled.textarea` 
	background: #ffffff;
	border: none;
	box-sizing: border-box;
	border-radius: 4px 4px 0px 0px;
	outline: none;
`

export const Categorias = styled.div` 
	@media (min-width: 900px){
		display: flex;
		flex-direction: row;
	}

	@media (max-width: 900px){
		display: flex;
		flex-direction: column;
	}

	select {
		width: 100%;
		margin-left: 10px;
	}

	li{
		list-style: none;
	}

	div{
        width: 420px;
    }
`
export const RemoverCategoria = styled.div` 
	height: 300px;
	width: 400px;
	font-size: 10px;
	color: #000;
	position: absolute;
	display: flex;
	flex-direction: row;
	border-radius: 8px;
	padding: 10px 10px 10px 10px;

	img{
		width: 20px;
		height: 20px;
		margin-top: 20px;
		margin-left: 10px;

		&:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
	}
    div{
        display: flex;
        flex-direction: colu;
    }

`
export const Delete = styled.div` 
	font-size: 10px;
	height: 80px;
	width: 100%;
	
`

export const DivDeleta = styled.div` 
	height: 80px;

	div{
		width: 90px;
		padding-right: 20px;
	}
`
export const Botoes = styled.div`
	
    button{
        width: 33.33%;
        background-color: #4169E1;
        border: none;
        height: 40px;
    }

    
`
export const AdicionarCategoria = styled.div`
	margin-bottom: 90px;
	text-align: center;

	

	@media (min-width: 900px){
		button{
		width: 420px;
	}
	}

	@media (max-width: 900px){
		button{
		width: 100px;
		}
		input{
			width: 290px;
		}
	}

	div{
		display: block;
		flex-direction: column;
	}
`


