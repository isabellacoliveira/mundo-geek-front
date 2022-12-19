import { config } from "config/config";
import { useCarrinho } from "contextos/CarrinhoProvider/CarrinhoContext"
import {useEffect, useState} from 'react';
import { Button, Stack } from "react-bootstrap";
import { Api } from "services/api";
import ICategorias from "types/ICategorias";
import IProdutos from "types/IProdutos";
import { formatCurrency } from "../../FormatCurency";

interface ItemCarrinhoProps {
    id: number, 
    quantidade: number,
}

export function ItemCarrinho({id, quantidade}: ItemCarrinhoProps){
    const {removerDoCarrinho} = useCarrinho()
    const [produtos, setProdutos] = useState<IProdutos[]>();

    useEffect(() => {
		Api.get<ICategorias[], any>(`produtos/`, config)
		.then((resposta) => {
			setProdutos(resposta.data);
			console.log(resposta)
		});
	}, []);

    const item = produtos?.find(i => i.id === id)
    if(item == null) return null 

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
          src={item.imagem}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
          alt="imagem do produto adicionado"
        />
        <div className="me-auto">
          <div>
            {item.nome}{" "}
            {quantidade > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantidade}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.preco)}
          </div>
        </div>
        <div> {formatCurrency(item.preco * quantidade)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removerDoCarrinho(item.id)}
        >
          &times;
        </Button>
      </Stack>
    )
}