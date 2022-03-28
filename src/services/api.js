import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:4000",
});

function createAuth(token) {
	return { headers: { Authorization: `Bearer ${token}` } };
}

export const signUp = async (newUser) => instance.post("/users", newUser);

export const signIn = async (userData) => instance.post("/sessions", userData);

export const logout = async (token) =>
	instance.delete("/sessions", createAuth(token));

export const publish = async (post, token) =>
	instance.post("/posts", post, createAuth(token));

export const getPosts = async (token) =>
	instance.get(`/posts`, createAuth(token));

export const getPostsId = async (id, token) =>
	instance.get(`/posts/${id}`, createAuth(token));

export const getUserByName = async (name, token) =>
	instance.post(`/users/name`, { name }, createAuth(token));

export const getUserById = async (id, token) =>
	instance.get(`/users/${id}`, createAuth(token));

export const getTrending = async (token) =>
	instance.get("/hashtags/trending", createAuth(token));

const api = {
	signUp,
	signIn,
	publish,
	logout,
	getPosts,
	getPostsId,
	getUserByName,
	getTrending,
	getUserById,
};

export default api;
