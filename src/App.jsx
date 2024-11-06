import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import CommunityPage from "./pages/CommunityPage";
import HomePage from "./pages/HomePage";
import StatisticsPage from "./pages/StatisticsPage";
import TimerPage from "./pages/TimerPage";
import NotePage from "./pages/NotePage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/note" element={<NotePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
