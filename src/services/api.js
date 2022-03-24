import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

function createAuth(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

const signUp = async (newUser) => instance.post("/users", newUser);

const publish = async (post, token) => instance.post("/posts", post, createAuth(token));

const api = { signUp , publish};

export default api;
