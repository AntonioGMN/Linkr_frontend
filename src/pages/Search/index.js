import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import {
	SearchStyleHeader,
	ShowUsersStyle,
	DebounceInputStyleHeader,
	DebounceInputStyleTimeline,
	SearchStyleTimeline,
} from "./styles";
import { getUserByName } from "../../Services/axiosServices";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Search({ page }) {
	const [name, setName] = useState("");
	const [users, setUsers] = useState([]);
	const [showUsers, setShowUsers] = useState(false);
	const { auth } = useAuth();

	function getUsers() {
		const promise = getUserByName(name, auth.token);
		promise.then((response) => {
			console.log(response.data);
			setUsers(response.data);
		});

		if (users.length === 0 || name.length === 0) setShowUsers(false);
		else {
			setUsers([]);
			setShowUsers(true);
		}
	}

	console.log("name:" + name);

	if (page === "header") {
		return (
			<SearchStyleHeader visibiliti={showUsers}>
				<DebounceInput
					minLength={3}
					debounceTimeout={300}
					style={DebounceInputStyleHeader}
					placeholder={"Search for people"}
					value={name}
					onChange={(e) => {
						setName(e.target.value);
						console.log(e);
						console.log(e.target.value);
						getUsers();
					}}
				/>
				<ShowUsersStyle visibiliti={showUsers}>
					{users.map((u) => {
						return (
							<Link to={`/users/${u.id}`}>
								<button key={u.id}>
									<img src={u.pictureUrl}></img>
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
						console.log(e);
						console.log(e.target.value);
						getUsers();
					}}
				/>
				<ShowUsersStyle visibiliti={showUsers}>
					{users.map((u) => {
						return (
							<Link to={`/users/${u.id}`}>
								<button key={u.id}>
									<img src={u.pictureUrl}></img>
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
