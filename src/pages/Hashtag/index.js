import Container from "../../components/container";
import { MainStyle, Column } from "../../components/mainStyle";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Title from "../Title";
import Trending from "../trending";
import Posts from "../../components/Posts";
import { useEffect, useState } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function Hashtag() {
	const [posts, setPosts] = useState([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const { hashtag } = useParams();
	const { auth } = useAuth();

	useEffect(() => {
		const promise = api.getPostsByHashtag(hashtag, 1, auth.token);
		promise.then((response) => {
			setPosts(response.data);
			setIsLoading(false);
		});
		promise.catch((err) => console.log(err.message));
	}, [auth.token, hashtag]);

	return (
		<Container>
			<Header />
			<Title text={"#" + hashtag} />
			<MainStyle>
				<Column>
					{isLoading ? <div>Loading</div> : <Posts hashtage={posts} />}
				</Column>
				<Trending />
			</MainStyle>
		</Container>
	);
}
