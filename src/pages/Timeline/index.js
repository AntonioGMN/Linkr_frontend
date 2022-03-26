import Container from "../../components/container";
import { MainStyle, Column } from "../../components/mainStyle";
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
			<MainStyle>
				<Column>
					<CreatePostCard />
					<Posts />
				</Column>
				<Trending />
			</MainStyle>
		</Container>
	);
}
