import Container from "../../components/container";
import { MainStyle, Column } from "../../components/mainStyle";
import Header from "../../components/Header";
import Title from "../Title";
import Trending from "../trending";
import Posts from "../../components/Posts";
import CreatePostCard from "../../components/CreatePostCard";
import Search from "../Search";
import NewPostsBar from "../../components/newPosts";

import SetInterval from "set-interval";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function Timeline() {
	const { auth } = useAuth();

	const [posts, setPosts] = useState(null);
	const [isError, setIsError] = useState(false);
	const [newPostsNumber, setNewPostsNumber] = useState(0);
	let currentPostsNumber;

	useEffect(() => {
		const promise = api.getPosts(auth.token);
		promise.then((response) => {
			setPosts(response.data);
			currentPostsNumber = response.data.length;
		});
		promise.catch(() => setIsError(true));
	}, []);

	SetInterval.start(
		() => {
			const promise = api.getPosts(auth.token);
			promise.then((response) => {
				const valor = response.data.length - currentPostsNumber;
				setNewPostsNumber(valor);
			});
		},
		15000,
		"test"
	);

	return (
		<Container>
			<Header />
			<Search page="timeline"></Search>
			<Title text="timeline" />
			<MainStyle>
				<Column>
					<CreatePostCard />
					<NewPostsBar NewPostsNumber={newPostsNumber}></NewPostsBar>
					<Posts isError={isError} posts={posts} />
				</Column>
				<Trending />
			</MainStyle>
		</Container>
	);
}
