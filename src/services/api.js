import axios from "axios";

const baseURL =
  process.env.REACT_APP_API_URL === "dev"
    ? "http://localhost:4000"
    : "https://linkr390.herokuapp.com";

const instance = axios.create({
	baseURL,
});

function createAuth(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export const signUp = async (newUser) => instance.post("/users", newUser);

export const signIn = async (userData) => instance.post("/sessions", userData);

export const logout = async (token) => instance.delete("/sessions", createAuth(token));

export const publish = async (post, token) =>
  instance.post("/posts", post, createAuth(token));

export const deletePost = async (id, token) =>
	instance.delete(`/posts/${id}`, createAuth(token));

export const getPosts = async (token) => instance.get(`/posts`, createAuth(token));

export const getPostsId = async (id, token) =>
  instance.get(`/posts/${id}`, createAuth(token));

export const getUserByName = async (name) => instance.get(`/users/name`, name);

export const getTrending = async (token) => 
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
  getTrending,
};

export default api;