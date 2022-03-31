import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import PostsStyle from "../../components/postsComponents/postsStyled";
import ErroMensagem from "../../components/postsComponents/erroMensagem";
import api from "../../services/api";
import Post from "../../components/Posts/Post";
import Container from "../../components/container";
import { MainStyle } from "../../components/mainStyle";
import DivStyle from "../../components/divStyle";
import Header from "../../components/Header";
import { Column } from "../../components/mainStyle";
import Posts from "../../components/Posts";

import Title from "../Title";
import Trending from "../trending";

import Search from "../Search";

export default function UserPosts() {
	const { auth } = useAuth();
	const [posts, setPosts] = useState(null);
	const [user, setUser] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const promiseUser = api.getUserById(id, auth.token);
		promiseUser.then((response) => setUser(response.data));
		promiseUser.catch((err) => console.log(err.message));
	}, [id]);

	useEffect(() => {
		const promisePosts = api.getPostsId(id, auth.token);
		promisePosts.then((response) => setPosts(response.data));
		promisePosts.catch(() => console.log(promisePosts));
	}, [id]);

	if (user !== null && posts !== null) {
		return (
			<>
				<Header />
				<Container>
					<Search page="timeline"></Search>
					<DivStyle>
						<img src={user.pictureUrl}></img>
						<Title text={user.name} />
					</DivStyle>
					<MainStyle>
						{posts.length === 0 ? (
							<PostsStyle>
								<ErroMensagem>There are no posts yet</ErroMensagem>
							</PostsStyle>
						) : (
							<Column id="haveScholl">
								<Posts />
							</Column>
						)}
						<Trending />
					</MainStyle>
				</Container>
			</>
		);
	}

	return (
		<>
			<Header />
			<Container>
				<Search page="timeline"></Search>
				<MainStyle>
					<PostsStyle>
						<ErroMensagem>Loading</ErroMensagem>
					</PostsStyle>
					<Trending />
				</MainStyle>
			</Container>
		</>
	);
}
