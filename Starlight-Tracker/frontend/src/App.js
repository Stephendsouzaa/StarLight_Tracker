import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import StarInfo from './pages/StarInfo';
import ConstellationInfo from './pages/ConstellationInfo';
import Feedback from './pages/Feedback';
import StarLightFeature from './components/StarLightFeature'; // Import the new component

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/star-info" element={<StarInfo />} />
                <Route path="/constellation-info" element={<ConstellationInfo />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/star-light" element={<StarLightFeature />} /> {/* New route for StarLightFeature */}
            </Routes>
        </Router>
    );
}

export default App;
