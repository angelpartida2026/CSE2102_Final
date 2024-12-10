import React from 'react';
import quizPageStyle from '../QuizPageStyle';

import my_state from './my_state';

import  my_questions from '../model/basic_questions.json';
import { incrementScore, dontIncrementScore, calculateTotal } from '../controllers/scoring';


class Quiz extends React.Component {

    state = {
        score: 0,
        count: 0
    };

    incrementScore = () => {
        this.setState((prevState) => ({
            score: incrementScore(prevState.score),
            count: prevState.count + 1
        }));
        alert("You are correct!"); // could be executed before the setStates are done!
    };

    dontIncrementScore = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
        alert("Sorry - not correct");
    };

    handleSubmit = () => {
        const { score, count } = calculateTotal(this.state.score, this.state.count);
        my_state.my_score = score;
        my_state.my_count = count;
        
        alert(`Total score: ${score}/${count}`);
    };    
    
    render() {
        return(
           <div style={quizPageStyle}>
            <h1>My Questions</h1>
                {my_questions.map((quest) => (
                <div> 
                    <h2>{quest["question"]}</h2>
                        {quest["answers"].map((ans) => (
                            <div>
                                <label>
                                <input  
                                        type = "radio"
                                        name = { quest["id"] }
                                        key = { quest["id"] }
                                        onClick = { ans["isCorrect"] ? this.incrementScore : this.dontIncrementScore }
                                        value = { ans["isCorrect"] } /> 
                                    { ans["answer"] }
                                </label> 
                                <br />
                            </div>
                        ))}
                    
                </div>
                ))}
                 <br />
                <button onClick={this.handleSubmit} >Done</button>
        </div>
        );
    }
}

export default Quiz;