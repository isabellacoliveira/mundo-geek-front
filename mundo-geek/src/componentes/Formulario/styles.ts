import styled from 'styled-components'; 

export const CadastroNovoProduto = styled.form`
	background: #e5e5e5;
	text-align: left;
	height: 600px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: 700;
	font-size: 32px;
	line-height: 38px;
	option {
			font-family: 'Raleway';
            font-style: normal;
			color: #A2A2A2;
	}
	@media (min-width: 900px) {
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
	}
	@media (max-width: 900px) {
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