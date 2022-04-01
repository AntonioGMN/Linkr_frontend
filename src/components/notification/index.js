import useInterval from "use-interval";
import NewPostsBarStyle from "./style";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

export default function NewPostsBar() {
	const { auth } = useAuth();
	const [inicialNumber, setIniciaNumber] = useState(null);
	let currentPostsNumber = 0;
	const [valor, setValor] = useState(0);
	let valor2 = 0;
	let [show, setShow] = useState(false);

	useEffect(async () => {
		const posts = await api.getPosts(auth.token);
		if (inicialNumber === null) {
			setIniciaNumber(posts.data.length);
			currentPostsNumber = posts.data.length;
		} else currentPostsNumber = inicialNumber;
	});

	useInterval(async () => {
		const posts = await api.getPosts(auth.token);
		const conta = posts.data.length - currentPostsNumber;
		valor2 = conta;

		if (conta > 0) setShow(true);
		setValor(conta);
	}, [15000]);

	return (
		<NewPostsBarStyle show={show} onClick={() => window.location.reload()}>
			<p>{valor} new posts, load more!</p>
		</NewPostsBarStyle>
	);
}
