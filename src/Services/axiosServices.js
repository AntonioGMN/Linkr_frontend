import axios from "axios";
import { useAuth } from "../hooks/useAuth";

const Base_URL = "http://localhost:4000";

function createConfig(token) {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}

function getPosts() {
	const resposta = axios.get(`${Base_URL}/posts`);

	return resposta;
}

function getPostsId(id) {
	const promise = axios.get(`${Base_URL}/posts/${id}`);
	return promise;
}

function getUserByName(name) {
	const dates = { name: name };
	console.log(dates);
	const promise = axios.get(`${Base_URL}/users/name`, dates);
	return promise;
}

export { getPosts, getPostsId, getUserByName };
