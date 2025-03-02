import { useState, useCallback, useEffect } from 'react';
import { GameState } from '../types';
import { useWordGenerator } from './useWordGenerator';
import { useTimer } from './useTimer';
import { calculateAccuracy } from '../utils/calculateAccuracy';
import { calculateScore } from '../utils/calculateScore';
import useSound from 'use-sound';

const correctSound = '/sounds/correct.mp3';
const incorrectSound = '/sounds/incorrect.mp3';
const gameOverSound = '/sounds/game-over.mp3';
const gameStartSound = '/sounds/game-start.mp3';

export const useTypingGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    status: 'idle',
    currentWord: '',
    inputValue: '',
    score: 0,
    accuracy: 0,
    wordsTyped: 0,
    correctTyped: 0,
    difficulty: 'medium',
    timeLeft: 60 
  });
  
  const [playCorrect] = useSound(correctSound);
  const [playIncorrect] = useSound(incorrectSound);
  const [playGameOver] = useSound(gameOverSound);
  const [playGameStart] = useSound(gameStartSound);
  
  const { getRandomWord } = useWordGenerator(gameState.difficulty);
  
  const handleGameOver = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      status: 'finished',
      score: calculateScore(
        prev.wordsTyped, 
        prev.accuracy, 
        prev.difficulty,
        60 - prev.timeLeft 
      )
    }));
    playGameOver();
  }, [playGameOver ]);
  
  const { timeLeft, resetTimer } = useTimer({
    initialTime: 60,
    onTimeUp: handleGameOver,
    isActive: gameState.status === 'playing'
  });

  useEffect(() => {
    setGameState(prev => ({ ...prev, timeLeft }));
  }, [timeLeft]);
  
  const startGame = useCallback(() => {
    const firstWord = getRandomWord();
    setGameState(prev => ({
      ...prev,
      status: 'playing',
      currentWord: firstWord,
      inputValue: '',
      wordsTyped: 0,
      correctTyped: 0,
      accuracy: 0,
      score: 0
    }));
    resetTimer();
    playGameStart();
  }, [getRandomWord, resetTimer, playGameStart ]);
  
  const resetGame = useCallback(() => {
    setGameState({
      status: 'idle',
      currentWord: '',
      inputValue: '',
      score: 0,
      accuracy: 0,
      wordsTyped: 0,
      correctTyped: 0,
      difficulty: gameState.difficulty,
      timeLeft: 60
    });
    resetTimer();
  }, [resetTimer, gameState.difficulty]);
  
  const setDifficulty = useCallback((difficulty: 'easy' | 'medium' | 'hard') => {
    setGameState(prev => ({ ...prev, difficulty }));
  }, []);
  
  const handleInputChange = useCallback((value: string) => {
    setGameState(prev => ({ ...prev, inputValue: value }));
  }, []);
  
  const checkWord = useCallback(() => {
    setGameState(prev => {
      const isCorrect = prev.inputValue.trim().toLowerCase() === prev.currentWord.toLowerCase();
      const newWordsTyped = prev.wordsTyped + 1;
      const newCorrectTyped = isCorrect ? prev.correctTyped + 1 : prev.correctTyped;
      const newAccuracy = calculateAccuracy(newCorrectTyped, newWordsTyped);
      
      if (isCorrect) {
        playCorrect();
      } else {
        playIncorrect();
      }
      
      return {
        ...prev,
        currentWord: getRandomWord(),
        inputValue: '',
        wordsTyped: newWordsTyped,
        correctTyped: newCorrectTyped,
        accuracy: newAccuracy
      };
    });
  }, [getRandomWord , playCorrect, playIncorrect ]);
  
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && gameState.inputValue.trim() !== '' && gameState.status === 'playing') {
      checkWord();
    }
  }, [checkWord, gameState.inputValue, gameState.status]);
  
  return {
    gameState,
    startGame,
    resetGame,
    setDifficulty,
    handleInputChange,
    handleKeyDown,
    checkWord
  };
};