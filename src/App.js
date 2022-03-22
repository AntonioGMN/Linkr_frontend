import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tineline from "./pages/Timeline";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Tineline />} />
			</Routes>
		</BrowserRouter>
	);
}
