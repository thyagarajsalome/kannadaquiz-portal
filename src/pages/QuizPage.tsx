// src/pages/QuizPage.tsx
import React, { useState } from 'react';
import { QuizCard } from '../components/QuizCard';
import { Question } from '../types/quiz';

// Our sample Kannada questions
const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "ಕರ್ನಾಟಕದ ರಾಜಧಾನಿ ಯಾವುದು?",
    options: ["ಮೈಸೂರು", "ಬೆಂಗಳೂರು", "ಹುಬ್ಬಳ್ಳಿ", "ಮಂಗಳೂರು"],
    correctAnswer: "ಬೆಂಗಳೂರು"
  },
  {
    id: 2,
    text: "ಕನ್ನಡದ ಮೊದಲ ಶಾಸನ ಯಾವುದು?",
    options: ["ಹಲ್ಮಿಡಿ ಶಾಸನ", "ಬಾದಾಮಿ ಶಾಸನ", "ಶ್ರವಣಬೆಳಗೊಳ ಶಾಸನ", "ಅಶೋಕನ ಶಾಸನ"],
    correctAnswer: "ಹಲ್ಮಿಡಿ ಶಾಸನ"
  },
  {
    id: 3,
    text: "ಕರ್ನಾಟಕದ ರಾಜ್ಯ ಪ್ರಾಣಿ ಯಾವುದು?",
    options: ["ಹುಲಿ", "ಆನೆ", "ಸಿಂಹ", "ಚಿರತೆ"],
    correctAnswer: "ಆನೆ"
  }
];

export const QuizPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleNextQuestion = (isCorrect: boolean) => {
    if (isCorrect) setScore(prev => prev + 1);

    if (currentIndex < SAMPLE_QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {!showResults ? (
        <div className="w-full">
          <div className="text-center mb-6 text-gray-500 font-medium">
            ಪ್ರಶ್ನೆ (Question) {currentIndex + 1} / {SAMPLE_QUESTIONS.length}
          </div>
          <QuizCard 
            question={SAMPLE_QUESTIONS[currentIndex]} 
            onNext={handleNextQuestion}
            isLast={currentIndex === SAMPLE_QUESTIONS.length - 1}
          />
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">ಫಲಿತಾಂಶಗಳು (Results)</h2>
          <p className="text-xl mb-6">
            ನಿಮ್ಮ ಅಂಕಗಳು (Your Score): <br/>
            <span className="text-4xl font-extrabold text-blue-600 mt-2 inline-block">
              {score} / {SAMPLE_QUESTIONS.length}
            </span>
          </p>
          <button
            onClick={restartQuiz}
            className="w-full bg-gray-800 text-white font-semibold py-3 rounded-xl hover:bg-gray-900 transition-colors"
          >
            ಮರುಪ್ರಾರಂಭಿಸಿ (Restart)
          </button>
        </div>
      )}
    </div>
  );
};