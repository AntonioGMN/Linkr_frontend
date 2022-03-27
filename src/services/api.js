import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:4000",
});

function createAuth(token) {
	return { headers: { Authorization: `Bearer ${token}` } };
}

const signUp = async (newUser) => instance.post("/users", newUser);

const signIn = async (userData) => instance.post("/sessions", userData);

const logout = async (token) => instance.delete("/sessions", createAuth(token));

const publish = async (post, token) =>
	instance.post("/posts", post, createAuth(token));

const deletePost = async (id, token) =>
	instance.delete(`/posts/${id}`, createAuth(token));

const api = { signUp, signIn, publish, logout, deletePost };

export default api;
