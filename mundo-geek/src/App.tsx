import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import AdministradorRoutes from "router";
import ClienteRoutes from 'routes'; 

function App() {

  return (
        <>
        {/* {!autenticacao.email ?  } */}
        <AdministradorRoutes />
        {/* <ClienteRoutes /> */}
        {/* {autenticacao.email !== "adasdfadf@gmail.com" ? <AdministradorRoutes /> : <ClienteRoutes /> } */}
        </>
  );
}

export default App;
