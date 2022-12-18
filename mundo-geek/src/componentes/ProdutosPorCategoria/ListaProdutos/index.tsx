import { token } from 'config/config';
import { Api } from 'services/api';
import {useState, useEffect} from 'react'; 
import ICategorias from 'types/ICategorias';
import Categoria from '../Categorias';

const ListaCategorias = () => {
    const[categorias, setCategorias] = useState<ICategorias[]>([]);
    
    let config = {
        headers: {
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6InVzdWFyaW8gYWRtaW4iLCJzb2JyZW5vbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3MTI4MjI2MCwiZXhwIjoxNjcxNjI3ODYwfQ.cfcxl5sbly7scDPUvRglDNR4NvxXT-RPcEKYhFd5Q4Q'
        }
      }

    // forma dinamica 
    // let config = {
    //     headers: {
    //       'Authorization': 'Bearer ' + token
    //     }
    //   }

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