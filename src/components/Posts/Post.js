import PostStyle from "../postsComponents/postStyled";
import Snippet from "../postsComponents/snippet";
import PostDeletionModal from "../postsComponents/PostDeletionModal";
import Curtidas from "../curtidas";
import { useState, useRef } from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth"
import api from "../../services/api"
import { AiOutlineHeart as CurtidaIcon } from "react-icons/ai";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Post({ list }) {
	const { auth } = useAuth();

	const [deletionModalIsOpen, setDeletionModalIsOpen] = useState(false);
	const [deletingPost, setDeletingPost] = useState(false);
	const [postToBeDeletedId, setPostToBeDeletedId] = useState(null);

	const [editing, setEditing] = useState(false);
	const [text, setText] = useState()
	const inputFocus = useRef(null);

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

	function editPost(postId) {
		inputFocus.current.focus();
		console.log(inputFocus.current)
		console.log(postId)
		setEditing(true)
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

			{list.map((p) => 
				<PostStyle key={p.id}>
					{ // A user can only delete your own posts
					p.name === auth.userName && 
					(<div className="icons">
						<FaPencilAlt
							className="edit-icon"
							size={20}
							style={{fill: 'white'}}
							onClick={() => {
								editPost(p.id);
								setDeletionModalIsOpen(true);
							}}
						/>
						<FaTrash
							className="trash-icon"
							size={20}
							style={{fill: 'white'}}
							onClick={() => {
								setPostToBeDeletedId(p.id);
								setDeletionModalIsOpen(true);
							}}
						/>
				</div>)}

					<section>
						<img src={p.pictureUrl} alt="erro" />
						<Curtidas>
							<span>
								<CurtidaIcon size={30} style={{fill: "white"}} />
								Curtidas
							</span>
						</Curtidas>
					</section>
					<div>
						<Link to={`/users/${p.authorId}`}>{p.name}</Link>
						{editing ? (
							<textarea
								value={p.text}
								ref={inputFocus}
							/>
						) : (
							<span>
								{p.text}{" "}
								{p.hashtags.map((h) => {
									return <strong key={uuidv4()}>#{h} </strong>;
								})}
							</span>
						)}
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
