import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NotePage() {
  const [activeTab, setActiveTab] = useState("Quote");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  return (
    <div className="note-page">
      <header className="header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <button className="add-button">Add</button>
      </header>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "Quote" ? "active" : ""}`}
          onClick={() => setActiveTab("Quote")}
        >
          Quote
        </button>
        <button
          className={`tab ${activeTab === "Note" ? "active" : ""}`}
          onClick={() => setActiveTab("Note")}
        >
          Note
        </button>
      </div>

      <textarea
        className="note-input"
        placeholder={`Write a ${activeTab.toLowerCase()}`}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
}

export default NotePage;
