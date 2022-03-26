import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import SearchStyle from "./styles";
import { getUserByName } from "../../Services/axiosServices";

export default function Search() {
	const [name, setName] = useState("");
	const [resoute, setResoute] = useState([]);

	useEffect(() => {
		console.log("getUserByName(" + name + ")");
		const promise = getUserByName(name);
		promise.then((response) => {
			console.log(response.data);
			setResoute(response.data);
		});
	}, [name]);
	console.log(resoute);

	return (
		<SearchStyle>
			<DebounceInput
				minLength={2}
				debounceTimeout={300}
				style={{
					height: "45px",
					width: "563px",
					border: "none",
					borderRadius: "8px",
					color: "#C6C6C6",
				}}
				value={name}
				onChange={(e) => {
					setName(e.target.value);
					//console.log(name);
				}}
			/>
			{/* {resoute.map((r) => {
				return <p>{r.name}</p>;
			})} */}
		</SearchStyle>
	);
}
