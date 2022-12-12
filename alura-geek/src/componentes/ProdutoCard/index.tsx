import { Link, useLocation } from 'react-router-dom';
import { BotaoVerProduto, CardDoProduto, LinkParaOutraPagina, DivImgBotao, ImagemMais, NomeDoProduto, PrecoDoProduto } from './styles';
import Teste from 'assets/teste.jpg';
import Mais from 'assets/mais.png';
import { useEffect, useState } from 'react';
import IProdutos from 'types/IProdutos';
import axios from 'axios';

interface Props {
    produto: {
        id: number, 
        nome: string, 
        // ..... 
    }
}
// { produto }
export default function ProdutoCard({produto}: Props){
    const {pathname} = useLocation(); 
    const [produtosPorCategoria , setProdutosPorCategoria] = useState<IProdutos[]>([]);

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
            <PrecoDoProduto>
                {/* {produto.preco} */}
                ola
            </PrecoDoProduto>
            <DivImgBotao>
                <BotaoVerProduto
                >
                    <Link to={`/produto/${produto.id}`}>
                        Ver Produto
                    </Link>
                </BotaoVerProduto> 
                <ImagemMais 
                        src={Mais}
                        alt="icone de mais"
                        onClick={adicionaNoCarrinho}
                    />
            </DivImgBotao>
          
            {/* to="/produto" */}
        </CardDoProduto>
       
        </>
        )
}