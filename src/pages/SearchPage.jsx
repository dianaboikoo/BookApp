import React, { useState } from "react";

function SearchPage() {
  const [activeTab, setActiveTab] = useState("Genres");

  const genres = [
    "Romance",
    "Thriller",
    "Fiction",
    "Fantasy",
    "Drama",
    "Classics",
  ];
  const filters = [
    { title: "Books by Mood & Emotions" },
    { title: "Books by Character & Plot" },
  ];

  return (
    <div className="search-page">
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-icon">🔍</button>
      </div>

      {/* Tabs for Genres and Filters */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "Genres" ? "active" : ""}`}
          onClick={() => setActiveTab("Genres")}
        >
          Genres
        </button>
        <button
          className={`tab ${activeTab === "Filters" ? "active" : ""}`}
          onClick={() => setActiveTab("Filters")}
        >
          Filters
        </button>
      </div>

      {/* Content for Genres or Filters based on active tab */}
      {activeTab === "Genres" ? (
        <div className="genres-grid">
          {genres.map((genre) => (
            <div key={genre} className="genre-card">
              <div className="genre-overlay">
                <span>{genre}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="filters-list">
          {filters.map((filter, index) => (
            <div key={index} className="filter-item">
              <span>{filter.title}</span>
              <span className="dropdown-icon">▼</span>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Navigation Placeholder */}
      <footer className="bottom-nav">
        <button className="nav-icon">🏠</button>
        <button className="nav-icon">💬</button>
        <button className="nav-icon">📊</button>
        <button className="nav-icon">👤</button>
      </footer>
    </div>
  );
}

export default SearchPage;
