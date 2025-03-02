import React from 'react';

interface TimerProps {
  timeLeft: number;
  totalTime: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft, totalTime }) => {
  const percentage = (timeLeft / totalTime) * 100;
  
  const getColor = () => {
    if (percentage > 60) return 'bg-green-500';
    if (percentage > 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">Time Remaining:</span>
        <span className="text-sm font-medium">{timeLeft} seconds</span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 rounded-full">
        <div 
          className={`h-2.5 rounded-full ${getColor()}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;