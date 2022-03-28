import Container from "../../components/container";
import { MainStyle, Column } from "../../components/mainStyle";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

import Title from "../Title";
import Trending from "../trending";
import Posts from "../Posts";
import Search from "../Search";

export default function Hashtag() {
  const { hashtag } = useParams();
  console.log(hashtag);
  return (
    <Container>
      <Header />
      <Search page="timeline"></Search>
      <Title text={"#" + hashtag} />
      <MainStyle>
        <Column>
          <Posts />
        </Column>
        <Trending />
      </MainStyle>
    </Container>
  );
}
