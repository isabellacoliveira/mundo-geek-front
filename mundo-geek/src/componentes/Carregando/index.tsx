import { BarLoader } from 'react-spinners';
import {Carregamento} from './styles'; 

export const Carregando = () => {
    return(
        <>
        <Carregamento
            className='loading-overlay centralize'
            data-testid="loading">
            <BarLoader 
                style={{
                    width: "900px", 
                    height: "90px"
                }}
            />
        </Carregamento>
        </>
     
    )
}

