// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Starlight Tracker</h1><br></br>
            <nav className="nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/star-info">Star Info</Link>
                <Link className="nav-link" to="/constellation-info">Constellation Info</Link>
                <Link className="nav-link" to="/feedback">Feedback</Link>
            </nav>
        </header>
    );
}

export default Header;
