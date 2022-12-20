import { AxiosRequestConfig } from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { Api, http } from "../../services/api";
import { getUsuarioNoLocalStorage, setUsuarioNoLocalStorage } from "./util";

export interface IUsuario {
	id?: number;
	email?: string;
	nome?: string;
	sobrenome?: string;
	role?: string;
	createdAt?: Date;
	updateAt?: Date;
}

export interface IContexto {
	login: (email: string, senha: string) => void;
	logout: () => void;
	usuario: IUsuario | null | undefined;
	config: AxiosRequestConfig;
    token: string | null | undefined
}

export interface IAutenticadoOuNao {
	hello: () => void;
}

export interface IAutenticacaoProvider {
	children: JSX.Element;
}

export const useAutenticacao = () => {
	const contexto = useContext(CriaUsuarioContext);
	return contexto;
};

export const CriaUsuarioContext = createContext<IContexto>({} as IContexto);
CriaUsuarioContext.displayName = "Cria Usuario Context"

export const AutenticadoProvider = ({ children }: IAutenticacaoProvider) => {
	const [usuario, setUsuario] = useState<IUsuario | null>();
	const [token, setToken] = useState<string | null | undefined>(localStorage.getItem('token'));
	const [config, setConfig] = useState<AxiosRequestConfig>({});

	useEffect(() => {
		async function pegaToken() {
			const res = await http.pegaToken();
			setToken(res);
			console.log("o token é", res);
		}
		pegaToken();
	}, []);

	useEffect(() => {
		setConfig({
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}, [token]);

	useEffect(() => {
		const usuario = getUsuarioNoLocalStorage();

		if (usuario) {
			setUsuario(usuario);
		}
	}, []);

	async function login(email: string, senha: string) {
		try {
			const response = await Api.post<{
				token: string;
				usuario: IUsuario;
			}>("login", { email, senha }, config);
			const user = response.data.usuario;
			const token = response.data.token;
			setUsuario(user);
            setToken(token)
			await setUsuarioNoLocalStorage(user, token);
		} catch (error) {
			return null;
		}
	}

	async function logout() {
		setUsuario({} as IUsuario);
        setToken('')
		localStorage.clear();
	}

	return (
		<CriaUsuarioContext.Provider value={{ usuario, login, logout, config, token}}>
			{children}
		</CriaUsuarioContext.Provider>
	);
};
