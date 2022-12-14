import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { BotaoVerProduto, LinkParaOutraPagina, DivImgBotao, ImagemMais, NomeDoProduto, PrecoDoProduto, DivPrecoEditar, ImagemLapis } from './styles';
import Teste from 'assets/teste.jpg';
import Mais from 'assets/mais.png';
import { useEffect, useState } from 'react';
import IProdutos from 'types/IProdutos';
import axios from 'axios';
import Lapis from 'assets/editar.png'; 

export default function ProdutoCard(){
    const {pathname} = useLocation(); 
    const [produtosPorCategoria , setProdutosPorCategoria] = useState<IProdutos[]>([]);
    const navigate = useNavigate();
    const parametros = useParams(); 

    function paraEditarProduto(){
        navigate('/editar/produto')
    }

    let config = {
        headers: {
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjcxMDI0MDkwLCJleHAiOjE2NzEzNjk2OTB9.zXz0EeL3YyD4ZkczgqE-104aG2ErF_z628eU-Sleae0'
        }
      }

    useEffect(() => {
        axios.get<IProdutos[], any>(`http://localhost:3001/produtos/1`, config)
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
        {/* {produtosPorCategoria?.map(produto => 
             <CardDoProduto>
                    <img 
                        src={Teste}
                        // className={styles.ImagemDeCapaDoProduto}
                        // src={produto.imagem}
                        alt="imagem de capa do post"
                    />
            <NomeDoProduto>Teste</NomeDoProduto>
           <DivPrecoEditar>
            <PrecoDoProduto> 9.00
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
        )} */}
        <LinkParaOutraPagina>
            {/* <Link to={`/produto/${produto.id}`} /> */}
        </LinkParaOutraPagina>

       
       
        </>
        )
}