import { config } from "config/config";
import { useCarrinho } from "contextos/CarrinhoProvider/CarrinhoContext";
import { useEffect, useState } from "react";
import { Button, Offcanvas, OffcanvasBody, OffcanvasTitle, Stack } from "react-bootstrap";
import { Api } from "services/api";
import ICategorias from "types/ICategorias";
import IProdutos from "types/IProdutos";
import { formatCurrency } from "../FormatCurency";
import { DivCarrinho } from "../styles";
import { ItemCarrinho } from "./ItemCarrinho";

export function CarrinhoAba(){
    const { itensDoCarrinho } = useCarrinho(); 
    const [produtos, setProdutos] = useState<IProdutos[] | undefined>();

    // useEffect(() => {
	// 	Api.get<ICategorias[], any>(`produtos/`, config)
	// 	.then((resposta) => {
	// 		setProdutos(resposta.data);
	// 		console.log(resposta)
	// 	});
	// }, []);

    return (
        <>
        <DivCarrinho>
            oioioioio
        </DivCarrinho>
        </>
        
	);
}