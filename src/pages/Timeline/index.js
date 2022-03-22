import MainDesktop from "../../components/mainDesktop";

import Title from "../Title";
import Trending from "../trending";
import Container from "../../components/container";
import { Posts, Post } from "../../components/posts";

export default function Timeline() {
  return (
    <Container>
      <Title title="timeline"></Title>
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
    </Container>
  );
}
