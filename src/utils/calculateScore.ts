export const calculateScore = (
    wordsTyped: number, 
    accuracy: number, 
    difficulty: 'easy' | 'medium' | 'hard',
    timeSpent: number
  ): number => {
    const difficultyMultiplier = {
      easy: 1,
      medium: 1.5,
      hard: 2
    };
  const minutes = timeSpent / 60;
  const wpm = wordsTyped / minutes;
 
  return Math.round(wpm * (accuracy / 100) * difficultyMultiplier[difficulty]);
};