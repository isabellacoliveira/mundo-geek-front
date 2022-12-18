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

interface ProdutoProps {
	produto: IProdutos;
}

// {produto}: ProdutoProps

export default function ProdutoSelecionado(){
    const [produtos, setProdutos] = useState<IProdutos[]>();
    const parametros = useParams(); 
    console.log("parametros", parametros)

	let config = {
		headers: {
			'Authorization':
				"Bearer " +
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6InVzdWFyaW8gYWRtaW4iLCJzb2JyZW5vbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3MTM5MDI4NywiZXhwIjoxNjcxNzM1ODg3fQ.MJaYd65wNvsx1Om81HCO4xmva0Bgf0d4oIYQ8QbOHvo'
			},
	};
    
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



