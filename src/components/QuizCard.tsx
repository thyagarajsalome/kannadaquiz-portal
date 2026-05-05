// src/components/QuizCard.tsx
import React, { useState } from 'react';
import { Question } from '../types/quiz';

// Make sure there is NO import for QuizCard here!

interface QuizCardProps {
  question: Question;
  onNext: (isCorrect: boolean) => void;
  isLast: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, onNext, isLast }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (option: string) => {
    if (selectedOption !== null) return; 
    
    setSelectedOption(option);
    setIsCorrect(option === question.correctAnswer);
  };

  const handleNext = () => {
    onNext(isCorrect || false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-6">{question.text}</h2>
      
      <div className="space-y-3">
        {question.options.map((option) => {
          let buttonClass = "w-full text-left p-4 rounded-xl border transition-all duration-200 ";
          
          if (selectedOption === null) {
            buttonClass += "border-gray-200 hover:border-blue-500 hover:bg-blue-50";
          } else if (option === question.correctAnswer) {
            buttonClass += "border-green-500 bg-green-100 text-green-800 font-semibold";
          } else if (option === selectedOption) {
            buttonClass += "border-red-500 bg-red-100 text-red-800 font-semibold";
          } else {
            buttonClass += "border-gray-200 opacity-50";
          }

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={selectedOption !== null}
              className={buttonClass}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selectedOption !== null && (
        <div className="mt-6 border-t pt-4">
          <p className={`text-center font-medium mb-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? 'ಸರಿಯಾದ ಉತ್ತರ! (Correct!)' : 'ತಪ್ಪಾದ ಉತ್ತರ (Incorrect)'}
          </p>
          <button
            onClick={handleNext}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            {isLast ? 'ಮುಕ್ತಾಯ (Finish)' : 'ಮುಂದಿನ ಪ್ರಶ್ನೆ (Next Question)'}
          </button>
        </div>
      )}
    </div>
  );
};