import { PostsStyle, ErroMensagem } from "../../components/posts";
import { useEffect, useState } from "react";
import { getPosts } from "../../Services/axiosServices";
import Post from "./Post";

export default function Posts() {
	const [posts, setPosts] = useState(null);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const promise = getPosts();
		promise.then((response) => setPosts(response.data));
		promise.catch(() => setIsError(true));
	}, []);

	if (posts === null && isError) {
		return (
			<PostsStyle>
				<ErroMensagem>
					An error occured while trying to fetch the posts, please refresh the page
				</ErroMensagem>
			</PostsStyle>
		);
	} else if (posts === null) {
		return (
			<PostsStyle>
				<ErroMensagem>Loading</ErroMensagem>
			</PostsStyle>
		);
	}

	if (posts !== null) {
		if (posts.length === 0) {
			return (
				<PostsStyle>
					<ErroMensagem>There are no posts yet</ErroMensagem>
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
}