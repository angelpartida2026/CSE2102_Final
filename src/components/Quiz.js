import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quizPageStyle from '../QuizPageStyle';
import my_state from './my_state';
import my_questions from '../model/basic_questions.json';

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const incrementScore = () => {
        setScore((prevScore) => prevScore + 1);
        setCount((prevCount) => prevCount + 1);
    };
    
    const dontIncrementScore = () => {
        setCount((prevCount) => prevCount + 1);
    };
    
    const handleSubmit = () => {
        navigate('/results', { state: { score, count } });
    };
    
    
    return (
        <div style={quizPageStyle}>
            <h1>My Questions</h1>
            {my_questions.map((quest) => (
                <div key={quest["id"]}>
                    <h2>{quest["question"]}</h2>
                    {quest["answers"].map((ans, index) => (
                        <div key={index}>
                            <label>
                                <input
                                    type="radio"
                                    name={quest["id"]}
                                    onClick={ans["isCorrect"] ? incrementScore : dontIncrementScore}
                                    value={ans["isCorrect"]}
                                />
                                {ans["answer"]}
                            </label>
                            <br />
                        </div>
                    ))}
                </div>
            ))}
            <br />
            <button onClick={handleSubmit}>Done</button>
        </div>
    );
};

export default Quiz;