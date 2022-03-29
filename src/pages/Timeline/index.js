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
	const [currentPostsNumber, setCurrentPostsNumber] = useState(0);

	function getNewPosts() {
		const promise = api.getPosts(auth.token);
		promise.then((response) => {
			if (response.data.length > currentPostsNumber)
				setCurrentPostsNumber(response.data.length);
		});
		promise.catch(() => setIsError(true));
	}

	//SetInterval.start(getNewPosts, 1000, "test");

	useEffect(() => {
		const promise = api.getPosts(auth.token);
		promise.then((response) => {
			setPosts(response.data);
			setCurrentPostsNumber(response.data.length);
		});
		promise.catch(() => setIsError(true));
	}, []);

	return (
		<Container>
			<Header />
			<Search page="timeline"></Search>
			<Title text="timeline" />
			<MainStyle>
				<Column>
					<CreatePostCard />
					<NewPostsBar></NewPostsBar>
					<Posts isError={isError} posts={posts} />
				</Column>
				<Trending />
			</MainStyle>
		</Container>
	);
}
