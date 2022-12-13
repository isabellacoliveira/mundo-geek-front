import FaleConosco from "componentes/FaleConosco";
import ProdutoCard from "componentes/ProdutoCard";
import Footer from "componentes/Rodape";
import { useParams } from "react-router-dom";
import { ConteudoDoProduto, DivDaImagem, GrupoProdutosSimilares, 
        PostConteudoContainer, Preco, ProdutosRecomendados, 
        ProdutosSimilares, Titulo } from "./styles";
import Teste from 'assets/teste.jpg'; 

interface Props {
    children: string, 
    nome: string, 
    preco: number
}
// { children, nome, preco }: Props
export default function ProdutoSelecionado(){
    const parametros = useParams()

    //     const produto = produtos.find((produto) => {
//         return produto.id === Number(parametros.id);
//     })

//     const produtosRecomendados = produtos
//         .filter((produto) => produto.id !== Number(parametros.id))
//         .sort((a, b) => b.id - a.id)
//         .slice(0, 6);

    return(
        <>
            <PostConteudoContainer>
            <DivDaImagem>
                    <img 
                        // src={`/assets/Produtos/${produto.id}/capa.png`}
                        src={Teste}
                        alt="capa do produto"
                 />
                </DivDaImagem>
                <ConteudoDoProduto>
                    <Titulo>
                        {/* {nome} */}
                        teste
                    </Titulo>

                    <Preco>
                        {/* {preco} */}
                        Preço 9.00
                    </Preco>

                    <PostConteudoContainer>
                        {/* {children} */}
                        Originalmente um escravo em Tatooine, Anakin Skywalker era um Jedi profetizado para trazer equilíbrio à Força. 
                        Ele é atraído para o lado negro da Força pelo Chanceler Sheev Palpatine/Darth Sidious e se torna um Lorde Sith, 
                        assumindo o título de Darth Vader. Após uma batalha de sabre de luz com seu ex-mentor Obi-Wan Kenobi em Mustafar,
                         na qual ele fica gravemente ferido, Vader é transformado em um ciborgue. Ele então serve ao Império Galáctico por 
                         mais de duas décadas como seu principal executor. Vader se redime salvando seu filho, Luke Skywalker, e matando Palpatine,
                          sacrificando sua própria vida no processo. Ele também é o marido secreto de Padmé Amidala, o pai biológico da princesa Leia,
                           e o avô de Kylo Ren (Ben Solo). Na continuidade não canônica de Star Wars, ele também é avô de Ben Skywalker, seu epônimo 
                           Anakin Solo, Jaina Solo e Darth Caedus (Jacen Solo), e bisavô de Allana Solo.
                    </PostConteudoContainer>
                </ConteudoDoProduto>
               
                
            </PostConteudoContainer>
            <GrupoProdutosSimilares>
                 <ProdutosSimilares>
                    Produtos similares:
                </ProdutosSimilares>

            <ProdutosRecomendados>
                {/* {produtosRecomendados.map((produto) => (
                    <li key={produto.id}>
                        <ProdutoCard produto={produto} />
                    </li>
                ))
            } */}
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



