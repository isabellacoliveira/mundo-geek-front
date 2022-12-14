import { CadastroNovoProduto, InputsDaPagina } from './styles'; 
import React, { useEffect, useState} from 'react'; 
import axios from 'axios';
import ICategorias from 'types/ICategorias';
import { Navigate, useNavigate } from 'react-router-dom';

const Formulario = () => {
    const navigate = useNavigate(); 
    const[imagemDoProduto, setImagemDoProduto] = useState(""); 
    const[categoriaDoProduto, setCategoriaDoProduto] = useState(""); 
    const[categoriasMapeadas , setCategoriasMapeadas] = useState<ICategorias[]>([]); 
    const[nomeDoProduto, setNomeDoProduto] = useState(""); 
    const[precoDoProduto, setPrecoDoProduto] = useState(""); 
    const[descricaoDoProduto, setDescricaoDoProduto] = useState(""); 

    let config = {
        headers: {
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjcxMDI0MDkwLCJleHAiOjE2NzEzNjk2OTB9.zXz0EeL3YyD4ZkczgqE-104aG2ErF_z628eU-Sleae0'
        }
      }
    
    const aoSubmeterForm = () => {        
        axios.post<ICategorias>('http://localhost:3001/categorias', {
            titulo: categoriaDoProduto
        }, config, 
        )
        .then(() => {
            sweetAlert("Produto cadastrado com sucesso.")
            navigate('/home')
        })
    }

    useEffect(() => {
        axios.get<ICategorias[]>('http://localhost:3001/categorias', config)
        .then(resposta => {
            setCategoriasMapeadas(resposta.data)
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
          <InputsDaPagina
            placeholder="Adicione uma nova categoria ou selecione uma"
            type="text"
            onChange={evento => setCategoriaDoProduto(evento.target.value)}

        />

        <select> 
            {categoriasMapeadas.map(categoria => <option key={categoria.titulo}>{categoria.titulo}</option>)} 
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
                type="button"
                onClick={() => aoSubmeterForm()}
            >Adicionar Produto</button>		
    </CadastroNovoProduto>
    
    )
}

export default Formulario; 

