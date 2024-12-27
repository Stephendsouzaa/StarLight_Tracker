import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chatbot from './Chatbot'; // Import the Chatbot component
import './Header.css'; // Import your CSS for Header
import Login from '../pages/Login'; // Correct path for Login component

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [showOptions, setShowOptions] = useState(false); // Track if profile options should be displayed
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // Track chatbot visibility

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle login status
    setShowOptions(false); // Hide options after logging out
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions); // Show or hide options when Profile button is clicked
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen); // Toggle chatbot visibility
  };

  return (
    <header className="header">
      <h1 className="header-title">Starlight Tracker</h1>
      <div className="scroll-container"> {/* Scrollable container */}
        <nav className="nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/star-info">Star Info</Link>
          <Link className="nav-link" to="/constellation-info">Constellation Info</Link>

          <a href="http://localhost:7000" target="_blank" rel="noopener noreferrer" className="nav-link upload-link">
            Upload / Capture
          </a>

          <Link className="nav-link" to="/space-news">Latest Space News</Link>
          <a href="/feedback" target="_blank" rel="noopener noreferrer" className="nav-link">Feedback</a>

          <Link className="nav-link" to="/planetary-info">Planetary Info</Link>
          <Link className="nav-link" to="/astronomy-events">Astronomy Events</Link>
          <Link className="nav-link" to="/space-facts">Space Facts</Link>

          {/* Profile Button */}
          <div style={{ position: 'absolute', top: '0px', right: '10px', display: 'inline-block' }}>
            <button
              onClick={toggleOptions}
              style={{
                padding: '10px',
                cursor: 'pointer',
                top : '-100px',
                right: 100,
                position: 'relative',
                zIndex: 1000, // Ensure the button stays on top
              }}
            >
              Profile
            </button>

            {/* Dropdown options */}
            {showOptions && (
              <div
                style={{
                  position: 'absolute',
                  top: '20px',  // Dropdown appears 40px below the profile button
                  right: '100px',
                  backgroundColor: '',
                  border: '3px solid #ccc',
                  borderRadius: '4px',
                  zIndex: 1000,
                  padding: '10px 100px',
                  backgroundColor: '',
                  textAlign: 'center',
                }}
              >
                {!isLoggedIn ? (
                  <Login /> // Render Login component when not logged in
                ) : (
                  <button
                    onClick={handleLoginLogout}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#f44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
      {/* Floating Chatbot Button */}
      <div className="chatbot-button-container">
        <button onClick={toggleChatbot} className="chatbot-toggle-btn">
          <img id="chatbot-logo" src="chartbot77.gif" alt="Chatbot" />
        </button>
      </div>

      {/* Chatbot Component */}
      {isChatbotOpen && <Chatbot />}
    </header>
  );
}

export default Header;
