import { useState, useEffect, useCallback } from 'react';

interface UseTimerProps {
  initialTime: number;
  onTimeUp: () => void;
  isActive: boolean;
}

export const useTimer = ({ initialTime, onTimeUp, isActive }: UseTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  const resetTimer = useCallback(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    let interval: number | undefined;
    
    if (isActive && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft(prevTime => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            clearInterval(interval);
            onTimeUp();
            return 0;
          }
          return newTime;
        });
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, onTimeUp]);

  return { timeLeft, resetTimer };
};