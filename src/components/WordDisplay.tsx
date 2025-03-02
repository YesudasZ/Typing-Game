import React from 'react';

interface WordDisplayProps {
  word: string;
  userInput: string;
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word, userInput }) => {
  // Split word into characters to highlight correctly/incorrectly typed characters
  const chars = word.split('');
  const inputChars = userInput.split('');
  
  return (
    <div className="text-center mb-6">
      <h2 className="text-lg mb-2">Type this word:</h2>
      <div className="text-5xl font-bold tracking-wide">
        {chars.map((char, index) => {
          let className = "inline-block";
          
          if (index < inputChars.length) {
            className += inputChars[index] === char 
              ? " text-green-500" 
              : " text-red-500";
          }
          
          return (
            <span key={index} className={className}>
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default WordDisplay;