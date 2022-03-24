import { PostsStyle } from "../../components/posts";
//import Curtidas from "../../components/curtidas";
//import { AiOutlineHeart as CurtidaIcon } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getPosts } from "../../Services/axiosServices";
import Post from "./Post";

export default function Posts() {
	const [posts, setPosts] = useState(null);

	console.log(posts);

	async function pegar() {
		try {
			const promise = await getPosts();
			return setPosts(promise);
		} catch (err) {
			console.log(err);
			alert(
				"An error occured while trying to fetch the posts, please refresh the page"
			);
		}
	}

	useEffect(() => {
		pegar();
	}, []);

	//console.log("typeof " + typeof posts);
	if (posts === null) {
		return <PostsStyle>Carregando</PostsStyle>;
	}

	if (posts !== null) {
		console.log(posts);
		if (posts.length === 0) {
			return (
				<PostsStyle>
					<h2>There are no posts yet</h2>
				</PostsStyle>
			);
		} else {
			return (
				<PostsStyle>
					<Post list={posts} />
				</PostsStyle>
			);
		}
	}

	// return (
	// 	<PostsStyle>
	// 		<Post />
	// 	</PostsStyle>
	// );
}
