import {Carregamento} from './styles'; 

export const Carregando = () => {
    return(
        <>
        <Carregamento
            className='loading-overlay centralize'
            data-testid="loading">
            Aguarde...
        </Carregamento>
        </>
     
    )
}

