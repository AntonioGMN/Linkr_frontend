import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import PostsStyle from "../../components/postsComponents/postsStyled";
import ErroMensagem from "../../components/postsComponents/erroMensagem";
import { getPostsId } from "../../services/api";
import Post from "../Posts/Post";
import Container from "../../components/container";
import { MainStyle } from "../../components/mainStyle";
import DivStyle from "../../components/divStyle";

import Title from "../Title";
import Trending from "../trending";

export default function UserPosts() {
	const { auth } = useAuth();

	const [posts, setPosts] = useState(null);
	const [isError, setIsError] = useState(false);
	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		const promise = getPostsId(id, auth.token);
		console.log(promise);
		promise.then((response) => {
			console.log(promise);
			setPosts(response.data);
		});
		promise.catch(() => {
			console.log(promise);
			setIsError(true);
		});
	}, []);
	console.log(isError);

	if (posts === null) {
		return (
			<PostsStyle>
				<ErroMensagem>Loading</ErroMensagem>
			</PostsStyle>
		);
	}

	if (posts !== null) {
		if (posts.length === 0) {
			return (
				<Container>
					<Title text="timeline" />
					<MainStyle>
						<PostsStyle>
							<ErroMensagem>There are no posts yet</ErroMensagem>
						</PostsStyle>
						<Trending />
					</MainStyle>
				</Container>
			);
		} else {
			return (
				<Container>
					<DivStyle>
						<img src={posts[0].pictureUrl}></img>
						<Title text={`${posts[0].name}` + "`s posts"} />
					</DivStyle>
					<MainStyle>
						<PostsStyle>
							<Post list={posts} />
						</PostsStyle>
						<Trending />
					</MainStyle>
				</Container>
			);
		}
	}
}
