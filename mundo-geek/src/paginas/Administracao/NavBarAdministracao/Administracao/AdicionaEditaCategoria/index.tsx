import Footer from "componentes/Rodape"
import { Api } from "services/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ICategorias from "types/ICategorias";
import { CadastroNovoProduto } from "../../styles";
import {useEffect} from 'react'; 
import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";

export default function EditarCategoriaAntiga(){
    const [categoriaDoProduto, setCategoriaDoProduto] = useState("");
    const parametros = useParams()
    const {usuario, config} = useAutenticacao(); 

    useEffect(() => {
       aoSubmeterForm(); 
    }, [parametros])

    const aoSubmeterForm = () => {
        if (parametros.id) {
            Api.get<ICategorias[] | any>(`categorias/${parametros.id}/`, config)
                .then(resposta => setCategoriaDoProduto(resposta.data.titulo))
        }
            Api.put<ICategorias>(`categorias/${parametros.id}/`, {
                titulo: categoriaDoProduto
            }, config)
                .then(() => {
                    sweetAlert("Categoria atualizada com sucesso!")
                })
    
    }

    if(!usuario){
        window.location.pathname = '/login'
    }

    return (
            <>
            <CadastroNovoProduto >
                <label className="editaNova">Formulario Categoria</label>
                <input
                    placeholder="Digite a categoria"
                    required
                    value={categoriaDoProduto}
                    onChange={(evento) =>
                        setCategoriaDoProduto(evento.target.value)
                    }
                ></input>
                <button
                    type="button"
                     onClick={aoSubmeterForm}
                >Salvar</button>
            </CadastroNovoProduto>
            <Footer />
            </>
    )
}
