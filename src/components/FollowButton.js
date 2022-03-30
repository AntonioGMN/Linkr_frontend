import { useState } from "react";
import styled from "styled-components";
import api from "../services/api";

export default function FollowButton({ userId, auth }) {
  const [loading, setLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(true);

  let text;
  if (loading) {
    text = "Loading...";
  } else if (isFollowing) {
    text = "Follow";
  } else {
    text = "Unfollow";
  }

  function handleSuccess() {
    setIsFollowing(!isFollowing);
    setLoading(false);
  }
  function handleError(error) {
    alert("An error occured while trying to follow/unfollow this user");
    setLoading(false);
  }
  function handleClick() {
    setLoading(true);
    // if (isFollowing) {
    //  api.unfollowUser(userId, auth.token).then(handleSuccess).catch(handleError);
    // } else {
    api.follow(userId, auth.token).then(handleSuccess).catch(handleError);
    //  }
  }

  return (
    <Button
      disabled={loading}
      isLoading={loading}
      isFollowing={isFollowing}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}

const Button = styled.button`
  all: unset;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 112px;
  height: 31px;

  background: #1877f2;
  border-radius: 5px;
  border-radius: 6px;
  background-color: ${({ isFollowing }) => (isFollowing ? "#1877f2" : "#FFF")};

  font-family: Oswald;
  font-weight: bold;
  font-size: 17px;
  color: ${({ isFollowing }) => (isFollowing ? "#FFF" : "#1877f2")};
  opacity: ${({ isLoading }) => (isLoading ? 0.7 : 1)};
  pointer-events: ${({ isLoading }) => (isLoading ? "none" : "all")};
  :hover {
    opacity: 0.8;
  }
  :active {
    transform: translateY(-3px);
  }
  cursor: pointer;
`;
