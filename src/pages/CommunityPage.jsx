import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ChatList from "../components/ChatList";
import BottomNav from "../components/BottomNav";

function CommunityPage() {
  const [activeTab, setActiveTab] = useState("Community");
  // Mock chat data
  const chats = [
    {
      id: 1,
      name: "Aarhus Book Swap",
      message: "Eva: I would love to!",
      time: "8:36 pm",
      image: "path/to/image1.jpg",
      unread: true,
    },
    {
      id: 2,
      name: "Stephan King lovers",
      message: "You: Anyone interested in swapp...",
      time: "8:36 pm",
      image: "path/to/image2.jpg",
      unread: false,
    },
    {
      id: 3,
      name: "Readers’ Circle",
      message: "You: Anyone interested in swapp...",
      time: "8:36 pm",
      image: "path/to/image3.jpg",
      unread: false,
    },
    {
      id: 4,
      name: "Novel Minds",
      message: "You: Anyone interested in swapp...",
      time: "8:36 pm",
      image: "path/to/image4.jpg",
      unread: false,
    },
    {
      id: 5,
      name: "Literary Lounge",
      message: "You: Anyone interested in swapp...",
      time: "8:36 pm",
      image: "path/to/image5.jpg",
      unread: false,
    },
  ];

  return (
    <div className="community-page">
      {/* Header */}
      <header className="header">
        <h1>Chats</h1>
        <div className="icons">
          <button className="icon edit-icon">✏️</button>
          <button className="icon menu-icon">📋</button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-icon">🔍</button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "Community" ? "active" : ""}`}
          onClick={() => setActiveTab("Community")}
        >
          Community
        </button>
        <button
          className={`tab ${activeTab === "Chat" ? "active" : ""}`}
          onClick={() => setActiveTab("Chat")}
        >
          Chat
        </button>
      </div>

      {/* Chat List */}
      <div className="chat-list">
        {chats.map((chat) => (
          <div key={chat.id} className="chat-item">
            <img src={chat.image} alt={chat.name} className="chat-image" />
            <div className="chat-info">
              <div className="chat-header">
                <span className="chat-name">{chat.name}</span>
                {chat.unread && <span className="unread-dot"></span>}
              </div>
              <p className="chat-message">{chat.message}</p>
            </div>
            <span className="chat-time">{chat.time}</span>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <footer className="bottom-nav">
        <button className="nav-icon">🏠</button>
        <button className="nav-icon">💬</button>
        <button className="nav-icon">📊</button>
        <button className="nav-icon">👤</button>
      </footer>
    </div>
  );
}

export default CommunityPage;
