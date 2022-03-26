import Container from "../../components/container";
import { MainStyle, Column } from "../../components/mainStyle";

import Title from "../Title";
import Trending from "../trending";
import Posts from "../Posts";
import CreatePostCard from "./components/CreatePostCard";
import Search from "../Search";

export default function Tineline() {
	return (
		<Container>
			<Search></Search>
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
