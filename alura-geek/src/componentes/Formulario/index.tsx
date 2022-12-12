import { CadastroNovoProduto, InputsDaPagina } from './styles'; 


const Formulario = () => {
    return (
        <CadastroNovoProduto>
        <p>Adicionar novo produto</p>
        <InputsDaPagina
            placeholder="Insira a imagem"
            required
            type="file"
        />
        <select placeholder="Categorias" 
                required={true}
        >
            {/* <option key='default' value=''>Selecione uma categoria</option>
            {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
            ))} */}
            <option>opcao um</option>
        </select>
        <InputsDaPagina
            placeholder="Nome do produto"
            required
            type="text"
        />
        <InputsDaPagina
            placeholder="Preço do produto (ex: R$ 0.00)"
            required
            type="text"
        />
        <InputsDaPagina
            placeholder="Descrição do produto"
            required
            type="text"
        />
            <button
                type="submit"
            >Adicionar Produto</button>			
    </CadastroNovoProduto>
    )
}

export default Formulario; 

