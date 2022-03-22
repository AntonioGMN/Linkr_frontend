import MainDesktop from "../../components/mainDesktop";

import Title from "../Title";
import Trending from "../trending";
import Conteiner from "../../components/conteiner";
import { Posts, Post } from "../../components/posts";

export default function Tineline() {
	return (
		<Conteiner>
			<Title palavra="timeline"></Title>
			<MainDesktop>
				<Posts>
					<Post></Post>
					<Post></Post>
					<Post></Post>
					<Post></Post>
					<Post></Post>
				</Posts>
				<Trending />
			</MainDesktop>
		</Conteiner>
	);
}
