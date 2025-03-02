import React, { useEffect } from 'react';
import Timer from './Timer';
import WordDisplay from './WordDisplay';
import TypeInput from './TypeInput';
import ScoreBoard from './ScoreBoard';
import DifficultySelector from './DifficultySelector';
import { useTypingGame } from '../hooks/useTypingGame';

const GameBoard: React.FC = () => {
  const {
    gameState,
    startGame,
    resetGame,
    setDifficulty,
    handleInputChange,
    handleKeyDown
  } = useTypingGame();
  
  useEffect(() => {
    if (gameState.status === 'playing') {
      const inputElement = document.querySelector('input');
      if (inputElement) inputElement.focus();
    }
  }, [gameState.status]);
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Rapid Typing Game</h1>
      
      {gameState.status !== 'idle' && (
        <Timer 
          timeLeft={gameState.timeLeft} 
          totalTime={60} 
        />
      )}
      
      <DifficultySelector
        difficulty={gameState.difficulty}
        onChange={setDifficulty}
        disabled={gameState.status === 'playing'}
      />
      
      {gameState.status === 'playing' && (
        <>
          <WordDisplay 
            word={gameState.currentWord} 
            userInput={gameState.inputValue} 
          />
          
          <TypeInput
            value={gameState.inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={false}
          />
        </>
      )}
      
      <ScoreBoard
        wordsTyped={gameState.wordsTyped}
        accuracy={gameState.accuracy}
        score={gameState.score}
        isGameOver={gameState.status === 'finished'}
      />
      
      {gameState.status === 'finished' && (
        <div className="text-center mb-6 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Game Over!</h2>
          <p className="text-lg">
            You typed {gameState.wordsTyped} words with {gameState.accuracy}% accuracy.
          </p>
          <p className="text-xl font-bold mt-2">
            Final Score: {gameState.score}
          </p>
        </div>
      )}
      
      <div className="flex space-x-4">
        {gameState.status === 'idle' || gameState.status === 'finished' ? (
          <button
            onClick={startGame}
            className="flex-1 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            {gameState.status === 'idle' ? 'Start Game' : 'Play Again'}
          </button>
        ) : (
          <button
            onClick={resetGame}
            className="flex-1 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
          >
            Reset Game
          </button>
        )}
      </div>
    </div>
  );
};

export default GameBoard;