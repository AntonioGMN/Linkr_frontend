import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

async function signUp(newUser) {
  return instance.post("/users", newUser);
}

async function signIn(userData) {
  return instance.post("/sessions", userData);
}

const api = { signUp, signIn };

export default api;
