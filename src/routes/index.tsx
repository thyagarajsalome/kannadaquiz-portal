import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { QuizPage } from '../pages/QuizPage';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Correct: element={<Home />}  |  Incorrect: element="{<Home />}" */}
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:categoryId" element={<QuizPage />} />
    </Routes>
  );
};