// scoring.js
export function incrementScore(score) {
    return score + 1;
  }
  
  export function dontIncrementScore(score) {
    return score; // Score doesn't change for incorrect answers
  }
  
  export function calculateTotal(score, count) {
    return { score, count };
  }
  