import { useEffect, useState } from "react";
import PostsStyle from "../postsComponents/postsStyled";
import InfiniteScroll from "react-infinite-scroll-component";
import ErroMensagem from "../postsComponents/erroMensagem";
import Post from "./Post";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function Posts() {
	const { auth } = useAuth();
	const [posts, setPosts] = useState(null);
	const [isError, setIsError] = useState(false);

	const [hasMore, sethasMore] = useState(true);

	const [page, setpage] = useState(2);

	function getposts() {
		const promise = api.getPosts(auth.token);
		promise.then((response) => {
			setPosts(response.data);
		});
		promise.catch(() => setIsError(true));
	}

	useEffect(getposts, []);

	if (posts === null && isError) {
		return (
			<PostsStyle>
				<ErroMensagem>
					An error occured while trying to fetch the posts, please refresh the page
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

	const fetchPosts = async () => {
		const res = await api.getPostsPage(page, auth.token);
		const data = await res.data;
		return data;
	};

	const fetchData = async () => {
		const PostsFormServer = await fetchPosts();
		console.log(PostsFormServer);

		setPosts([...posts, ...PostsFormServer]);
		if (PostsFormServer.length === 0 || PostsFormServer.length < 20) {
			sethasMore(false);
		}
		setpage(page + 1);

		console.log("toto");
	};

	if (posts !== null) {
		if (posts.length === 0) {
			return (
				<PostsStyle>
					<ErroMensagem>There are no posts yet</ErroMensagem>
				</PostsStyle>
			);
		} else {
			return (
				// <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}>
				<InfiniteScroll
					scrollableTarget="haveScholl"
					dataLength={posts.length} //This is important field to render the next data
					next={fetchData}
					hasMore={hasMore}
					loader={
						<div className="loader" key={0}>
							Loading ...
						</div>
					}
				>
					<PostsStyle>
						<Post list={posts} />{" "}
					</PostsStyle>
				</InfiniteScroll>
				// </div>
			);
		}
	}
}
