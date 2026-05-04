import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizRepository } from '../api/repositories/QuizRepository';
import { Category } from '../types/quiz';
import { BookOpen, ArrowRight, Loader2 } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await QuizRepository.getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error loading categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

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
            Daily updates for FDA, SDA, and KPSC aspirants.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/quiz/kpsc-general')}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Start Free Quiz <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* --- DYNAMIC CATEGORIES --- */}
      <section className="px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">ವಿಷಯಗಳು (Categories)</h2>
        
        {loading ? (
          <div className="flex flex-col items-center py-20 text-slate-400">
            <Loader2 className="w-10 h-10 animate-spin mb-4" />
            <p>Loading Quiz categories...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div 
                key={cat.id}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                onClick={() => navigate(`/quiz/${cat.slug}`)}
              >
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{cat.name_kn}</h3>
                <p className="text-slate-500 text-sm">Tap to start practice</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};