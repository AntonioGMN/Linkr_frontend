import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

const signUp = async (newUser) => instance.post("/users", newUser);

const api = { signUp };

export default api;
