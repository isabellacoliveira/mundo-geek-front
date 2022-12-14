import { Link, useLocation, useNavigate } from "react-router-dom";
import { BotaoVerProduto, CardDoProduto, Cima, DivBotao, DivImgBotao, DivPrecoEditar, ImagemLapis, ImagemMais, ListaDeProdutos, NomeDoProduto, PrecoDoProduto, Titulos } from "./styles";
import IconeSeta from 'assets/iconeSeta.png';
import { useEffect, useState } from "react";
import ICategorias from "types/ICategorias";
import IProdutos from "types/IProdutos";
import axios from "axios";
import Teste from 'assets/teste.jpg';
import Lapis from 'assets/editar.png'; 
import Mais from 'assets/mais.png';

export default function ProdutosFiltrados(){
    const {pathname} = useLocation() 
    const [categorias, setCategorias] = useState<ICategorias[]>([]);
    const [produtos, setProdutos] = useState<IProdutos[]>([]);
    
    let config = {
        headers: {
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjcxMDIyMjU5LCJleHAiOjE2NzEzNjc4NTl9.tIv_Dm9dUeBKgiXhnc_-tJdOW7UKiSN0ROWhNUokcRc'
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

    const navigate = useNavigate();
    const [produtosPorCategoria , setProdutosPorCategoria] = useState<IProdutos[]>([]);

    function paraEditarProduto(){
        navigate('/editar/produto')
    }

    let config1 = {
        headers: {
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjcxMDI0MDkwLCJleHAiOjE2NzEzNjk2OTB9.zXz0EeL3YyD4ZkczgqE-104aG2ErF_z628eU-Sleae0'
        }
      }

    useEffect(() => {
        axios.get<IProdutos[], any>(`http://localhost:3001/produtos/1`, config1)
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

    return (
		<>
			{categorias.map((categoria) => (
				<>
					<Cima>
						<Titulos>{categoria.titulo}</Titulos>
							<Link to="/produtos" className="BotaoVerTudo">
								Ver tudo
								<img src={IconeSeta} alt="icone de uma seta" />
							</Link>
					</Cima>
					<ListaDeProdutos>
						{produtosPorCategoria?.map((produto, id) => (
							<CardDoProduto key={produto.id}>
								<img
									src={Teste}
									// className={styles.ImagemDeCapaDoProduto}
									// src={produto.imagem}
									alt="imagem de capa do post"
								/>
								<NomeDoProduto>{produto.nome}</NomeDoProduto>
								<DivPrecoEditar>
									<PrecoDoProduto>9.00</PrecoDoProduto>
								</DivPrecoEditar>
								<ImagemLapis>
									{pathname === "/perfil" ? (
										<ImagemMais
											src={Lapis}
											alt="icone de edição"
											// onClick={paraEditarProduto}
										/>
									) : null}
								</ImagemLapis>
								<DivImgBotao>
									<BotaoVerProduto>
										<Link
											to={"/produto/1"}
											// to={`/produto/${produto.id}`}
										>
											Ver Produto
										</Link>
									</BotaoVerProduto>
									<ImagemMais
										src={Mais}
										alt="icone de mais"
										// onClick={adicionaNoCarrinho}
									/>
								</DivImgBotao>
							</CardDoProduto>
						))}
					</ListaDeProdutos>
				</>
			))}
		</>
	);
}