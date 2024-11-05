import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TimerPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();

  // Timer logic
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  // Format seconds as MM:SS
  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <div className="timer-page">
      <header className="header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ✕
        </button>
        <button className="finish-button">Finish</button>
      </header>

      <div className="book-cover">
        <img
          src="path/to/the-goldfinch.jpg"
          alt="The Goldfinch"
          className="book-image"
        />
      </div>

      <button className="timer-button">Set a timer</button>

      <div className="timer-display">
        <h1>{formatTime(seconds)}</h1>
      </div>

      <div className="controls">
        <button className="control-button" onClick={() => navigate("/note")}>
          📝 Book Chat
        </button>
        <button
          className="control-button"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "⏸️ Pause" : "▶️ Play"}
        </button>
        <button className="control-button" onClick={() => navigate("/note")}>
          ➕ Add Note
        </button>
      </div>
    </div>
  );
}

export default TimerPage;
