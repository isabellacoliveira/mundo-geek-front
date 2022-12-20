import {
	AutenticadoProvider
} from "contextos/AutenticacaoProvider/Autenticacao";
import AdministradorRoutes from "router";

function App() {

	return (
		<>
			<AutenticadoProvider>
        <AdministradorRoutes />
			</AutenticadoProvider>
		</>
	);
}

export default App;
