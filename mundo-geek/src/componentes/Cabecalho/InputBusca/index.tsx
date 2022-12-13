import { useState } from 'react';
import {InputDeBusca, IconePesquisa, BarrinhaPequena, BotaoAparece} from './styles'; 
import Lupa from 'assets/lupa.png'; 

const InputBusca = () => {
    function fazBusca(){
        sweetAlert("insira sua pesquisa e aperte 'enter' para pesquisar")
    }
    const [ fazAparecer, setFazAparecer ] = useState(true);
    
    function mostraBarra(){
        setFazAparecer(!fazAparecer)
    }
    
    return (
        <>
            {fazAparecer ? <InputDeBusca placeholder="O que deseja encontrar?" onClick={fazBusca}/> : null}

            <BotaoAparece onClick={mostraBarra}> 
                    <IconePesquisa src={Lupa}/>
                </BotaoAparece>
            {!fazAparecer ? <BarrinhaPequena placeholder="O que deseja encontrar?"  onClick={fazBusca}/> : null}
            
        </>
       
    )
}

export default InputBusca
