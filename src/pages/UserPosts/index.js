import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import Container from "../../components/container";
import PostsStyle from "../../components/postsComponents/postsStyled";
import ErroMensagem from "../../components/postsComponents/erroMensagem";
import { MainStyle } from "../../components/mainStyle";
import DivStyle from "../../components/divStyle";
import Header from "../../components/Header";
import Title from "../Title";
import Trending from "../trending";
import Posts from "../../components/Posts";
import FollowButton from "../../components/FollowButton";

export default function UserPosts() {
  const { auth } = useAuth();

  const [posts, setPosts] = useState(null);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({
    pictureUrl: "https://http.cat/404",
    name: "Anon",
  });
  const { id } = useParams();

  useEffect(() => {
    api.getUserById(id,auth.token).then((res) => {
      setUser(res.data);
    })
    api
      .getPostsByUserId(id, auth.token)
      .then((response) => setPosts(response.data))
      .catch(() => {
        setPosts(null);
        setIsError(true)
      });
  }, [auth.token, id]);

	if (!posts || posts.length === 0) {
    return (
      <Container>
        <Header />
        <DivStyle>
          <img src={user.pictureUrl} alt="avatar"></img>
          <Title text={`${user.name}’s posts`} />
          <FollowButton userId={id} auth={auth} />
        </DivStyle>
        <MainStyle>
          <PostsStyle>
            <ErroMensagem>There are no posts yet</ErroMensagem>
          </PostsStyle>
          <Trending />
        </MainStyle>
      </Container>
    );
  } else {
    return (
      <Container>
        <Header />
        <DivStyle>
          <img src={user.pictureUrl} alt="avatar"></img>
          <Title text={`${user.name}’s posts`} />
          <FollowButton userId={id} auth={auth} />
        </DivStyle>
        <MainStyle>
          <Posts isError={isError} posts={posts} />
          <div>
            <Trending />
          </div>
        </MainStyle>
      </Container>
    );
  }
}

