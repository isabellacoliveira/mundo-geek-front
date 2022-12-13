import { CadastroNovoProduto, InputsDaPagina } from './styles'; 
import {useEffect, useState} from 'react'; 
import axios from 'axios';
import ICategorias from 'types/ICategorias';

const Formulario = () => {
    const[novoProdutoAdicionado, setNovoProdutoAdicionado] = useState<ICategorias[]>([]); 

    let config = {
        headers: {
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkEiLCJpYXQiOjE2NzA4NjcyNDUsImV4cCI6MTY3MTIxMjg0NX0.Z5PvZfatWUujT0ElVUl6h2WnYNn5prqC_aTSiNvYp4s'
        }
      }
    
      useEffect(() => {
        axios.get<ICategorias[]>('http://localhost:3001/usuarios', config)
        .then(resposta => {
            setNovoProdutoAdicionado(resposta.data)
        })
        .catch(erro => {
            console.log(erro)
        })
    },[])

    return (
        <CadastroNovoProduto>
        <p>Adicionar novo produto</p>
        <InputsDaPagina
            placeholder="Insira a URL da imagem"
            required
            type="text"
        />
        {/* <select placeholder="Categorias" 
                required={true}
        >
            <option key='default' value=''>Selecione uma categoria</option>
            {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
            ))} 
         </select> */}
        <select>
        {novoProdutoAdicionado.map(categoria => <option key={categoria.titulo}>{categoria.titulo}</option>)}
        </select>
       
        <InputsDaPagina
            placeholder="Nome do produto"
            required
            type="text"
        />
        <InputsDaPagina
            placeholder="Preço do produto (ex: R$ 0.00)"
            required
            type="text"
        />
        <InputsDaPagina
            placeholder="Descrição do produto"
            required
            type="text"
        />
            <button
                type="submit"
            >Adicionar Produto</button>			
    </CadastroNovoProduto>
    )
}

export default Formulario; 

