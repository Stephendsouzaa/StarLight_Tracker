import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const fetchStars = async () => {
            const response = await axios.get('/api/stars');
            setStars(response.data);
        };
        fetchStars();
    }, []);

    return (
        <div>
            <h2>Welcome to Starlight Tracker</h2>
            <h3>Famous Stars</h3>
            <ul>
                {stars.map(star => (
                    <li key={star.id}>{star.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
