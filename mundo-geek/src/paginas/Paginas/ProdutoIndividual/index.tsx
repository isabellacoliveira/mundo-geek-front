import FaleConosco from "componentes/FaleConosco";
import Footer from "componentes/Rodape";
import { ConteudoDoProduto, DivDaImagem, GrupoProdutosSimilares, 
        PostConteudoContainer, Preco, ProdutosRecomendados, 
        ProdutosSimilares, Titulo } from "./styles";
import IProdutos from "types/IProdutos";
import {useState, useEffect} from 'react'; 
import ICategorias from "types/ICategorias";
import { Api } from "services/api";
import { useParams } from "react-router-dom";
import Produto from "componentes/ProdutosPorCategoria/Produtos";
import { config } from "config/config";

interface ProdutoProps {
	produto: IProdutos;
}

// {produto}: ProdutoProps

export default function ProdutoSelecionado(){
    const [produtos, setProdutos] = useState<IProdutos[]>();
    const parametros = useParams(); 
    console.log("parametros", parametros)
    
    const produto = produtos?.find((produto) => {
        return produto.id === Number(parametros.id);
    })

    const produtosRecomendados = produtos?.filter((produto) => produto.id !== Number(parametros.id)).sort((a, b) => b.id - a.id).slice(0, 6);

    useEffect(() => {
        Api.get<ICategorias[], any>(`produtos/${produto?.id}`, config).then((resposta) => {
            setProdutos(resposta.data);
        });
    }, []);

    return(
        <>
            <PostConteudoContainer>
            <DivDaImagem>
                    <img 
                        // src={`/produtos/${produto?.id}`}
                        alt="capa do produto"
                 />
                </DivDaImagem>
                <ConteudoDoProduto>
                    <Titulo>
                        {/* {produto?.nome} */}
                    </Titulo>

                    <Preco>
                        {/* {produto?.preco} */}
                    </Preco>

                    <PostConteudoContainer>
                       {/* {produto?.descricao} */}
                       asjdlsakfjalda
                    </PostConteudoContainer>
                </ConteudoDoProduto>
               
                
            </PostConteudoContainer>
            <GrupoProdutosSimilares>
                 <ProdutosSimilares>
                    Produtos similares:
                </ProdutosSimilares>

            <ProdutosRecomendados>
                {produtosRecomendados?.map((produto) => (
                    <li key={produto.id}>
                        <Produto produto={produto} />
                    </li>
                ))
            }
            </ProdutosRecomendados>
        </GrupoProdutosSimilares>
           
            <FaleConosco />
            <Footer/>
        </>
       
    )
}



// export default function ProdutoClicado(){

//     const produto = arrayDosProdutos.find((produto) => {
//         return produto.id === Number(parametros.id);
//     })

//     // if(!produto) {
//     //     return <NaoEncontrada />;
//     // }

//         <PostModelo
//             fotoCapa={`/assets/Produtos/${produto.id}/capa.png`}
//             nome={produto.nome}
//             preco={produto.preco}
//         >
//             {produto.descricao} 
//         </PostModelo> 
       

// export default function PostModelo({ children, nome, preco }) {
//     const parametros = useParams()



