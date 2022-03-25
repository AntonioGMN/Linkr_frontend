import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:4000",
});

const signUp = async (newUser) => instance.post("/users", newUser);

async function signIn(userData) {
	return instance.post("/sessions", userData);
}

const api = { signUp, signIn };

export default api;
