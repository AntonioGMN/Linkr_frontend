import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

function createAuth(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export const signUp = async (newUser) => instance.post("/users", newUser);

export const signIn = async (userData) => instance.post("/sessions", userData);

export const logout = async (token) => instance.delete("/sessions", createAuth(token));

export const publish = async (post, token) =>
  instance.post("/posts", post, createAuth(token));

export const getPosts = async (token) => instance.get(`/posts`, createAuth(token));

export const getPostsId = async (id, token) =>
  instance.get(`/posts/${id}`, createAuth(token));

export const getUserByName = async (name) => instance.get(`/users/name`, name);

const api = {
  signUp,
  signIn,
  publish,
  logout,
  getPosts,
  getPostsId,
  getUserByName,
};

export default api;
