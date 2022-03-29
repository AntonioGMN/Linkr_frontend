import PostStyle from "../postsComponents/postStyled";
import Snippet from "../postsComponents/snippet";
import Curtidas from "../curtidas";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Modal from "react-modal";
import useAuth from "../../hooks/useAuth"
import api from "../../services/api"
import { ModalText, ModalButtonsDiv, ModalButton } from "../../components/postsComponents/postStyled";
import { AiOutlineHeart as CurtidaIcon } from "react-icons/ai";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

		width: '597px',
		height: '262px',
		borderRadius: '50px',
		background: '#333333',

		fontWeight: 700,
		fontSize: '34px',
		color: '#ffffff',
		textAlign: "center",
  },
};

export default function Post({ list }) {
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

	Modal.setAppElement(".root");

	return list.map((p) => {
		return (
			<PostStyle key={p.id}>
				{ // A user can only delete your own posts
				p.name === auth.userName && 
				(<FaTrash
					className="trash-icon"
					size={20}
					style={{fill: 'white'}}
					onClick={() => {
						setPostToBeDeletedId(p.id);
						setDeletionModalIsOpen(true);
					}}
				/>)}
				
				<Modal isOpen={deletionModalIsOpen} style={customStyles}>
					{deletingPost ? <ModalText>Deleting post...</ModalText> :
					(<>
						<ModalText>
							Are you sure you want
							<br /> to delete this post?
						</ModalText>
						<ModalButtonsDiv>
							<ModalButton cancel onClick={() => setDeletionModalIsOpen(false)}>
								No, go back
							</ModalButton>
							<ModalButton onClick={() => deletePost(postToBeDeletedId)}>Yes, delete it</ModalButton>
						</ModalButtonsDiv>
					</>)}
				</Modal>

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
		);
	});
}
