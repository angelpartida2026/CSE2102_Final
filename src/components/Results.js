import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
    const location = useLocation();
    const { score, totalQuestions } = location.state;

    return (
        <div style={{
            padding: "20px",
            margin: "auto",
            maxWidth: "600px",
            minHeight: "300px",
            backgroundColor: "#483D8B",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}>        
            <h1>Quiz Results</h1>
            <p>You scored {score} out of {totalQuestions}</p>
            <button onClick={() => window.location.href = '/'}>Retry Quiz</button>
        </div>
    );
};

export default Results;

