import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Trophy, Zap, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  // In a real app, these would come from your Supabase 'categories' table
  const featuredCategories = [
    { id: 'kpsc-general', name: 'General Kannada', count: '1,200+ Qs', icon: <BookOpen className="w-6 h-6" /> },
    { id: 'current-affairs', name: 'Daily Current Affairs', count: 'Daily Updates', icon: <Zap className="w-6 h-6" /> },
    { id: 'history', name: 'Karnataka History', count: '850+ Qs', icon: <Trophy className="w-6 h-6" /> },
  ];

  return (
    <div className="flex flex-col gap-16 py-10">
      {/* --- HERO SECTION --- */}
      <section className="relative text-center px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
            KPSC & Govt Exam Prep
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            ನಿಮ್ಮ ಕನಸಿನ ಉದ್ಯೋಗಕ್ಕಾಗಿ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              ಸಿದ್ಧರಾಗಿ!
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Master Kannada competitive exams with our AI-powered quiz platform. 
            Automated daily updates for FDA, SDA, and KPSC aspirants.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/quiz/all')}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Start Free Quiz <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-all">
              View Leaderboard
            </button>
          </div>
        </div>
      </section>

      {/* --- FEATURED CATEGORIES --- */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {featuredCategories.map((cat) => (
          <div 
            key={cat.id}
            className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            onClick={() => navigate(`/quiz/${cat.id}`)}
          >
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{cat.name}</h3>
            <p className="text-slate-500 text-sm">{cat.count}</p>
          </div>
        ))}
      </section>
    </div>
  );
};