import { incrementScore } from './scoring';

test('incrementScore increases score by 1', () => {
    const initialScore = 0;
    const newScore = incrementScore(initialScore);
    expect(newScore).toBe(1);
});
