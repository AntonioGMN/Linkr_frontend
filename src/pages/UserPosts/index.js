import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import PostsStyle from "../../components/postsComponents/postsStyled";
import ErroMensagem from "../../components/postsComponents/erroMensagem";
import api from "../../services/api";
import Post from "../Posts/Post";
import Container from "../../components/container";
import { MainStyle } from "../../components/mainStyle";
import DivStyle from "../../components/divStyle";

import Title from "../Title";
import Trending from "../trending";

import Header from "../../components/Header";
import Search from "../Search";

export default function UserPosts() {
	const { auth } = useAuth();

	const [posts, setPosts] = useState(null);
	const [user, setUser] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const promisePosts = api.getPostsId(id, auth.token);
		promisePosts.then((response) => setPosts(response.data));
		promisePosts.catch(() => console.log(promisePosts));
	}, [id]);

	useEffect(() => {
		const promiseUser = api.getUserById(id, auth.token);
		promiseUser.then((response) => setUser(response.data));
		promiseUser.catch((err) => console.log(err));
	}, [id]);

	if (posts === null) {
		return (
			<PostsStyle>
				<ErroMensagem>Loading</ErroMensagem>
			</PostsStyle>
		);
	}

	if (posts !== null) {
		if (posts.length === 0) {
			if (user !== null) {
				return (
					<Container>
						<DivStyle>
							<img src={user[0].pictureUrl}></img>
							<Title text={user[0].name} />
						</DivStyle>
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
						<Title text="toto" />
						<MainStyle>
							<PostsStyle>
								<ErroMensagem>There are no posts yet</ErroMensagem>
							</PostsStyle>
							<Trending />
						</MainStyle>
					</Container>
				);
			}
		}
		{
			return (
				<Container>
					<Header />
					<Search page="timeline"></Search>
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
