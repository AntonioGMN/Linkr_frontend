import Container from "../../components/container";
import { MainStyle, Column } from "../../components/mainStyle";

import Title from "../Title";
import Trending from "../trending";
import Posts from "../Posts";
import CreatePostCard from "./components/CreatePostCard";

export default function Tineline() {
	return (
		<Container>
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
