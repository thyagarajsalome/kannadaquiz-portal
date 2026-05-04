import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';

export const QuizPage: React.FC = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { questions, currentIndex, score, loading, isFinished, handleAnswer } = useQuiz(categoryId!);

  if (loading) return <div className="text-center py-20">Loading Questions...</div>;
  
  if (isFinished) return (
    <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-5xl font-extrabold text-indigo-600 mb-6">{score} / {questions.length}</p>
      <button 
        onClick={() => navigate('/')}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold"
      >
        Back to Home
      </button>
    </div>
  );

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <span className="text-sm font-medium text-slate-500">Question {currentIndex + 1} of {questions.length}</span>
        <div className="w-full bg-slate-200 h-2 rounded-full mt-2">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all" 
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-8">{currentQuestion.text_kn}</h2>

      <div className="grid gap-4">
        {currentQuestion.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            className="w-full text-left p-5 rounded-xl border-2 border-slate-100 hover:border-indigo-500 hover:bg-indigo-50 transition-all font-medium"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};