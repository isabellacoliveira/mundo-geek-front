import { useState } from 'react';
import {InputDeBusca, IconePesquisa, BarrinhaPequena, BotaoAparece} from './styles'; 
import Lupa from 'assets/lupa.png'; 
import swal from 'sweetalert';
import IProdutos from 'types/IProdutos';
import ICategorias from 'types/ICategorias';

const InputBusca = () => {
    const [ fazAparecer, setFazAparecer ] = useState(true);

    const fazBusca = (e: React.ChangeEvent<HTMLInputElement>) => {
        // swal("insira sua pesquisa e aperte 'enter' para pesquisar")
        const texto = e.target.value; 
        e.preventDefault(); 
        console.log(texto)
    }

    function mostraBarra(){
        setFazAparecer(!fazAparecer)
    }
    
    return (
        <>
            <form onSubmit={() => fazBusca}>
                 {fazAparecer ? <InputDeBusca 
                                placeholder="O que deseja encontrar?"
                                type="search"
                                /> : null}

            <BotaoAparece onClick={mostraBarra}> 
                    <IconePesquisa src={Lupa}/>
                </BotaoAparece>
            {!fazAparecer ? <BarrinhaPequena 
                                    placeholder="O que deseja encontrar?"  
                                    /> : null}
            </form>
           
            
        </>
       
    )
}

export default InputBusca
