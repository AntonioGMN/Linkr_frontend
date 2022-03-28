import { FaPencilAlt } from "react-icons/fa";
import PostStyle from "../../components/postsComponents/postStyled";
import Snippet from "../../components/postsComponents/snippet";
import Curtidas from "../../components/curtidas";
import { AiOutlineHeart as CurtidaIcon } from "react-icons/ai";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import useAuth from "../../hooks/useAuth";

export default function Post({ list }) {
	const { auth } = useAuth();

	return list.map((p) => {
		return (
			<PostStyle key={p.id}>
				{ // A user can only delete your own posts
				p.name === auth.userName && 
				(<FaPencilAlt
					className="edit-icon"
					size={20}
					style={{fill: 'white'}}
					onClick={() => console.log("editar!")}
				/>)}
				<section>
					<img src={p.pictureUrl} alt="erro" />
					<Curtidas>
						<span>
							<CurtidaIcon size={30} />
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
