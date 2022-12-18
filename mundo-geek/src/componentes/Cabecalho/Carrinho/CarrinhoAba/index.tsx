import { useCarrinho } from "contextos/CarrinhoProvider/CarrinhoContext";
import { useEffect, useState } from "react";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack } from "react-bootstrap";
import { Api } from "services/api";
import ICategorias from "types/ICategorias";
import IProdutos from "types/IProdutos";
import { formatCurrency } from "../FormatCurency";
import { ItemCarrinho } from "./ItemCarrinho";

interface CarrinhoAbaProps {
    estaAberto: boolean
}

export function CarrinhoAba({estaAberto}: CarrinhoAbaProps){
    const {fecharCarrinho, itensDoCarrinho} = useCarrinho(); 
    const [produtos, setProdutos] = useState<IProdutos[] | undefined>();

    let config = {
		headers: {
			'Authorization':
				"Bearer " +
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6InVzdWFyaW8gYWRtaW4iLCJzb2JyZW5vbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3MTI4MjI2MCwiZXhwIjoxNjcxNjI3ODYwfQ.cfcxl5sbly7scDPUvRglDNR4NvxXT-RPcEKYhFd5Q4Q'
			},
	};

    useEffect(() => {
		Api.get<ICategorias[], any>(`produtos/`, config)
		.then((resposta) => {
			setProdutos(resposta.data);
			console.log(resposta)
		});
	}, []);

    

    return (
		<Offcanvas 
                show={estaAberto} 
                onHide={fecharCarrinho} 
                placement="start"
                >
			<Button
				onClick={fecharCarrinho}
				style={{
					border: "none",
					backgroundColor: "#CD5C5C",
					borderRadius: "5px",
					color: "#fff",
					width: "100px",
					height: "100px",
				}}
			>
				Fechar [x]
			</Button>
			<OffcanvasTitle>Carrinho</OffcanvasTitle>
			<OffcanvasBody>
				<Stack>
					{itensDoCarrinho.map((item) => (
						<ItemCarrinho key={item.id} {...item} />
					))}
				</Stack>
				<div className="ms-auto fw-bold fs-5">
					Total{" "}
					{formatCurrency(
						itensDoCarrinho.reduce((total, itemDoCarrinho) => {
							const item = produtos?.find(
								(i) => i.id === itemDoCarrinho.id
							);
							return (
								total +
								(item?.preco || 0) * itemDoCarrinho.quantidade
							);
						}, 0)
					)}
				</div>
			</OffcanvasBody>
		</Offcanvas>
	);
}