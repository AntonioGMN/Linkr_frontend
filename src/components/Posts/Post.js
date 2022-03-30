import PostStyle from "../postsComponents/postStyled";
import Snippet from "../postsComponents/snippet";
import PostDeletionModal from "../postsComponents/PostDeletionModal";
import Curtidas, { LikedIcon, NotLikedIcon } from "../curtidas";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Post({ list }) {
	const { auth } = useAuth();

	const [deletionModalIsOpen, setDeletionModalIsOpen] = useState(false);
	const [deletingPost, setDeletingPost] = useState(false);
	const [postToBeDeletedId, setPostToBeDeletedId] = useState(null);
	
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
		setTimeout(() => setToggleLikeLock(false), 500);

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
		} catch (error) {
			alert(error.response.data);
		}
	}

	function likeTooltip(post) {
		const userNames = post.likes
			.map(like => like.userId === auth.userId ? "You" : like.userName)
			.sort((a, _) => a === "You" ? -1 : 1);
			
		switch (userNames.length) {
			case 0:
				return "Nobody";
			case 1:
				return `${userNames[0]}`;
			case 2:
				return `${userNames[0]}, ${userNames[1]}`;
			default:
				return `${userNames[0]}, ${userNames[1]} and other ${userNames.length - 2}`;
		}
	}

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

	return (
		<>
			<PostDeletionModal {... postDeletionModalProps} />

			{list.map((p, index) =>
				<PostStyle key={p.id}>
					{ // A user can only delete your own posts
					p.authorId === auth.userId && 
					(<FaTrash
						className="trash-icon"
						size={20}
						style={{fill: 'white'}}
						onClick={() => {
							setPostToBeDeletedId(p.id);
							setDeletionModalIsOpen(true);
						}}
					/>)}

					<section>
						<img src={p.pictureUrl} alt="erro" />
						<Curtidas data-tip={likeTooltip(p)}>
							{userLikes[index] ?
								<LikedIcon onClick={() => toggleLike(p.id, index)} /> :
								<NotLikedIcon onClick={() => toggleLike(p.id, index)} />}
							<span onClick={() => alert(likeTooltip(p))}>
								{likeCount[index]} likes
							</span>

							<ReactTooltip className="like-tooltip" place="bottom" effect="solid" type="light">
							{likeTooltip(p)}
							</ReactTooltip>
						</Curtidas>
					</section>
					<div>
						<Link to={`/users/${p.authorId}`}>{p.name}</Link>
						<span>
							{p.text}{" "}
							{p.hashtags.map((h) => {
								return <strong key={uuidv4()}>#{h} </strong>;
							})}
						</span>
						<Snippet href={p.link} target="_blank">
							<div>
								<p>{p.linkTitle}</p>
								<span>{p.linkDescription}</span>
								<p>{p.link}</p>
							</div>
							<img src={p.linkImage} alt="erro"></img>
						</Snippet>
					</div>
				</PostStyle>
			)}
		</>
	);
}
