import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "@/pages/StartPage";
import MapPage from "@/pages/MapPage";
import EventPage from "@/pages/EventPage";
import CodexPage from "@/pages/CodexPage";
import ResultPage from "@/pages/ResultPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/codex" element={<CodexPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}
