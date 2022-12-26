import {
	AutenticadoProvider
} from "contextos/AutenticacaoProvider/Autenticacao";
import AppRoutes from "router";

function App() {

	return (
		<>
			<AutenticadoProvider>
       			 <AppRoutes />
			</AutenticadoProvider>
		</>
	);
}

export default App;
