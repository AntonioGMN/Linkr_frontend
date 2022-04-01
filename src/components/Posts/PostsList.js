import PostModal from "../postsComponents/PostModal";
import { useState } from "react";
import useAuth from "../../hooks/useAuth"
import api from "../../services/api"
import Post from "./Post";

export default function PostsList({ list }) {
	const { auth } = useAuth();

	const [deletionModalIsOpen, setDeletionModalIsOpen] = useState(false);
	const [deletingPost, setDeletingPost] = useState(false);
	const [postToBeDeletedId, setPostToBeDeletedId] = useState(null);

	const [repostModalIsOpen, setRepostModalIsOpen] = useState(false);
	const [reposting, setReposting] = useState(false);
	const [postToBeSharedId, setPostToBeSharedId] = useState(null);

	async function deletePost(id) {
		setDeletingPost(true);

		try {
			await api.deletePost(id, auth.token);
			setDeletionModalIsOpen(false);
			window.location.reload();
			setDeletingPost(false);
		} catch (error) {
			alert(error.response.data);
			setDeletionModalIsOpen(false);
			setDeletingPost(false);
		}
	}

	
	function isLikedByUser(post) {
		return post.likes.map(l => l.userId).includes(auth.userId);
	}

	const [userLikes, setUserLikes] = useState(
		list.map(isLikedByUser)
	);

	const [likeCount, setLikeCount] = useState(
		list.map(p => p.likes.length)
	);

	const [toggleLikeLock, setToggleLikeLock] = useState(false);

	async function toggleLike(id, index) {
		if(toggleLikeLock) return;

		setToggleLikeLock(true);

		try {
			await api.toggleLikePost(id, auth.token);
			
			const newUserLikes = [...userLikes];
			newUserLikes[index] = !userLikes[index];
			setUserLikes(newUserLikes);

			const newLikeCount = [...likeCount];
			newLikeCount[index] = userLikes[index] ?
				likeCount[index] - 1 :
				likeCount[index] + 1;
			setLikeCount(newLikeCount);

			setToggleLikeLock(false);
		} catch (error) {
			alert(error.response.data);
			setToggleLikeLock(false);
		}
	}

	async function repost(id) {
		setReposting(true);

		try {
			await api.repost(id, auth.token);
			setRepostModalIsOpen(false);
			window.location.reload();
			setReposting(false);
		} catch (error) {
			alert(error.response.data);
			setRepostModalIsOpen(false);
			setReposting(false);
		}
	}

	const postDeletionModalProps = {
		modalIsOpen: deletionModalIsOpen,
		setModalIsOpen: setDeletionModalIsOpen,
		loading: deletingPost,
		loadingText: "Deleting post...",
		action: () => deletePost(postToBeDeletedId),
		cancelText: "No, go back",
		confirmText: "Yes, delete it",
	}

	const repostModalProps = {
		modalIsOpen: repostModalIsOpen,
		setModalIsOpen: setRepostModalIsOpen,
		loading: reposting,
		loadingText: "Re-posting...",
		action: () => repost(postToBeSharedId),
		cancelText: "No, cancel",
		confirmText: "Yes, share!",
	}

	const postProps = {
		auth,
		setDeletionModalIsOpen,
		setPostToBeDeletedId,
		userLikes,
		toggleLike,
		setPostToBeSharedId,
		likeCount, 
		setLikeCount,
		setRepostModalIsOpen,
	}

	return (
		<>
			<PostModal {...postDeletionModalProps}>
				Are you sure you want
				<br /> to delete this post?
			</PostModal>

			<PostModal {...repostModalProps}>
				Do you want to re-post
				<br /> this link?
			</PostModal>

			{
				list.map((postData, index) => (
					<Post {... postProps} postData={postData} index={index}/>
				))
			}
		</>
	);
}
