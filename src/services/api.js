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

const signUp = async (newUser) => instance.post("/users", newUser);

const signIn = async (userData) => instance.post("/sessions", userData);

const logout = async (token) => instance.delete("/sessions", createAuth(token));

const publish = async (post, token) =>
  instance.post("/posts", post, createAuth(token));

export const deletePost = async (id, token) =>
  instance.delete(`/posts/${id}`, createAuth(token));

export const editPost = async (id, newText, token) =>
instance.patch(`/posts/${id}`, { newText },  createAuth(token));

export const getPosts = async (token) => instance.get(`/posts`, createAuth(token));

const getPostsByHashtag = async ({ hashtag, token }) =>
  instance.get(`/hashtags/${hashtag}/posts`, createAuth(token));

const getPostsByUserId = async (id, token) =>
  instance.get(`/posts/users/${id}`, createAuth(token));

const getUserByName = async (name, token) => instance.get(`/users?name=${name}`, createAuth(token));

const getUserById = async (id, token) => instance.get(`/users/${id}`, createAuth(token));

const getTrending = async (token) =>
  instance.get("/hashtags/trending", createAuth(token));

const toggleLikePost = async (id, token) =>
  instance.post(`/posts/${id}/toggle-like`, null, createAuth(token));

const repost = async (id, token) =>
  instance.post(`posts/${id}/repost`, null, createAuth(token));
  
const toggleFollow = async (id, token) =>
  instance.put(`/users/${id}/follow`, null, createAuth(token));

const getFollows = async (id, token) =>
  instance.get(`/users/follows`, createAuth(token));

const api = {
  signUp,
  signIn,
  publish,
  logout,
  deletePost,
  editPost,
  getPosts,
  getPostsByUserId,
  getUserByName,
  getTrending,
  getPostsByHashtag,
  toggleLikePost,
  repost,
  toggleFollow,
  getFollows,
  getUserById,
};

export default api;
