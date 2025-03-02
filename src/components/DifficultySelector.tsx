import React from 'react';

interface DifficultySelectorProps {
  difficulty: 'easy' | 'medium' | 'hard';
  onChange: (difficulty: 'easy' | 'medium' | 'hard') => void;
  disabled: boolean;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ 
  difficulty, 
  onChange, 
  disabled 
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-sm text-gray-600 mb-2">Select Difficulty</h3>
      <div className="flex space-x-2">
        {(['easy', 'medium', 'hard'] as const).map((level) => (
          <button
            key={level}
            onClick={() => onChange(level)}
            disabled={disabled}
            className={`
              flex-1 py-2 rounded-md text-sm font-medium transition-colors
              ${difficulty === level 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;