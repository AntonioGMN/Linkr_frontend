import NewPostsBarStyle from "./style";

export default function NewPostsBar({ NewPostsNumber }) {
	let show = false;
	if (NewPostsNumber > 0) show = true;

	return (
		<NewPostsBarStyle show={show} onClick={() => window.location.reload()}>
			<p>{NewPostsNumber} new posts, load more!</p>
		</NewPostsBarStyle>
	);
}
