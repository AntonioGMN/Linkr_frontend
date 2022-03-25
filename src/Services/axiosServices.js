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
	// try {
	// 	const resposta = await axios.get(`${Base_URL}/posts`);
	// 	return resposta;
	// } catch (err) {
	// 	console.log(err);
	// 	return err;
	// }

	//let ret;
	const resposta = axios.get(`${Base_URL}/posts`);
	//resposta.then((r) => (ret = r.data));
	//resposta.catch((err) => (ret = err));

	return resposta;
}

export { getPosts };
