import PostStyle from "../postsComponents/postStyled";
import Snippet from "../postsComponents/snippet";
import { useEffect, useState } from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { LikeAction, CommentAction, RepostAction } from "../postActions";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import useTrending from "../../hooks/useTrending";
import ReactHashtag from "@mdnm/react-hashtag";
import styled from "styled-components";

export default function Post({
	postData,
	auth,
	setDeletionModalIsOpen,
	setPostToBeDeletedId,
	userLikes,
	toggleLike,
	setPostToBeSharedId,
	likeCount, 
	index,
	setRepostModalIsOpen
	}) {
		
	const { hashtags, setHashtags } = useTrending();
	const [editing, setEditing] = useState(false);
	const [loading, setloading] = useState(false);
	const [data, setData] = useState(postData);
	const [text, setText] = useState(data.text);
  const navigate = useNavigate();
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
				<LikeAction
					isLiked={userLikes[index]}
					count={likeCount[index]}
					onClick={() => toggleLike(data.id, index)}
				/>
				<CommentAction
					onClick={() => alert("Not implemented yet!")}
					count={index}
				/>
				<RepostAction
					count={parseInt(data.repostCount?.count)}
					onClick={() => {
						setPostToBeSharedId(data.id);
						setRepostModalIsOpen(true);
					}}
				/>
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
				<Text editing={editing}>
					<ReactHashtag
						onHashtagClick={(val) => navigate("/hashtag/" + val.substr(1))}
					>
						{data.text}
					</ReactHashtag>
				</Text>
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

const Text = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-size: 17px;
  line-height: 20px;

  color: #b7b7b7;

	display: ${({editing}) => editing ? "none" : "inline"};

  span {
    font-weight: bold;
    color: #fff;
  }
`;
