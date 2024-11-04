import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import CommunityPage from "./pages/CommunityPage";
import HomePage from "./pages/HomePage";
import StatisticsPage from "./pages/StatisticsPage";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
