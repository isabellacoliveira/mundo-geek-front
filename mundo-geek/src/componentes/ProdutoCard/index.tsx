import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { BotaoVerProduto, CardDoProduto, LinkParaOutraPagina, DivImgBotao, ImagemMais, NomeDoProduto, PrecoDoProduto, DivPrecoEditar, ImagemLapis } from './styles';
import Teste from 'assets/teste.jpg';
import Mais from 'assets/mais.png';
import { useEffect, useState } from 'react';
import IProdutos from 'types/IProdutos';
import axios from 'axios';
import Lapis from 'assets/editar.png'; 

// interface Props {
//     produto: {
//         id: number, 
//         nome: string, 
//         // ..... 
//     }
// }

// {produto}: Props

export default function ProdutoCard(){
    const {pathname} = useLocation(); 
    const [produtosPorCategoria , setProdutosPorCategoria] = useState<IProdutos[]>([]);
    const navigate = useNavigate();

    function paraEditarProduto(){
        navigate('/editar/produto')
    }
    let config = {
        headers: {
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkEiLCJpYXQiOjE2NzA4NjcyNDUsImV4cCI6MTY3MTIxMjg0NX0.Z5PvZfatWUujT0ElVUl6h2WnYNn5prqC_aTSiNvYp4s'
        }
      }

    useEffect(() => {
        axios.get<IProdutos[], any>('http://localhost:3001/produtos/1', config)
        .then(resposta => {
            setProdutosPorCategoria(resposta.data.results)
        })
        .catch(erro => {
            console.log(erro)
        })
        
    })

    function adicionaNoCarrinho(){
        alert("produto adicionado ao carrinho")
    }

    return(
        <>
        <LinkParaOutraPagina>
            {/* <Link to={`/produto/${produto.id}`} /> */}
        </LinkParaOutraPagina>

        <CardDoProduto>
                    <img 
                        src={Teste}
                        // className={styles.ImagemDeCapaDoProduto}
                        // src={`/assets/Produtos/${produto.id}/capa.png`}
                        alt="imagem de capa do post"
                    />
                 {produtosPorCategoria?.map(produto => <NomeDoProduto>{produto.nome}</NomeDoProduto>)}
            <NomeDoProduto>Teste</NomeDoProduto>
           <DivPrecoEditar>
            <PrecoDoProduto>
                    {/* {produto.preco} */}
                    ola
                </PrecoDoProduto>
                <ImagemLapis>
                {pathname === '/perfil' ?  <ImagemMais
                                                src={Lapis}    
                                                alt="icone de edição"
                                                onClick={paraEditarProduto}
                                            /> : null}
                </ImagemLapis>
           </DivPrecoEditar>
           
            <DivImgBotao>
                <BotaoVerProduto
                >
                    <Link to={'/produto/1'}
                    // to={`/produto/${produto.id}`}
                    >
                        Ver Produto
                    </Link>
                </BotaoVerProduto> 
                <ImagemMais 
                        src={Mais}
                        alt="icone de mais"
                        onClick={adicionaNoCarrinho}
                    />
            </DivImgBotao>
          
        </CardDoProduto>
       
        </>
        )
}