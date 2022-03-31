import axios from "axios";

const baseURL =
	process.env.REACT_APP_API_URL === "dev"
		? "http://localhost:4000"
		: "https://linkr390.herokuapp.com";

const instance = axios.create({
	//baseURL: "http://localhost:4000",
	baseURL,
});

function createAuth(token) {
	return { headers: { Authorization: `Bearer ${token}` } };
}

const signUp = async (newUser) => instance.post("/users", newUser);

const signIn = async (userData) => instance.post("/sessions", userData);

const logout = async (token) => instance.delete("/sessions", createAuth(token));

const publish = async (post, token) =>
	instance.post("/posts", post, createAuth(token));

export const deletePost = async (id, token) =>
	instance.delete(`/posts/${id}`, createAuth(token));

export const getPosts = async (token) =>
	instance.get(`/posts`, createAuth(token));

const getPostsPage = async (page, token) => {
	console.log(`/posts?page=${page}&limit=${10}`);
	return instance.get(`/posts?page=${page}&limit=${10}`, createAuth(token));
};

const getPostsByHashtag = async ({ hashtag, token }) =>
	instance.get(`/hashtags/${hashtag}/posts`, createAuth(token));

const getPostsId = async (id, page, token) =>
	instance.get(`/posts/${id}?page=${page}&limit=${10}`, createAuth(token));

const getUserByName = async (name, token) =>
	instance.get(`/users?name=${name}`, createAuth(token));

export const getUserById = async (id, token) =>
	instance.get(`/users/${id}`, createAuth(token));

const getTrending = async (token) =>
	instance.get("/hashtags/trending", createAuth(token));

const api = {
	signUp,
	signIn,
	publish,
	logout,
	deletePost,
	getPosts,
	getPostsId,
	getUserByName,
	getUserById,
	getTrending,
	getPostsByHashtag,
	getPostsPage,
};

export default api;
