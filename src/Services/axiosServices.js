import axios from "axios";

const Base_URL = "http://localhost:4000";

function createConfig(token) {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}

async function getPosts() {
	const resposta = axios.get(`${Base_URL}/posts`);

	return resposta;
}

async function getPostsId(id) {
	const promise = axios.get(`${Base_URL}/posts/${id}`);
	return promise;
}

export { getPosts, getPostsId };
