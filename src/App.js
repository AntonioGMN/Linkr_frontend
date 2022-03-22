import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./pages/Timeline";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}
