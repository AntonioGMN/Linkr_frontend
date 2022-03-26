import Container from "../../components/container";
import MainDesktop from "../../components/mainDesktop";
import Header from "../../components/Header"

import Title from "../Title";
import Trending from "../trending";
import Posts from "../Posts";

export default function Timeline() {
	return (
		<Container>
			<Header />
			<Title text="timeline" />
			<MainDesktop>
				<Posts />
				<Trending />
			</MainDesktop>
		</Container>
	);
}
