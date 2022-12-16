import { BotaoDeLogin } from "./styles"; 
import {Link, useLocation} from 'react-router-dom';

const BotaoLogin = () => {
    const {pathname} = useLocation();

    return(
        <BotaoDeLogin>
            <Link to="/login" className="BotaoLogin">
               {pathname === '/cadastrarproduto' ? 
                    <Link to="/produtos" className="BotaoLogin">Menu Administrador</Link> : "Login "}
            </Link>
        </BotaoDeLogin>
    )
}

export default BotaoLogin; 