import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Modal from "react-modal";
import useAuth from "../../hooks/useAuth"
import api from "../../services/api"
import { PostStyle } from "../../components/posts";
import Curtidas from "../../components/curtidas";
import Button from "../../components/button";
import { AiOutlineHeart as CurtidaIcon } from "react-icons/ai";
import { Snippet } from "../../components/posts";
import { Link } from "react-router-dom";

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
  },
};

export default function Post({ list }) {
	const { auth } = useAuth();

	const [deletionModalIsOpen, setDeletionModalIsOpen] = useState(false);

	async function deletePost(id) {
		try {
			await api.deletePost(id, auth.token);
			window.location.reload();
		} catch (error) {
				alert(error.response.data);
				setDeletionModalIsOpen(false);
		}
	}

	return list.map((p) => {
		return (
			<PostStyle key={p.id}>
				<FaTrash
					className="trash-icon"
					size={20}
					style={{fill: 'white'}}
					onClick={() => setDeletionModalIsOpen(true)}
				/>
				
				<Modal isOpen={deletionModalIsOpen} style={customStyles}>
					<p>
						Are you sure you want
						<br /> to delete this post?
					</p>
					<div>
						<Button onClick={() => setDeletionModalIsOpen(false)}>
							No, go back
						</Button>
						<Button onClick={() => deletePost(p.id)}>Yes, delete it</Button>
					</div>
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
							return <strong>#{h} </strong>;
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
