import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function Trending() {
	const [hashtags, setHashtags] = useState([]);
	const { auth } = useAuth();

	useEffect(() => {
		const promise = api.getTrending(auth.token);
		promise
			.then(({ data }) => setHashtags(data))
			.catch((err) => {
				console.log(err);
				alert("Error loading trending hashtags");
			});
	}, [hashtags]);

	return (
		<Container>
			<div>
				<strong>
					<h1>Trending</h1>
				</strong>
			</div>
			<hr />
			<div>
				{hashtags.map(({ name }, index) => (
					<Link to={`/hashtag/${name}`} key={index}>
						<strong>
							<h2>#{name}</h2>
						</strong>
					</Link>
				))}
			</div>
		</Container>
	);
}

const Container = styled.aside`
	height: 406px;
	width: 301px;
	border-radius: 16px;

	hr {
		border: 1px solid #484848;
	}

	background: #171717;

	position: sticky;
	top: 160px;
	div {
		padding: 8px;
		padding-left: 16px;
	}
	h1 {
		font-family: "Oswald";
		font-style: normal;
		font-size: 27px;
		line-height: 40px;

		color: #ffffff;
	}
	h2 {
		margin-bottom: 8px;
		font-family: "Lato";
		font-style: normal;
		font-size: 19px;
		line-height: 23px;
		letter-spacing: 0.05em;

		color: #ffffff;
	}
	@media (max-width: 1000px) {
		display: none;
	}
`;
