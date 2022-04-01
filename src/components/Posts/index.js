import PostsStyle from "../postsComponents/postsStyled";
import ErroMensagem from "../postsComponents/erroMensagem";
import Post from "./Post";

export default function Posts({ posts, isError }) {
  if (posts === null && isError) {
    return (
      <PostsStyle>
        <ErroMensagem>
          An error occured while trying to fetch the posts, please refresh the
          page
        </ErroMensagem>
      </PostsStyle>
    );
  } else if (posts === null) {
    return (
      <PostsStyle>
        <ErroMensagem>Loading</ErroMensagem>
      </PostsStyle>
    );
  }

  if (posts !== null) {
    if (posts.length === 0) {
      return (
        <PostsStyle>
          <ErroMensagem>There are no posts yet</ErroMensagem>
        </PostsStyle>
      );
    } else {
      return (
        <PostsStyle>
          <Post list={posts} />{" "}
        </PostsStyle>
      );
    }
  }
}
