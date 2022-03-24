import Container from "../../components/container";
import MainDesktop from "../../components/mainDesktop";

import Title from "../Title";
import Trending from "../trending";

import Posts from "../Posts";

export default function Tineline() {
	return (
		<Container>
			<Title palavra="timeline"></Title>
			<MainDesktop>
				<Posts />
				<Trending />
			</MainDesktop>
		</Container>
	);
}
