import React from 'react';
import { SKILLS } from '../constants';
import { Code, Smartphone, Brain, Gamepad2, Database, Layout, Server, Cpu } from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  Code, Smartphone, Brain, Gamepad2, Database, Layout, Server, Cpu
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-6 md:px-8 lg:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
          技術 <span className="gradient-text">戰力</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {SKILLS.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <div 
                key={idx} 
                className="glass-panel p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl hover:bg-slate-800/50 transition-all hover:-translate-y-2 group"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-100">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-2 sm:px-3 py-1 bg-slate-900/50 rounded-md text-xs sm:text-sm text-gray-300 border border-slate-700/50 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;