import Container from "../../components/container";
import { MainStyle, Column } from "../../components/mainStyle";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Title from "../Title";
import Trending from "../trending";
import Posts from "../../components/Posts";
import Search from "../Search";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Hashtag() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);
  const { auth } = useAuth();
  const { hashtag } = useParams();

  useEffect(() => {
    const promise = api.getPostsByHashtag({ hashtag, token: auth.token });
    promise.then((response) => {
      setPosts(response.data)});
    promise.catch(() => setIsError(true));
  }, [auth.token, hashtag]);

  return (
    <Container>
      <Header />
      <Title text={"#" + hashtag} />
      <MainStyle>
        <Column>
          <Posts isError={isError} posts={posts} />
        </Column>
        <Trending />
      </MainStyle>
    </Container>
  );
}
