import axios from "axios";

const Base_URL = "http://localhost:4000";

function createConfig(token) {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}

function getPosts(token) {
	const resposta = axios.get(`${Base_URL}/posts`, createConfig(token));

	return resposta;
}

function getPostsId(id, token) {
	const promise = axios.get(`${Base_URL}/posts/${id}`, createConfig(token));
	return promise;
}

function getUserByName(name, token) {
	const dates = { name: name };
	const promise = axios.post(
		`${Base_URL}/users/name`,
		dates,
		createConfig(token)
	);
	return promise;
}

export { getPosts, getPostsId, getUserByName };
