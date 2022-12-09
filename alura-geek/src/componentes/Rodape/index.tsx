import { Outlet } from "react-router-dom";
import { DesenvolvidoPor, Rodape } from "./style";

export const Footer = () => {
    return (
		<>
			<Rodape>
				<DesenvolvidoPor>Desenvolvido por Code Girls</DesenvolvidoPor>
				2022
			</Rodape>
			<Outlet />
		</>
	);
}

export default Footer;