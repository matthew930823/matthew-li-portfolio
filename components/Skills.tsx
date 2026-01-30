import React from 'react';
import { SKILLS } from '../constants';
import { Code, Smartphone, Brain, Gamepad2, Database, Layout, Server, Cpu } from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  Code, Smartphone, Brain, Gamepad2, Database, Layout, Server, Cpu
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          技術 <span className="gradient-text">戰力</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <div 
                key={idx} 
                className="glass-panel p-6 rounded-2xl hover:bg-slate-800/50 transition-all hover:-translate-y-2 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1 bg-slate-900/50 rounded-md text-sm text-gray-300 border border-slate-700/50 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-default"
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