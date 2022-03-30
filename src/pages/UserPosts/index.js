import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import Container from "../../components/container";
import { MainStyle } from "../../components/mainStyle";
import DivStyle from "../../components/divStyle";
import Header from "../../components/Header";
import Title from "../Title";
import Trending from "../trending";
import Posts from "../../components/Posts";

export default function UserPosts() {
  const { auth } = useAuth();

  const [posts, setPosts] = useState(null);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const promise = api.getPostsId(id, auth.token);
    console.log(promise);
    promise.then((response) => setPosts(response.data));
    promise.catch(() => setIsError(true));
  }, []);

  return (
    <Container>
      <Header />
      <DivStyle>
        {!posts ? (
          <>
            <img src={"https://http.cat/404"} alt="avatar"></img>
            <Title text={`anon's posts`} />
          </>
        ) : (
          <>
            <img src={posts[0]?.pictureUrl} alt="avatar"></img>
            <Title text={`${posts[0]?.name}'s posts`} />
          </>
        )}
      </DivStyle>
      <MainStyle>
        <Posts isError={isError} posts={posts} />
        <Trending />
      </MainStyle>
    </Container>
  );
}
