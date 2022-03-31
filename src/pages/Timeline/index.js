import Container from "../../components/container";
import { MainStyle, Column } from "../../components/mainStyle";
import Header from "../../components/Header";
import Title from "../Title";
import Trending from "../trending";
import Posts from "../../components/Posts";
import CreatePostCard from "../../components/CreatePostCard";
import Search from "../Search";
import NewPostsBar from "../../components/newPosts";
//import InfiniteScroll from "react-infinite-scroller";

import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import api, { getPosts } from "../../services/api";

//import SetInterval from "set-interval";
import useInterval from "use-interval";

export default function Timeline() {
	const { auth } = useAuth();

	const [posts, setPosts] = useState(null);
	const [isError, setIsError] = useState(false);

	function getpots() {
		const promise = api.getPosts(auth.token);
		promise.then((response) => {
			setPosts(response.data);
		});
		promise.catch(() => setIsError(true));
	}

	useEffect(getpots, []);

	// const [newPostsNumber, setNewPostsNumber] = useState(0);
	// const [currentPostsNumber, setCurrentPostsNumber] = useState(0);
	// //let currentPostsNumber;

	// useInterval(() => {
	// 	setInterval(() => {
	// 		// const promise = api.getPosts(auth.token);
	// 		// promise.then((response) => {
	// 		// 	const valor = response.data.length - currentPostsNumber;
	// 		// 	setNewPostsNumber(valor);
	// 		// }, 15000);
	// 		console.log("currentPostsNumber " + currentPostsNumber);
	// 		console.log("newPostsNumber " + newPostsNumber);
	// 	}, [15000]);
	// }, []);

	// SetInterval.start(
	// 	() => {
	// 		const promise = api.getPosts(auth.token);
	// 		promise.then((response) => {
	// 			const valor = response.data.length - currentPostsNumber;
	// 			setNewPostsNumber(valor);
	// 		});
	// 	},
	// 	2000,
	// 	"test"
	// );

	return (
		<>
			<Header />
			<Container>
				<Search page="timeline"></Search>
				<Title text="timeline" />
				<MainStyle>
					<Column id="haveScholl">
						<CreatePostCard />
						{/* <NewPostsBar /> */}
						<Posts />
					</Column>
					<Trending />
				</MainStyle>
			</Container>
		</>
	);
}
