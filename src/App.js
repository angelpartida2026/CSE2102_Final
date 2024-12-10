import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import ResultsPage from './components/Results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* Route for the Quiz page */}
            <Route path="/" element={<Quiz />} />

            {/* Route for the Results page */}
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
