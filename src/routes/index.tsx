import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { QuizPage } from '../pages/QuizPage';
// import { Leaderboard } from '../pages/Leaderboard';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element="{<Home"/>} />
      <Route path="/quiz/:categoryId" element="{<QuizPage"/>} />
      
    </Routes>
  );
};