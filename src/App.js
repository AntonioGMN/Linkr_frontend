import { BrowserRouter, Routes, Route } from "react-router-dom";

import Timeline from "./pages/Timeline";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserPosts from "./pages/UserPosts";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/asd" element={<Login />} />
				<Route path="/" element={<Timeline />} />
				<Route path="/users/:id" element={<UserPosts />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
}
