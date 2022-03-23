import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./pages/Timeline";

import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
