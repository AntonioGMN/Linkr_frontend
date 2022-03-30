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
instance.patch(`/posts/${id}`, newText, createAuth(token));

export const getPosts = async (token) => instance.get(`/posts`, createAuth(token));

const getPostsByHashtag = async ({ hashtag, token }) =>
  instance.get(`/hashtags/${hashtag}/posts`, createAuth(token));

const getPostsId = async (id, token) =>
  instance.get(`/posts/${id}`, createAuth(token));

const getUserByName = async (name) => instance.get(`/users?name=${name}`);

const getTrending = async (token) =>
  instance.get("/hashtags/trending", createAuth(token));

const api = {
  signUp,
  signIn,
  publish,
  logout,
  deletePost,
  editPost,
  getPosts,
  getPostsId,
  getUserByName,
  getTrending,
  getPostsByHashtag,
};

export default api;
