import { BrowserRouter, Routes, Route } from "react-router-dom";

import Timeline from "./pages/Timeline";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserPosts from "./pages/UserPosts";
import { AuthProvider } from "./contexts/AuthContext";
import Hashtag from "./pages/Hashtag";
export default function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/hashtag/:hashtag" element={<Hashtag />} />
					<Route path="/timeline" element={<Timeline />} />
					<Route path="/users/:id" element={<UserPosts />} />
					<Route path="/sign-up" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}
