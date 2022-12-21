import { BotaoDeLogin } from "./styles"; 
import {Link} from 'react-router-dom';

const BotaoLogin = () => {

    return(
        <BotaoDeLogin>
            <Link to="/login" className="BotaoLogin">
                    <Link to="/login" className="BotaoLogin">Login</Link>
            </Link>
        </BotaoDeLogin>
    )
}

export default BotaoLogin; 