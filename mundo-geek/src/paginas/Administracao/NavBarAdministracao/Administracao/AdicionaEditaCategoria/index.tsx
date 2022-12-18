import Footer from "componentes/Rodape"
import { Api } from "services/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ICategorias from "types/ICategorias";
import { CadastroNovoProduto } from "../../styles";
import {useEffect} from 'react'; 
import { token } from "config/config";

export default function EditarCategoriaAntiga(){
    const [categoriaDoProduto, setCategoriaDoProduto] = useState("");
    const parametros = useParams()

    // let config = {
	// 	headers: {
	// 		Authorization:
	// 			`Bearer ${token}`
    //         },
	// };

    let config = {
        headers: {
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6InVzdWFyaW8gYWRtaW4iLCJzb2JyZW5vbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3MTM4NjUzMSwiZXhwIjoxNjcxNzMyMTMxfQ.fm6-R1x1xNJ0ApYfP_UexByHujtXNW1PuBTSLgsAi8Q'
        }
      }

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
