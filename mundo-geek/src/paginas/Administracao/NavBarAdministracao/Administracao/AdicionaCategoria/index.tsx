import Footer from "componentes/Rodape"
import { Api } from "contextos/AutenticacaoProvider/services/api";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ICategorias from "types/ICategorias";
import { CadastroNovoProduto } from "../../styles";
import {useEffect} from 'react'; 
import { token } from "config/config";

// não está mostrando o alert 
export default function EditarCategoriaAntiga(){
    const [categoriaDoProduto, setCategoriaDoProduto] = useState("");
    const navigate = useNavigate();
    const parametros = useParams()


    let config = {
		headers: {
			Authorization:
				`Bearer ${token}`
            },
	};


    useEffect(() => {
        if (parametros.id) {
            Api.get<ICategorias>(`categorias/${parametros.id}/`)
                .then(resposta => setCategoriaDoProduto(resposta.data.titulo))
        }
    }, [parametros])

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.id) {
            Api.put<ICategorias>(`categorias/${parametros.id}/`, {
                titulo: categoriaDoProduto
            }, config)
                .then(() => {
                    alert("Categoria atualizada com sucesso!")
                })
        } else {
            Api.post<ICategorias>('categorias/', {
                titulo: categoriaDoProduto,            
            }, config)
                .then(() => {
                    alert("Categoria cadastrada com sucesso!")
                })
        }

    }

    // const aoSubmeterForm = () => {
	// 	Api.post<ICategorias>(
	// 			"/categorias",
	// 			{
	// 				titulo: categoriaDoProduto,
	// 			},
	// 			config
	// 		)

    //     .then(() => {
    //         sweetAlert("Produto cadastrado com sucesso.");
    //         navigate("/home");
    //     });
	// };

    return (
            <>
            <CadastroNovoProduto >
                <label className="editaNova">Formulario Categoria</label>
                <input
                    placeholder="Adicione a categoria"
                    required
                    onChange={(evento) =>
                        setCategoriaDoProduto(evento.target.value)
                    }
                ></input>
                <button
                     onClick={() => aoSubmeterForm}
                >Salvar</button>
            </CadastroNovoProduto>
            <Footer />
            {/* <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
            <Typography component="h1" variant="h6">Formulário de Categorias</Typography>
            <Box component="form" sx={{ width: '100%' }}>
                <TextField
                    value={categoriaDoProduto}
                    onChange={evento => setCategoriaDoProduto(evento.target.value)}
                    label="Nome da Categoria"
                    variant="standard"
                    fullWidth
                    required
                />
                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined" onSubmit={() => aoSubmeterForm}>Salvar</Button>
            </Box>
        </Box> */}
            </>
    )
}
