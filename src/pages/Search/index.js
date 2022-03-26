import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import SearchStyle from "./styles";
import { getUserByName } from "../../Services/axiosServices";

export default function Search() {
	const [name, setName] = useState("");
	const [resoute, setResoute] = useState([]);

	useEffect(() => {
		const promise = getUserByName(name);
		promise.then((response) => setResoute(response.data));
	}, [name]);
	console.log(resoute);

	return (
		<SearchStyle>
			<DebounceInput
				Length={3}
				debounceTimeout={300}
				onChange={(e) => {
					setName(e.target.value);
					console.log(name);
				}}
			/>
			{/* {resoute.map((r) => {
				return <p>{r.name}</p>;
			})} */}
		</SearchStyle>
	);
}
