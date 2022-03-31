import useInterval from "use-interval";
import NewPostsBarStyle from "./style";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

export default function NewPostsBar() {
	const { auth } = useAuth();
	const [currentPostsNumber, setCurrentPostsNumber] = useState(null);
	//let currentPostsNumber = 0;
	const [valor, setValor] = useState(0);
	let show = false;

	// useEffect(async () => {
	// 	const posts = await api.getPosts(auth.token);
	// 	currentPostsNumber = posts.data.length;
	// 	//setCurrentPostsNumber(posts.data.length);
	// });

	useInterval(async () => {
		const posts = await api.getPosts(auth.token);
		//const conta = posts.data.length - currentPostsNumber;
		//setValor(conta);
		console.log(`valor=${posts.data.length}-${currentPostsNumber}=${valor}`);
	}, [3000]);

	return (
		<NewPostsBarStyle show={show} onClick={() => window.location.reload()}>
			<p>{valor} new posts, load more!</p>
		</NewPostsBarStyle>
	);
}
