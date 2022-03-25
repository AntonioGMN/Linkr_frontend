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
	//const config = createConfig(token);
	const resposta = axios.get(`${Base_URL}/posts`);

	return resposta;
}

export { getPosts };
