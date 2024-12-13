import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quizPageStyle from '../QuizPageStyle';
import my_questions from '../model/basic_questions.json';

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (selectedAnswer && selectedAnswer.isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }

        if (currentQuestionIndex < my_questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedAnswer(null);
        } else {
            navigate('/results', { state: { score, totalQuestions: my_questions.length } });
        }
    };

    const currentQuestion = my_questions[currentQuestionIndex];

    return (
        <div style={quizPageStyle}>
            <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>Quiz</h1>
            <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
                Question {currentQuestionIndex + 1} of {my_questions.length}
            </h2>
            <p style={{ fontSize: "24px", marginBottom: "20px" }}>{currentQuestion.question}</p>
            {currentQuestion.answers.map((ans, index) => (
                <label key={index} style={{ fontSize: "20px", display: "block", margin: "10px 0" }}>
                    <input
                        type="radio"
                        name={`question-${currentQuestionIndex}`}
                        onChange={() => setSelectedAnswer(ans)}
                    />
                    {ans.answer}
                </label>
            ))}
            <button
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#0056b3",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
                onClick={handleSubmit}
                disabled={!selectedAnswer}
            >
                Submit
            </button>
        </div>
    );
};

export default Quiz;

