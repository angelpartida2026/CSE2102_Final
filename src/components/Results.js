import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
    const location = useLocation();
    const { score, count } = location.state || { score: 0, count: 0 }; // Default values

    return (
        <div>
            <h1>Quiz Results</h1>
            <p>Your score: {score}/{count}</p>
            <button onClick={() => (window.location.href = '/')}>Take Quiz Again</button>
        </div>
    );
};

export default ResultsPage;
