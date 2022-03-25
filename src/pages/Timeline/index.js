import MainDesktop from "../../components/mainDesktop";

import Title from "../Title";
import Trending from "../trending";
import Container from "../../components/container";
import Header from "../../components/Header";
import { Posts, Post } from "../../components/posts";
import CreatePostCard from "./components/CreatePostCard";

export default function Timeline() {
  return (
    <Container>
      <Header />
      <Title title="timeline"></Title>
      <MainDesktop>
        <Posts>
          <CreatePostCard />
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
