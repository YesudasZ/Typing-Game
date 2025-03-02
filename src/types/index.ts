export interface GameState {
    status: 'idle' | 'playing' | 'finished';
    currentWord: string;
    inputValue: string;
    score: number;
    accuracy: number;
    wordsTyped: number;
    correctTyped: number;
    difficulty: 'easy' | 'medium' | 'hard';
    timeLeft: number;
  }
  