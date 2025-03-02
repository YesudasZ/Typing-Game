import React from 'react';

interface ScoreBoardProps {
  wordsTyped: number;
  accuracy: number;
  score: number;
  isGameOver: boolean;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ wordsTyped, accuracy, score, isGameOver }) => {
  return (
    <div className={`
      grid grid-cols-3 gap-4 mb-6 
      ${isGameOver ? 'bg-blue-50 p-4 rounded-lg border border-blue-200' : ''}
    `}>
      <div className="text-center">
        <h3 className="text-sm text-gray-600">Words</h3>
        <p className="text-2xl font-bold">{wordsTyped}</p>
      </div>
      <div className="text-center">
        <h3 className="text-sm text-gray-600">Accuracy</h3>
        <p className="text-2xl font-bold">{accuracy}%</p>
      </div>
      <div className="text-center">
        <h3 className="text-sm text-gray-600">Score</h3>
        <p className="text-2xl font-bold">{score}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
