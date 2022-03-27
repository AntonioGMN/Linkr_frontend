import { PostStyle } from "../../components/posts";
import Curtidas from "../../components/curtidas";
import { AiOutlineHeart as CurtidaIcon } from "react-icons/ai";
import { Snippet } from "../../components/posts";
import { Link } from "react-router-dom";
import HashtagsComponent from "./HashtagsComponent";

export default function Post({ list }) {
	console.log(list)
	return list.map((p) => {
		return (
			<PostStyle key={p.id}>
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
						<HashtagsComponent>
							{p.text}
						</HashtagsComponent>
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
