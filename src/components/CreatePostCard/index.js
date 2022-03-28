import { useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function CreatePostCard() {
	const [text, setText] = useState("");
	const [link, setLink] = useState("");
	const [loading, setLoading] = useState(false);

	const { auth } = useAuth();
	function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		api
			.publish({ text, link }, auth.token)
			.then(() => {
				window.location.reload();
				setLoading(false);
			})
			.catch(() => {
				alert("Houve um erro ao publicar seu link");
				setLoading(false);
			});
	}

  return (
    <Container>
      <div>
        <Avatar src={auth.userPicture} alt="avatar" />
      </div>
      <Form onSubmit={handleSubmit}>
        <span>What are you going to share today?</span>
        <input
          type="url"
          placeholder="http://..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
          disabled={loading}
          required
        />
        <textarea
          type="text"
          placeholder="Awesome article about #javascript"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
        />
        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Publishing..." : "Publish"}
          </button>
        </div>
      </Form>
    </Container>
  );
}

const Container = styled.div`
	width: 611px;
	height: 209px;

	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 16px;

	padding: 16px;
	display: flex;
	gap: 16px;
	margin-bottom: 16px;
	@media (max-width: 800px) {
		width: 100vw;
		height: 200px;
		border-radius: 0;
	}
`;

const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 26.5px;
	object-fit: cover;

	@media (max-width: 800px) {
		display: none;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 8px;
	position: relative;
	span {
		font-size: 20px;
		color: #707070;
		font-family: "Lato", sans-serif;
		font-weight: 300;
		margin: 8px 0 15px;
	}

	input,
	textarea {
		width: 503px;

		background: #efefef;
		border-radius: 5px;
		padding: 8px;
		font-size: 15px;
		::placeholder {
			color: #949494;
		}
		border: none;
	}
	input {
		height: 30px;
	}
	textarea {
		height: 66px;
		resize: none;
	}
	div {
		height: 40px;
	}
	button {
		width: 112px;
		height: 36px;
		position: absolute;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #1877f2;
		border-radius: 5px;
		border: none;
		font-family: "Lato", sans-serif;
		color: #ffffff;
		font-weight: bold;
		cursor: pointer;
		opacity: ${({ loading }) => (loading ? 0.7 : 1)};
		pointer-events: ${({ loading }) => (loading ? "none" : "all")};
		:hover {
			opacity: 0.8;
		}
		:active {
			transform: translateY(-3px);
		}
	}

	@media (max-width: 800px) {
		justify-content: center;
		align-items: center;
		width: 100%;
		input,
		textarea {
			width: 90%;
			font-size: 14px;
		}
		button {
			height: 24px;
		}
	}
`;
