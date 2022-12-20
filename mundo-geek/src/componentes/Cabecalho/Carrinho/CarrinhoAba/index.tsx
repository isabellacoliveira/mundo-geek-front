import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../FormatCurency";
import { DivCarrinho } from "../styles";
import Controle from 'assets/controle.png'; 

export function CarrinhoAba(){
    return (
        <>
        <DivCarrinho>
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={Controle}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt="imagem do produto"
      />
      <div className="me-auto">
        <div>
          Mini Yoda 
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x 90
            </span>
        
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {/* {formatCurrency(9.00)} */}
        </div>
      </div>
      <div> {formatCurrency(9.00)}</div>
      <Button
        variant="outline-danger"
        size="sm"
      >
        &times;
      </Button>
    </Stack>
        </DivCarrinho>
        </>
        
	);
}