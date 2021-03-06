import PostStyle, { PostContainer } from "../postsComponents/postStyled";
import Snippet from "../postsComponents/snippet";
import PostModal from "../postsComponents/PostModal";
import { LikeAction, CommentAction, RepostAction } from "../postActions";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import styled from "styled-components";
import ReactHashtag from "@mdnm/react-hashtag";
import { Link, useNavigate } from "react-router-dom";

export default function Post({ list }) {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [deletionModalIsOpen, setDeletionModalIsOpen] = useState(false);
  const [deletingPost, setDeletingPost] = useState(false);
  const [postToBeDeletedId, setPostToBeDeletedId] = useState(null);

  const [repostModalIsOpen, setRepostModalIsOpen] = useState(false);
  const [reposting, setReposting] = useState(false);
  const [postToBeSharedId, setPostToBeSharedId] = useState(null);

  function isLikedByUser(post) {
    return post.likes.map((l) => l.userId).includes(auth.userId);
  }

  const [userLikes, setUserLikes] = useState(list.map(isLikedByUser));

  const [likeCount, setLikeCount] = useState(list.map((p) => p.likes.length));

  const [toggleLikeLock, setToggleLikeLock] = useState(false);

  async function toggleLike(id, index) {
    if (toggleLikeLock) return;

    setToggleLikeLock(true);

    try {
      await api.toggleLikePost(id, auth.token);

      const newUserLikes = [...userLikes];
      newUserLikes[index] = !userLikes[index];
      setUserLikes(newUserLikes);

      const newLikeCount = [...likeCount];
      newLikeCount[index] = userLikes[index]
        ? likeCount[index] - 1
        : likeCount[index] + 1;
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
    modalIsOpen: deletionModalIsOpen,
    setModalIsOpen: setDeletionModalIsOpen,
    loading: deletingPost,
    loadingText: "Deleting post...",
    action: () => deletePost(postToBeDeletedId),
    cancelText: "No, go back",
    confirmText: "Yes, delete it",
  };

  const repostModalProps = {
    modalIsOpen: repostModalIsOpen,
    setModalIsOpen: setRepostModalIsOpen,
    loading: reposting,
    loadingText: "Re-posting...",
    action: () => repost(postToBeSharedId),
    cancelText: "No, cancel",
    confirmText: "Yes, share!",
  };

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

      {list.map((p, index) => (
        <PostContainer>
          {p.sharedById && 
            <div className="repost-label">
              <BiRepost className="icon" size={25} style={{fill: "white"}} />
              <p>
                Re-posted by {" "}
                <Link to={`/users/${p.sharedById}`}>
                  {p.sharedById === auth.userId ? "you" : p.sharedByName}
                </Link>
              </p>
            </div>}
          <PostStyle key={index}>
            {
              // A user can only delete your own posts
              p.authorId === auth.userId && (
                <FaTrash
                  className="trash-icon"
                  size={20}
                  style={{ fill: "white" }}
                  onClick={() => {
                    setPostToBeDeletedId(p.id);
                    setDeletionModalIsOpen(true);
                  }}
                />
              )
            }

            <section>
              <img src={p.pictureUrl} alt="erro" />
              <LikeAction
                isLiked={userLikes[index]}
                count={likeCount[index]}
                onClick={() => toggleLike(p.id, index)}
              />
              <CommentAction
                onClick={() => alert("Not implemented yet!")}
                count={0}
              />
              <RepostAction
                count={parseInt(p.repostCount.count)}
                onClick={() => {
                  setPostToBeSharedId(p.id);
                  setRepostModalIsOpen(true);
                }}
              />
            </section>
            <div>
              <Link to={`/users/${p.authorId}`}>{p.name}</Link>
              <Text>
                <ReactHashtag
                  onHashtagClick={(val) => navigate("/hashtag/" + val.substr(1))}
                >
                  {p.text}
                </ReactHashtag>
              </Text>
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
        </PostContainer>
        
      ))}
    </>
  );
}

const Text = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-size: 17px;
  line-height: 20px;

  color: #b7b7b7;

  span {
    font-weight: bold;
    color: #fff;
  }
`;
