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

export default function Timeline() {
	const { auth } = useAuth();

	const [posts, setPosts] = useState(null);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const promise = api.getPosts(auth.token);
		promise.then((response) => setPosts(response.data));
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
					<Posts isError={isError} posts={posts} />
				</Column>
				<Trending />
			</MainStyle>
		</Container>
	);
}
