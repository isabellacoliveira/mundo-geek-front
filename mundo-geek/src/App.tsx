import { useAutenticacao } from "contextos/AutenticacaoProvider/useAutenticacao"
import AdministradorRoutes from "router";
import ClienteRoutes from 'routes'; 

function App() {
  const autenticacao = useAutenticacao();

  return (
        <>
        {/* {!autenticacao.email ?  } */}
        {/* <AdministradorRoutes /> */}
        <ClienteRoutes />
        {/* {autenticacao.email !== "adasdfadf@gmail.com" ? <AdministradorRoutes /> : <ClienteRoutes /> } */}
        </>
  );
}

export default App;
