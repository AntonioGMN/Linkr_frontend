import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

async function signUp(newUser) {
  return instance.post("/users", newUser);
}

const api = { signUp };

export default api;
