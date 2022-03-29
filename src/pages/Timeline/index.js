import Container from "../../components/container";
import { MainStyle, Column } from "../../components/mainStyle";
import Header from "../../components/Header";

import Title from "../Title";
import Trending from "../trending";
import Posts from "../Posts";
import CreatePostCard from "./components/CreatePostCard";
import Search from "../Search";
import NewPostsBar from "../../components/newPosts";

export default function Timeline() {
	return (
		<Container>
			<Header />
			<Search page="timeline"></Search>
			<Title text="timeline" />
			<MainStyle>
				<Column>
					<CreatePostCard />
					<NewPostsBar />
					<Posts />
				</Column>
				<Trending />
			</MainStyle>
		</Container>
	);
}
