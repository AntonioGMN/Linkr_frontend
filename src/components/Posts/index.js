import { useEffect, useState } from "react";
import PostsStyle from "../postsComponents/postsStyled";
import InfiniteScroll from "react-infinite-scroll-component";
import ErroMensagem from "../postsComponents/erroMensagem";
import Post from "./Post";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function Posts({ id, hashtage }) {
	const { auth } = useAuth();
	const [posts, setPosts] = useState(null);
	const [isError, setIsError] = useState(false);

	const [hasMore, sethasMore] = useState(true);

	const [page, setpage] = useState(2);

	function getposts() {
		if (id !== undefined) {
			const promise = api.getPostsId(id, 1, auth.token);
			promise.then((response) => setPosts(response.data));
			promise.catch(() => setIsError(true));
		} else if (hashtage !== undefined) setPosts(hashtage);
		else {
			const promise = api.getPostsPage(1, auth.token);
			promise.then((response) => {
				setPosts(response.data);
			});
			promise.catch(() => setIsError(true));
		}
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
		if (id != undefined) {
			const res = await api.getPostsId(id, page, auth.token);
			const data = await res.data;
			return data;
		} else if (hashtage != undefined) {
			const res = api.getPostsByHashtag(hashtage[0].text, page, auth.token);
			const data = await res.data;
			return data;
		} else {
			const res = await api.getPostsPage(page, auth.token);
			const data = await res.data;
			return data;
		}
	};

	const fetchData = async () => {
		const newPosts = await fetchPosts();

		setPosts([...posts, ...newPosts]);
		if (newPosts.length === 0 || newPosts.length < 10) {
			sethasMore(false);
		}
		setpage(page + 1);
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
			);
		}
	}
}
