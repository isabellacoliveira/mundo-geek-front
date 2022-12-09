import styled from 'styled-components'; 

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-top: 200px;

	@media(min-width: 900px){
		img{
			width: 300px;
		}
	}
`

export const Progresso = styled.div`
	position: relative;
	overflow: hidden;
	width: 350px;
	height: 35px;
	border-radius: 5px;
`
export const PorcentagemProgresso = styled.span`
	font-weight: 600;
	font-family:'Franklin Gothic Medium';
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	color: #fff;
	text-shadow: -1px 0 #555, 0 1px #555, 1px 0 #555, 0 -1px #555;
`

export const BotaoComecar = styled.button`
	display: block;
	border: none;
	border-radius: 3px;     
	outline: none;
	width: 100px;
	height: 40px;
	background-color: #2A7AE4;
	transition: box-shadow 0.5s;
	font-size: 16px;
	font-family: 'Raleway';
  	font-style: normal;
	color: #fff;
	cursor: pointer;
	margin-top: 20px;

	&:hover{
		-webkit-box-shadow: inset 100px 0 0 0 #2A7AE4;
    	box-shadow: inset 100px 0 0 0 #2A7AE4;
		transform: translateY(-4px);
        cursor: pointer;
	}
`

// .BotaoComecar{
//     background: #2A7AE4;
//     text-decoration: none;
//     width: 500px;
//     height: 40px;
//     border-radius: 8px;
//     color: #fff;
//     padding-top: 20px;
//     margin-top: 30px;
// }

// .Comecar{
//     background-color: #fff;
//     text-align: center;
//     justify-content: center;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     padding-top: 190px;
//     padding-bottom: 360px;
    
// }






