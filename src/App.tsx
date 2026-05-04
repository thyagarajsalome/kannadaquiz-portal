import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Layout } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <Router>
        {/* --- NAVIGATION BAR --- */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="container mx-auto px-4 h-16 flex justify-between items-center">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => window.location.href = '/'}
            >
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Layout className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-black tracking-tighter uppercase">
                Kannada<span className="text-indigo-600">Quiz</span>
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
              <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
              <a href="/leaderboard" className="hover:text-indigo-600 transition-colors">Leaderboard</a>
              <button className="px-5 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all">
                Sign In
              </button>
            </div>
          </div>
        </nav>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="container mx-auto px-4 py-8">
          <AppRoutes />
        </main>

        {/* --- FOOTER --- */}
        <footer className="border-t border-slate-200 bg-white py-12 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} KannadaQuiz.in — Built for KPSC & Govt Exam Aspirants.
            </p>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;