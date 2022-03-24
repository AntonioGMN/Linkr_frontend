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
	try {
		const resposta = await axios.get(`${Base_URL}/posts`);
		return resposta.data;
	} catch (err) {
		return err;
	}
}

export { getPosts };
