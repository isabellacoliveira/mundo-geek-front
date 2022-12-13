import { Link, useLocation } from "react-router-dom";
import { Cima, ListaDeProdutos, Titulos } from "./styles";
import IconeSeta from 'assets/iconeSeta.png';
import { useEffect, useState } from "react";
import ICategorias from "types/ICategorias";
import ProdutoCard from "componentes/ProdutoCard";
import IProdutos from "types/IProdutos";
import axios from "axios";

export default function ProdutosFiltrados(){
    const {pathname} = useLocation() 
    const [categorias, setCategorias] = useState<ICategorias[]>([]);
    const [produtos, setProdutos] = useState<IProdutos[]>([]);
    
    let config = {
        headers: {
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkEiLCJpYXQiOjE2NzA4NjcyNDUsImV4cCI6MTY3MTIxMjg0NX0.Z5PvZfatWUujT0ElVUl6h2WnYNn5prqC_aTSiNvYp4s'
        }
      }

    useEffect(() => {
        axios.get<ICategorias[]>('http://localhost:3001/categorias', config)
        .then(resposta => {
            setCategorias(resposta.data)
        })
        .catch(erro => {
            console.log(erro)
        })
    },[])

    return (
        <> 
        {pathname === '/home' ?  <Cima>
            {categorias.map(categoria => <Titulos>{categoria.titulo}</Titulos>)}
            <Link to="/produtos" className="BotaoVerTudo">
                Ver tudo
                <img src={IconeSeta}
                    alt="icone de uma seta"
                />
            </Link>
        </Cima> : '' }
        
      
            <ListaDeProdutos>
                {/* {produtosPorCategoria?.map((produto) => (
                        <li key={produto.id} >
                            {Number(produto.IDcategoria) === IDcategoria ?
                                    <ProdutoCard produto={produto} /> 
                                    : null}
                        </li>
                    ))}  */}
                {/* <ProdutoCard 
                    produtos={produtos}
                />  */}
                <ProdutoCard />
            </ListaDeProdutos> 

        
        </>
       
    )
}