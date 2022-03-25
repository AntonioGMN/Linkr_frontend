import { useState } from "react";
import { DebounceInput } from "react-debounce-input";

export default function Search() {
	const [state, setState] = useState("");

	return (
		<div>
			<DebounceInput
				minLength={2}
				debounceTimeout={300}
				onChange={(event) => this.setState({ value: event.target.value })}
			/>

			<p>Value: {this.state.value}</p>
		</div>
	);
}
