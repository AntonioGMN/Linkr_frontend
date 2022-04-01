import Container from "../../components/container";
import { MainStyle, Column } from "../../components/mainStyle";
import Header from "../../components/Header";

import Title from "../Title";
import Trending from "../trending";
import Posts from "../../components/Posts";
import CreatePostCard from "../../components/CreatePostCard";
import Search from "../Search";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import ErroMensagem from "../../components/postsComponents/erroMensagem";
import PostsStyle from "../../components/postsComponents/postsStyled";
import NewPostsBar from "../../components/notification";

export default function Timeline() {
	const { auth } = useAuth();

	const [posts, setPosts] = useState(null);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState(
		"An error occured while trying to fetch the posts, please refresh the page"
	);

	useEffect(() => {
		const promise = api.getPosts(auth.token);
		promise.then((response) => setPosts(response.data));
		promise.catch((err) => {
			setIsError(true);
			setErrorMessage(err.response.data);
		});
	}, []);

	return (
		<Container>
			<Header />
			<Search page="timeline"></Search>
			<Title text="timeline" />
			<MainStyle>
				<Column>
					<CreatePostCard />
					<NewPostsBar />
					{isError ? (
						<PostsStyle>
							<ErroMensagem>{errorMessage}</ErroMensagem>
						</PostsStyle>
					) : (
						<Posts isError={isError} posts={posts} />
					)}
				</Column>
				<Trending />
			</MainStyle>
		</Container>
	);
}
