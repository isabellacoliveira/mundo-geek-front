import { Api } from 'contextos/AutenticacaoProvider/services/api';
import {useState, useEffect} from 'react'; 
import ICategorias from 'types/ICategorias';
import Categoria from '../Categorias';

const ListaCategorias = () => {
    const[categorias, setCategorias] = useState<ICategorias[]>([]);
    
    let config = {
        headers: {
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibm9tZSI6ImNsZWFuZSBldmVsaW4iLCJzb2JyZW5vbWUiOiJiYXRpc3RhIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjcxMTI0MjY0LCJleHAiOjE2NzE0Njk4NjR9.QQn0Q9_3Og7vhsTdfy1k_hzU9bi3JYy85LzgIU1peUo'
        }
      }

    useEffect(() => {
        Api.get<ICategorias[]>('/categorias', config)
    .then(resposta => {
        setCategorias(resposta.data)
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