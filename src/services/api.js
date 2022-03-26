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

const getPosts = async (token) => instance.get(`/posts`, createAuth(token));

const getPostsId = async (id, token) =>
  instance.get(`/posts/${id}`, createAuth(token));

const getUserByName = async (name) => instance.get(`/users/name`, name);

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
