import { useState, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const persistedAuth = JSON.parse(localStorage.getItem("auth"));
	const [auth, setAuth] = useState(persistedAuth);

	function persistLogged(authData) {
		setAuth(authData);
		localStorage.setItem("auth", JSON.stringify(authData));
	}

	function removeLogged() {
		localStorage.removeItem("auth");
	}

	return (
		<AuthContext.Provider value={{ auth, persistLogged, removeLogged }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext;
