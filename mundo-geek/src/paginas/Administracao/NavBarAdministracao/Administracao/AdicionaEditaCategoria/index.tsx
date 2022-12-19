import Footer from "componentes/Rodape"
import { Api } from "services/api";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ICategorias from "types/ICategorias";
import { CadastroNovoProduto } from "../../styles";
import {useEffect} from 'react'; 
import { config } from "config/config";

export default function EditarCategoriaAntiga(){
    const [categoriaDoProduto, setCategoriaDoProduto] = useState("");
    const parametros = useParams()
    const navigate = useNavigate(); 

    useEffect(() => {
        if (parametros.id) {
            Api.get<ICategorias>(`categorias/${parametros.id}/`, config)
                .then(resposta => setCategoriaDoProduto(resposta.data.titulo))
        }
    }, [parametros])

    const aoSubmeterForm = () => {
            Api.put<ICategorias>(`categorias/${parametros.id}/`, {
                titulo: categoriaDoProduto
            }, config)
                .then(() => {
                    sweetAlert("Categoria atualizada com sucesso!")
                    navigate('/administracao/categorias/novo')
                })
    
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
