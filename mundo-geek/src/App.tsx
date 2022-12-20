import { useAutenticacao } from "contextos/AutenticacaoProvider/Autenticacao";
import AdministradorRoutes from "router";
import ClienteRoutes from 'routes'; 

function App() {
  const { usuario, token } = useAutenticacao();

  return (
        <>
          {token !== null ? <AdministradorRoutes /> : <ClienteRoutes />}
        </>
  );
}

export default App;
