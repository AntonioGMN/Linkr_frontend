import Container from "../../components/container";
import MainDesktop from "../../components/mainDesktop";
import Header from "../../components/Header";

import Title from "../Title";
import Trending from "../trending";
import Posts from "../Posts";
import CreatePostCard from "./components/CreatePostCard";

export default function Timeline() {
	return (
		<Container>
			<Header />
			<Title text="timeline" />
			<MainDesktop>
				<div>
					<CreatePostCard />
					<Posts />
				</div>
				<Trending />
			</MainDesktop>
		</Container>
	);
}
