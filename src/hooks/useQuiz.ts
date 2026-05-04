import { useState, useEffect } from 'react';
import { QuizRepository } from '../api/repositories/QuizRepository';
import { Question } from '../types/quiz';

export const useQuiz = (categoryId: string) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await QuizRepository.getQuestionsByCategory(categoryId);
        setQuestions(data);
      } finally {
        setLoading(false);
      }
    };
    loadQuestions();
  }, [categoryId]);

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === questions[currentIndex].correct_index) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  return { questions, currentIndex, score, loading, isFinished, handleAnswer };
};