import { useState, useCallback } from 'react';
import { wordLists } from '../utils/wordLists';

export const useWordGenerator = (difficulty: 'easy' | 'medium' | 'hard') => {
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set());
  
  const getRandomWord = useCallback(() => {
    const words = wordLists[difficulty];
    const availableWords = words.filter(word => !usedWords.has(word));
    
    // If we've used all words, reset the used words set
    if (availableWords.length === 0) {
      setUsedWords(new Set());
      return words[Math.floor(Math.random() * words.length)];
    }
    
    const newWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    setUsedWords(prev => new Set(prev).add(newWord));
    return newWord;
  }, [difficulty, usedWords]);
  
  return { getRandomWord };
};
