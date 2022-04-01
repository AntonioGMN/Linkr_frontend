import PostStyle from "../postsComponents/postStyled";
import Snippet from "../postsComponents/snippet";
import Curtidas from "../curtidas";
import { useEffect, useState } from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { AiOutlineHeart as CurtidaIcon } from "react-icons/ai";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import api from "../../services/api";
import useTrending from "../../hooks/useTrending";

export default function Post({
	postData,
	auth,
	setDeletionModalIsOpen,
	setPostToBeDeletedId,
	}) {
		
	const { hashtags, setHashtags } = useTrending();
	const [editing, setEditing] = useState(false);
	const [loading, setloading] = useState(false);
	const [data, setData] = useState(postData);
	const [text, setText] = useState(data.text);
	const inputFocus = useRef(null);

	function handleClick() {
		if (!editing) {
			setText(data.text);
		}
		setEditing(!editing);
	}

	function handleChange(e) {
		setText(e.target.value);
	}

	async function handleKeyDown(e) {
		if (e.key === "Escape") {
			return setEditing(false);
		}

		if (e.key === "Enter") {
			setloading(true);

			try {
				const { data: newText } = await api.editPost(data.id, text, auth.token);
				setData({ ...data, text: newText });
			} catch (error) {
				alert("Wasn't possible to update your post, please try again");
			}

			setloading(false);
			return setEditing(false);
		}
	}

	useEffect(() => {
		inputFocus.current.focus();
	}, [editing]);

	useEffect(() => {
		setHashtags([...hashtags]);
	}, [data]);

	return (
		<PostStyle key={data.id} editing={editing}>
			{
				data.name === auth.userName && 
				(<div className="icons">
					<FaPencilAlt
						className="edit-icon"
						size={20}
						style={{fill: 'white'}}
						onClick={handleClick}
					/>
					<FaTrash
						className="trash-icon"
						size={20}
						style={{fill: 'white'}}
						onClick={() => {
							setPostToBeDeletedId(data.id);
							setDeletionModalIsOpen(true);
						}}
					/>
				</div>)
			}

			<section>
				<img src={data.pictureUrl} alt="erro" />
				<Curtidas>
					<span>
						<CurtidaIcon size={30} style={{fill: "white"}} />
						Curtidas
					</span>
				</Curtidas>
			</section>
			<div>
				<Link to={`/users/${data.authorId}`}>{data.name}</Link>
				<textarea
					style={{display: editing ? "flex" : "none"}}
					value={text}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					disabled={loading}
					ref={inputFocus}
				/>
				<span style={{display: editing ? "none" : "inline"}}>
					{data.text}{" "}
					{data.hashtags?.map((h) => {
						return <strong key={uuidv4()}>#{h} </strong>;
					})}
				</span>
				<Snippet href={data.link} target="_blank">
					<div>
						<p>{data.linkTitle}</p>
						<span>{data.linkDescription}</span>
						<p>{data.link}</p>
					</div>
					<img src={data.linkImage} alt="erro"></img>
				</Snippet>
			</div>
		</PostStyle>
	)
}
