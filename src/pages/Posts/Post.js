import { PostStyle } from "../../components/posts";
import Curtidas from "../../components/curtidas";
import { AiOutlineHeart as CurtidaIcon } from "react-icons/ai";
import { Snippet } from "../../components/posts";

export default function Post({ list }) {
	return list.map((p) => {
		return (
			<PostStyle>
				<section>
					<img src={p.pictureUrl} alt="erro" />
					<Curtidas>
						<span>
							<CurtidaIcon size={30} />
							Cutidas
						</span>
					</Curtidas>
				</section>
				<div>
					<p>{p.name}</p>
					<span>
						{p.text}{" "}
						{p.hashtags.map((h) => {
							return <strong>#{h} </strong>;
						})}
					</span>
					<Snippet href={p.link} target="_blank"></Snippet>
				</div>
			</PostStyle>
		);
	});
}
