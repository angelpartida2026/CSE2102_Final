import React from 'react';

const ResultsPage = ({ score, count }) => {
    return (
        <div>
            <h1>Quiz Results</h1>
            <p>Your score: {score}/{count}</p>
            <button onClick={() => window.location.href = '/'}>Take Quiz Again</button>
        </div>
    );
};

export default ResultsPage;
