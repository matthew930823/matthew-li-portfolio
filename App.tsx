import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      
      <footer className="py-6 sm:py-8 text-center text-gray-500 text-xs sm:text-sm border-t border-white/5 px-6">
        <p>© {new Date().getFullYear()} Matthew Li. 使用 React & Tailwind 建構。</p>
      </footer>
    </div>
  );
};

export default App;