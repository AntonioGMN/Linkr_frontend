import PostDeletionModal from "../postsComponents/PostDeletionModal";
import { useState } from "react";
import useAuth from "../../hooks/useAuth"
import api from "../../services/api"
import Post from "./Post";

export default function PostsList({ list }) {
	const { auth } = useAuth();

	const [deletionModalIsOpen, setDeletionModalIsOpen] = useState(false);
	const [deletingPost, setDeletingPost] = useState(false);
	const [postToBeDeletedId, setPostToBeDeletedId] = useState(null);

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

	const postDeletionModalProps = {
		deletionModalIsOpen,
		setDeletionModalIsOpen,
		deletingPost,
		postToBeDeletedId,
		deletePost,
	}

	const postProps = {
		auth,
		setDeletionModalIsOpen,
		setPostToBeDeletedId,
	}

	return (
		<>
			<PostDeletionModal {... postDeletionModalProps} />

			{
				list.map((postData) => (
					<Post {... postProps} postData={postData}/>
				))
			}
		</>
	);
}
