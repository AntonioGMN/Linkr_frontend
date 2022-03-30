import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import {
	SearchStyleHeader,
	ShowUsersStyle,
	DebounceInputStyleHeader,
	DebounceInputStyleTimeline,
	SearchStyleTimeline,
} from "./styles";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function Search({ page }) {
	const [name, setName] = useState("");
	const [users, setUsers] = useState([]);
	const [showUsers, setShowUsers] = useState(false);
	const { auth } = useAuth();

	function getUsers(name) {
		const promise = api.getUserByName(name, auth.token);
		promise.then((response) => {
			setUsers(response.data)
			if(name.length === 0) setShowUsers(false)
			else setShowUsers(true);
		});
		promise.catch((err) => setShowUsers(false));
	}

	if (page === "header") {
		return (
			<SearchStyleHeader visibiliti={showUsers}>
				<DebounceInput
					minLength={3}
					debounceTimeout={300}
					style={DebounceInputStyleHeader}
					placeholder={"Search for people"}
					onChange={(e) => {
						getUsers(e.target.value);
					}}
				/>
				<ShowUsersStyle visibiliti={showUsers}>
					{users.map((u) => {
						return (
							<Link to={`/users/${u.id}`} key={u.id}>
								<button>
									<img src={u.pictureUrl} alt="erro"></img>
									<p>{u.name}</p>
								</button>
							</Link>
						);
					})}
				</ShowUsersStyle>
			</SearchStyleHeader>
		);
	}

	if (page === "timeline") {
		return (
			<SearchStyleTimeline visibiliti={showUsers}>
				<DebounceInput
					minLength={2}
					debounceTimeout={300}
					style={DebounceInputStyleTimeline}
					placeholder={"Search for people and friends"}
					value={name}
					onChange={(e) => {
						setName(e.target.value);
						getUsers();
						if (name.length === 0) setShowUsers(false);
					}}
				/>
				<ShowUsersStyle visibiliti={showUsers}>
					{users.map((u) => {
						return (
							<Link to={`/users/${u.id}`} key={u.id}>
								<button>
									<img src={u.pictureUrl} alt="erro"></img>
									<p>{u.name}</p>
								</button>
							</Link>
						);
					})}
				</ShowUsersStyle>
			</SearchStyleTimeline>
		);
	}
}
