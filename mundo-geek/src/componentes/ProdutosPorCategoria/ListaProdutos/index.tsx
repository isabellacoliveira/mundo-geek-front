import { config } from 'config/config';
import { Api } from 'services/api';
import {useState, useEffect} from 'react'; 
import ICategorias from 'types/ICategorias';
import Categoria from '../Categorias';

const ListaCategorias = () => {
    const[categorias, setCategorias] = useState<ICategorias[]>([]);
    
    useEffect(() => {
        Api.get<ICategorias[]>('/categorias', config)
    .then(resposta => {
        setCategorias(resposta.data)
        console.log(resposta.data)
    })
    .catch(erro => {
        console.log(erro)
    })
    }, [])

    return(
        <section>
                {categorias?.map(item => <Categoria categoria={item} key={item.id}/>)}
            </section>
            
    )
}
    
export default ListaCategorias